"""Reproduce descriptive market calculations; no purchases or forecasts are inferred."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def calculate(data):
    measures = {row['id']: row for row in data['measurements']}
    value = lambda key: measures[key]['value']
    results = {
        'adult_activity_shortfalls': [
            {'measure_id': key, 'shortfall_percent': round(100 - value(key), 1),
             'population': 'U.S. adults 18+, 2024; age-adjusted to the 2000 standard population',
             'interpretation': 'Guideline shortfall, not unmet paid demand'}
            for key in ['strength_2024', 'aerobic_adjusted_2024', 'both_2024']
        ],
        'strength_vs_aerobic_shortfall_difference_pp': round(value('aerobic_adjusted_2024') - value('strength_2024'), 1),
        'women_aerobic_only_population_approx': round(value('women_weighted_population') * value('women_aerobic_only') / 100),
        'women_aerobic_only_interpretation': 'Approximate population equivalent using the published pooled 2022/2024 weighted base and rounded percentage. Not a 2026 count, buyer estimate, or official count confidence interval.',
        'fitness_goal_population_equivalents': [
            {'measure_id': key, 'approx_people': round(value('fitness_goal_setters') * value(key) / 100),
             'interpretation': 'Rounded goal-interest population equivalent. Categories overlap; not unsatisfied customers or expected buyers.'}
            for key in ['goal_strength', 'goal_mobility', 'goal_mental_health']
        ],
        'sleep_shortfall_vs_aerobic_shortfall': {
            'aerobic_shortfall_percent': round(100 - value('aerobic_crude_2024'), 1),
            'aerobic_shortfall_ci95_percent': [round(100 - measures['aerobic_crude_2024']['ci95'][1], 1), round(100 - measures['aerobic_crude_2024']['ci95'][0], 1)],
            'short_sleep_percent': value('short_sleep_2024'),
            'interpretation': 'Both crude adult NHIS 2024 estimates, but different outcomes. Neither identifies demand for a digital product.'
        },
        'commercial_unmet_demand_by_segment': None,
        'commercial_unmet_demand_reason': 'No common-sample observations jointly measure recent unresolved need, dissatisfaction with alternatives, digital suitability, and purchase at a specified price.',
    }
    return results


def verify(data, results, sources):
    rows = data['measurements']
    assert len({row['id'] for row in rows}) == len(rows)
    source_ids = {row['id'] for row in sources}
    assert len(source_ids) == len(sources)
    for row in rows:
        assert row['source_id'] in source_ids
        assert row['population'] and row['data_period'] and row['evidence_type']
        if row['unit'] == 'percent':
            assert 0 <= row['value'] <= 100
            if row.get('ci95'):
                assert row['ci95'][0] <= row['value'] <= row['ci95'][1]
    assert results['adult_activity_shortfalls'][0]['shortfall_percent'] == 67.1
    assert results['adult_activity_shortfalls'][1]['shortfall_percent'] == 52.0
    assert results['adult_activity_shortfalls'][2]['shortfall_percent'] == 73.6
    assert results['strength_vs_aerobic_shortfall_difference_pp'] == 15.1
    assert results['women_aerobic_only_population_approx'] == 12170927
    assert results['fitness_goal_population_equivalents'][0]['approx_people'] == 41000000
    assert results['commercial_unmet_demand_by_segment'] is None


if __name__ == '__main__':
    data = json.loads((ROOT / 'measurements.json').read_text())
    sources = json.loads((ROOT / 'sources.json').read_text())
    results = calculate(data)
    verify(data, results, sources)
    (ROOT / 'calculated-results.json').write_text(json.dumps(results, indent=2) + '\n')
    print(json.dumps(results, indent=2))
