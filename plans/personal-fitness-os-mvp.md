# Personal Fitness OS: User-Zero MVP

## Product sentence

Tell the app who you are, what you want, and how your life works. It produces a specific daily and weekly plan, keeps the calculations and evidence inspectable, and reduces the interface to one next action when you are overwhelmed.

## Information architecture

### Today

The default screen answers:

- What do I do next?
- When do I start preparing?
- What do I eat or drink around it?
- What do I bring?
- What is the short version if the day changes?

The first card contains one action. The remaining day is collapsed. The user can expand the whole checklist or open the reason behind any recommendation.

### My Plan

This view contains:

- the full week and complete door-to-door calendar blocks;
- calorie, macro, hydration, sleep, and activity targets;
- full, short, and minimum versions of each workout;
- meal templates and reusable foods or recipes;
- progress and the next review date;
- assumptions and unanswered questions.

### Learn

This is a browsable map rather than a required linear course:

- Eat
- Sleep and recover
- Move
- Make It Fit
- Alcohol, cannabis, and real life
- Measurements and adjustment
- What a trainer does
- When to use a clinician, dietitian, physical therapist, or pharmacist

Every item is available at three depths: a short answer, the practical lesson, and the evidence or detailed explanation.

## Onboarding flow

Use a conversational interview with visible progress and autosave.

1. **Identity and body:** preferred name, age, sex used for relevant calculations, height, weight, optional body-fat estimate, and measurement method.
2. **Outcome:** desired appearance, health, performance, confidence, or life outcome; relative priority; target or event date.
3. **Safety:** pregnancy or breastfeeding, symptoms, pain, injuries, conditions, medications, clinician restrictions, eating-disorder concerns, and relevant family history.
4. **Movement:** current activity, experience, liked and disliked movement, social preferences, skills to learn, available locations, equipment, and budget.
5. **Food:** meal rhythm, preferences, allergies, cooking reality, restaurant frequency, current tracking tool, and willingness to weigh food.
6. **Sleep and recovery:** required wake times, typical sleep, caffeine, stress, travel, and recovery.
7. **Alcohol and cannabis:** optional private baseline questions needed for sleep, safety, calories, and scheduling.
8. **Logistics:** fixed commitments, route, parking, changing, shower, next destination, and preparation needs for selected activities.

The app may create a preliminary plan with missing information, but it marks the affected recommendations as provisional.

## First generated plan

The initial output should include:

1. a plain-language summary of the strategy;
2. the target timeline as a range with scheduled reassessment;
3. daily energy, protein, fat, carbohydrate, fiber, and fluid estimates;
4. a Cronometer setup card and a low-burden tracking method;
5. a sleep opportunity calculated from required wake time;
6. the first four weeks of movement, including trainer-reviewed workouts;
7. one fully calculated activity outing;
8. the next seven days as calendar-ready blocks;
9. today's one-action checklist;
10. the assumptions, safety questions, and review date.

## Calculation layer

Store a calculation result separately from the prose that explains it:

```text
target_id
value and unit
valid range
profile inputs used
formula or rule version
source and source date
assumptions
trainer review status
created_at
review_at
supersedes_target_id
```

Initial calculators:

- weight and body-measurement conversions;
- energy estimate and goal timeline;
- protein and optional macro allocation;
- fiber, calcium, vitamin D, and total-water references;
- sleep opportunity from wake time;
- weekly aerobic and strength mix;
- strength progression from repetitions, effort, and form status;
- complete activity-outing time;
- standard alcohol drink estimation;
- two-to-four-week trend review.

AI turns structured results into useful language and schedules. It does not silently change formulas, invent measurements, or hide uncertainty.

## Cronometer handoff

For the first version, provide instructions rather than an integration:

1. Open **More → Targets → Macro & Energy Targets**.
2. Turn on a custom energy target if the plan supplies one.
3. Choose fixed macro targets and enter protein, carbohydrate, and fat grams.
4. Leave “add expenditure above baseline” off when the plan already includes intended activity in the energy estimate, unless the calculation explicitly says otherwise.
5. Weigh foods in grams for the initial learning period.
6. Create custom meals for repeated combinations.
7. For batch recipes, enter ingredients and the final cooked recipe weight so portions scale correctly.

The app should explain whether exercise calories are included so the user is not told to eat them twice.

## Daily checklist behavior

The checklist is generated from the plan and today's schedule. A typical day contains no more than five top-level items:

- complete the scheduled movement or selected minimum version;
- complete the three meal anchors and protein target;
- finish the planned water bottles by the agreed times;
- begin wind-down and lights-out on schedule;
- prepare tomorrow's bag, food, or booking.

Alcohol or cannabis appears only when planned or logged; the interface does not moralize or hide the effect on sleep, safety, calories, or the following day.

## Overwhelmed mode

When selected, show:

```text
NEXT: Fill one water bottle.
START: Now.
TAKES: 2 minutes.
THEN: Put shoes and keys beside the gym bag.

[Done] [Use minimum plan] [Show why]
```

After completion, reveal the next action. Do not show streak loss, accumulated failure, or the entire backlog.

## Weekly review

Ask a small number of questions:

- Which planned activities happened?
- What consumed more time than expected?
- How was sleep, hunger, energy, enjoyment, and soreness?
- Did pain or a health concern appear?
- Was alcohol or cannabis use different from the plan?
- What felt confusing?

The engine proposes one or two changes and shows why. The user approves the new week. Exercise changes outside approved rules enter a trainer-review queue.

## First build slices

### Slice 1 — Plan generator

- conversational onboarding;
- structured profile;
- calculation records with sources and assumptions;
- generated four-week plan;
- editable weekly calendar;
- Today and overwhelmed views.

### Slice 2 — Execution and learning

- Workout Outing Planner;
- trainer-approved workout cards;
- packing and transition checklists;
- expandable Learn content;
- completion, actual-time, energy, hunger, sleep, and pain logs.

### Slice 3 — Review and coaching

- weekly plan revision;
- trainer review queue;
- explicit plan sharing and revocation;
- export and deletion;
- measurement trends;
- payment test for a supported four-week version.

## Acceptance criteria for user zero

- The user can complete onboarding over multiple sittings without losing progress.
- Every quantitative target exposes its inputs, rule, assumptions, and source.
- Today can collapse to one next action.
- Every scheduled workout includes preparation and transition time.
- The user can choose full, short, or minimum without rebuilding the day.
- The plan can be revised without losing the prior version or observations.
- The app never treats a body-fat estimate as exact.
- The app routes symptoms, medication questions, pregnancy-related care, lab interpretation, deficiencies, eating-disorder concerns, and unapproved exercise substitutions to appropriate human review.
- After four weeks, the team can tell whether the app reduced planning work and increased completed outings.

## First validation question

The prototype should answer one question before the team adds integrations or a broad content library:

> Does a structured personal plan with a one-action interface help the participant follow through more reliably than the same information in chat and documents?
