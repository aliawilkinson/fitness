# BDR-0004: Prototype a personal fitness operating system

| Field | Value |
|---|---|
| Status | **Proposed**; product direction prepared for validation |
| Date | September 13, 2026 |
| Decision-makers | The trainer and the engineer, jointly; acceptance not recorded |
| Scope | Software interface for the foundations product |
| Related records | [BDR-0001](0001-supported-strength-program.md), [BDR-0003](0003-sales-based-setup-and-support.md) |
| Review point | After the engineer's four-week user-zero trial and five external usability sessions |

## Context

The course outline identifies the relevant health topics, but a curriculum alone does not solve the engineer's own problem. She wants to provide a profile and constraints once, receive a specific plan, see one manageable next action when overwhelmed, and still be able to inspect the reasoning and educational material in depth.

This reframes the software opportunity. The initial job is not generating unlimited fitness information. It is maintaining a coherent personal plan across food, sleep, movement, recovery, substances, scheduling, and real-world transitions.

The engineer has volunteered to be the first participant. This is useful founder evidence about the desired workflow, but it is one person's experience and does not establish external demand.

## Proposed decision

Build a narrow, private **personal fitness operating system** prototype for a four-week user-zero trial. Organize the interface at three depths:

1. **Today:** the next actions, times, quantities, packing needs, and a deliberately short “overwhelmed” view.
2. **My Plan:** the entire week, goals, target calculations, workouts, meals, recovery, and door-to-door logistics.
3. **Learn:** the evidence, explanations, demonstrations, alternatives, and professional boundaries behind any recommendation.

Use structured calculators and trainer-approved rules for quantitative targets and exercise programming. Use AI to collect information conversationally, explain results, assemble the schedule, answer questions, and revise the plan when circumstances change. Preserve the inputs, assumptions, source, and review status for every consequential recommendation.

Treat the existing [course outline](../plans/eat-sleep-move-foundations-course.md) as the knowledge map and the [targets and decision guide](../plans/foundations-targets-and-decisions.md) as the first rule specification. Use the [Workout Outing Planner](../plans/workout-outing-planner.md) for the schedule model.

Do not begin with a broad production platform, social network, autonomous medical adviser, or generalized trainer marketplace.

## Required product behavior

### Conversational intake

The app asks only questions that can change the plan, saves the answers, explains why sensitive questions matter, and permits “I don't know.” Intake covers:

- age, sex, height, weight, optional body-composition estimate, pregnancy or breastfeeding status;
- goals, priorities, intended timeline, and measures of success;
- health conditions, medications, symptoms, pain, injuries, eating-disorder considerations, and family history;
- current activity, training experience, preferred and disliked activities, social preferences, equipment, and budget;
- work, sleep, travel, facility, parking, shower, and next-destination constraints;
- ordinary meal pattern, food preferences, cooking capacity, and tracking tools;
- alcohol, cannabis, nicotine, caffeine, and recovery patterns.

### Plan output contract

Every recommendation that affects the user's day should contain:

| Field | Purpose |
|---|---|
| Action | What to do |
| Quantity | How much or how long |
| Time | When it begins and ends |
| Place and transition | Where, travel, parking, changing, and next destination |
| Reason | What goal or health function it supports |
| Calculation or rule | How the number or choice was derived |
| Confidence and assumption | What is known, estimated, or still missing |
| Alternative | Full, short, and minimum versions |
| Stop or escalate condition | When trainer or clinical input is needed |
| Review date | When observations should change the recommendation |

### Overwhelmed mode

The Today screen must support a one-action view. It shows:

- the single next action;
- its start time and duration;
- what must be ready;
- one button to mark done, modify, or choose the agreed minimum version;
- optional “why this?” and “show whole day” expansions.

It must not respond to overwhelm by presenting another long checklist.

### Explainability

Any number such as calories, protein, water, sleep opportunity, or workout load must open into:

1. the user's inputs;
2. the calculation or trainer-approved decision rule;
3. the source and date;
4. the assumptions and professional boundary;
5. the observations that will cause an adjustment.

### Weekly revision

The app compares planned and completed behavior, actual outing time, energy, hunger, sleep, pain, enjoyment, and optional body measurements. It changes the smallest likely bottleneck and asks for trainer review when the rule set does not cover the situation.

## Why this direction

### It resolves a concrete execution problem

The desired experience combines information that is normally fragmented across courses, calculators, food trackers, workout apps, calendars, and notes. The useful output is a single executable plan with accessible reasoning.

### It supports different cognitive depths

The same user may want one instruction during a stressful transition and a complete explanation later. Today, My Plan, and Learn provide those depths without requiring separate products.

### It gives the trainer a defensible role

The trainer can approve movement rules, demonstrations, progressions, substitutions, and coaching boundaries. The software handles repeated explanation, arithmetic, scheduling, logging, and preparation. Paid coaching remains valuable for observation, judgment, accountability, and individual adaptation.

### It can validate software before a broad build

A user-zero trial can reveal whether the system saves decisions, increases completed outings, reduces planning stress, and keeps recommendations internally consistent. Those are testable product behaviors.

## Alternatives considered

| Alternative | Advantage | Why it is not the first decision |
|---|---|---|
| Deliver the course as videos and PDFs | Fast to produce | Still leaves the participant to convert information into a personal schedule and daily decisions |
| Use a general AI chat directly | No custom software | Context, calculations, plan state, sources, and safe update rules are difficult to maintain consistently |
| Build a workout generator | Narrow and familiar | Misses food, sleep, logistics, substances, and adherence constraints that determine whether workouts happen |
| Integrate every tracker immediately | Rich automation | Adds dependency and privacy complexity before the core workflow is validated |
| Build a full multi-client coaching platform | Larger commercial surface | Expands roles, permissions, billing, and data handling before the personal planning loop works |

## Consequences and tradeoffs

The app will handle sensitive health and behavioral information, so privacy, deletion, export, access control, and explicit sharing with a coach must be designed before production use. Personal data from the engineer's trial should not be committed to the shared repository.

The plan engine needs deterministic calculations, versioned sources, and explicit trainer review states. Free-form model output alone is insufficient for consequential numbers or exercise progression.

The narrow prototype may prove personally useful without proving a business. External interviews, observed onboarding, and purchase tests remain necessary.

## Validation criteria

During the four-week user-zero trial, measure:

- time from opening the app to knowing the next action;
- planned versus completed activity outings;
- accuracy of door-to-door time estimates;
- number of decisions the user had to recreate elsewhere;
- use of Today, My Plan, Learn, and overwhelmed mode;
- contradictions or unsafe recommendations;
- occasions when trainer or clinical review was correctly requested;
- whether the weekly revision made the next week easier.

Then test the same workflow with five women who resemble the intended audience. Record comprehension, trust, plan completion, perceived value, and willingness to pay. Continue the software product only if the workflow solves a repeated problem beyond the founding user.

## Acceptance and implementation

This record proposes a small user-zero prototype while preserving BDR-0001's requirement to validate before a broad software build. It does not record either collaborator's acceptance, authorize use of the trainer's brand or content, or establish ownership of the resulting software and materials.
