# Personal Fitness OS: Canonical Product Plan

**Product ID:** `personal-fitness-os`

**Stage:** Incubation and user-zero validation

**Date:** September 13, 2026
**Decision status:** The product experiment is authorized for planning and onboarding. The trainer has not yet accepted the commercial terms, brand use, content licence, or operating role. No production health service or paid launch is authorized by this plan.

## Product sentence

Personal Fitness OS turns a woman's goals, constraints, preferences, and check-ins into an explainable plan for eating, sleeping, moving, recovering, and fitting fitness into real life. It shows one useful action when she is overwhelmed and the full plan, evidence, and history when she wants detail.

## Who, what, when, where, why, and how

| Question | Current answer |
|---|---|
| **Who** | Start with U.S. women who want to begin or resume fitness but feel overwhelmed, inconsistent, bored by generic gym routines, or unsure what applies to them. Alia is user zero. A personal trainer with nutrition expertise supplies professional fitness judgment and reviewed content; the software engineer designs the product, implementation, analytics, and operating system. |
| **What** | A mobile-friendly personal fitness planner with four views: **Today**, **My Plan**, **Progress**, and **Learn**. It combines structured targets, trainer-approved movement rules, door-to-door logistics, check-ins, plan versioning, and bounded human review. The first paid service is a four-week supported strength-start program, with the foundations curriculum included. |
| **When** | Begin with a four-week private user-zero trial, while interviewing potential customers. Compare the prototype with existing resources, then run a 10–15-person paid pilot only after the trainer accepts the offer and business terms. Build production software only after repeated workflow and purchase evidence. |
| **Where** | Use Anaheim and nearby Southern California for observation of actual gyms, classes, travel, parking, changing, and trainer interactions. Design the standard service for remote U.S. delivery so local friendship and physical proximity do not conceal product problems. |
| **Why** | The measured U.S. strength-participation shortfall is larger than the comparable aerobic shortfall, and prior research found repeated uncertainty about starting, adapting, and sustaining fitness. Existing programs already supply workouts and information. The hypothesis is that people will pay for help turning that information into one coherent, adaptive plan with appropriate human judgment. |
| **How** | Use deterministic calculators and versioned trainer-approved rules for consequential targets; use AI for conversation, explanations, schedule assembly, and retrieval. Measure behavior and trends, change the smallest relevant variable, explain every change, and route health or movement questions outside the rules to the appropriate person. |

## The customer and the buyer

### Primary participant

The first participant is likely to:

- care about appearance, health, confidence, strength, longevity, or a life event;
- have tried classes, a gym membership, apps, social media advice, or intermittent dieting;
- understand that exercise matters but still struggle to decide what to do today;
- prefer social, enjoyable, or skill-based movement over repetitive gym time;
- need help with scheduling, travel, parking, preparation, meals, sleep, and recovery as much as exercise selection;
- want a short answer during execution and a detailed explanation when learning;
- benefit from a trainer but be unable or unwilling to buy unlimited one-to-one training.

The first buyer is the participant paying for a bounded four-week experience. Existing personal-training clients may receive the foundations material as part of coaching, but they must be measured separately from standalone purchasers.

### Founding roles

| Role | Initial responsibility |
|---|---|
| Trainer | Approve exercise rules, demonstrations, progressions, regressions, substitutions, scope boundaries, participant suitability, and coaching escalations; create or license the fitness content; promote an accepted offer. |
| Engineer | Run research and usability work; design the workflow; build the smallest delivery and software system; implement calculations, versioning, privacy, analytics, and sales reporting; keep support within an agreed scope. |
| Both | Select the audience, approve the offer and price, review evidence, decide what to build, agree expenses and compensation, and decide whether to continue. |
| Clinician, registered dietitian, physical therapist, or pharmacist | Handle symptoms, diagnosis, medication, laboratory interpretation, injury care, pregnancy-specific questions, eating-disorder risk, and individualized matters outside the trainer's lawful and credentialed scope. |

The trainer's exact nutrition credential and permitted scope must be recorded before the product describes her as a nutritionist or assigns nutrition reviews to her.

## The problem being solved

Fitness knowledge is fragmented across courses, workout apps, food trackers, calendars, social media, and trainers. A participant still has to determine:

- what applies to her;
- what to do today and for how long;
- how the activity fits between the rest of her commitments;
- what to eat, drink, bring, book, or prepare;
- what ordinary discomfort is expected and what should stop the session;
- whether a measurement is noise or a reason to change the plan;
- when to progress, rest, maintain, reduce, or ask a person.

The product's job is to reduce those decisions without hiding the reasoning or pretending that AI is a clinician or trainer watching the participant move.

## The product experience

### Today

Show the next action, start time, duration, preparation, location, transition time, food or hydration context, and full/short/minimum versions. Overwhelmed mode reveals one action at a time.

### My Plan

Show the complete week, target calculations, workouts, meal structure, sleep opportunity, recovery, activity-outing logistics, assumptions, unanswered questions, and next review date.

### Progress

Show the current phase—calibration, fat loss, maintenance, or muscle gain—plus multiweek trends, adherence, strength, recovery, plan history, and the current decision: **hold, progress, simplify, maintain, or request review**.

### Learn

Provide Eat, Sleep and Recover, Move, Make It Fit, Substances and Real Life, Measurements, and Professional Help at three depths: a short answer, a practical lesson, and evidence or a detailed explanation.

## The adaptive operating loop

```text
Plan → Do → Measure → Compare with the expected range
     → Hold or change one variable → Explain → Set the next review
```

- Daily observations take less than one minute when possible.
- Weight is interpreted as a weekly average across a two-to-four-week trend, never as one decisive reading.
- Waist, photos, performance, clothing fit, and subjective outcomes supplement weight.
- Consumer body-fat estimates are optional trends, not exact facts.
- Every target retains its inputs, formula or rule version, source, assumptions, reviewer, creation date, review date, and superseded target.
- Rest, lighter training, progression, deloads, and phase changes use inspectable rules from the [adaptive tracking specification](adaptive-tracking-and-phase-rules.md).

## Initial offer and business model

### Validation offer

Run a four-week supported strength-start pilot for 10–15 women. The working price hypothesis is **$49**, chosen to test payment rather than represent a validated market price. Include:

- a short intake;
- one coherent trainer-approved starting plan;
- practical foundations lessons delivered when relevant;
- Today, My Plan, Progress, and Learn through the lightest workable interface;
- session cards and approved alternatives;
- one bounded weekly group question session;
- a stated limit and response time for individual educational questions.

Individual form review, personalized clinical nutrition, and unlimited coaching are separate services.

### Commercial arrangement with the trainer

The current negotiation proposal is that the trainer retains her business and existing clients. The engineer receives:

- 20% of defined digital-product receipts;
- 10% of the first package for a new coaching client acquired through the agreed site funnel;
- a 12-month term, a 90-day review, an initial setup cap, a monthly support cap, transparent reporting, and an early buyout option.

These are proposed terms, not an accepted agreement or an industry benchmark. Before selling, both people need a written agreement covering eligible receipts, refunds, scope, content and software licences, customer ownership, expenses, reporting, privacy responsibilities, termination, and handoff. See the [sales-based proposal](website-revenue-share-proposal.md).

### Offer ladder to test later

1. Free useful content or orientation that identifies the next problem.
2. The paid four-week supported start.
3. A self-paced foundations product if people value the material without support.
4. Personal training or a continuing program for participants who want ongoing observation and accountability.
5. Software subscription only if ongoing adaptation produces recurring value after the first month.

## Where the product should operate

The local pilot should observe the whole outing: deciding to go, booking, packing, driving, parking, finding equipment, changing, completing the activity, showering, and reaching the next destination. The remote version must work through ordinary gyms and classes without depending on one Anaheim facility.

The first software surface should be a responsive private web application. It is faster to test across phones and desktops and does not require an app-store release. Native mobile becomes a later decision based on observed needs such as notifications, camera use, or offline workouts.

## Timeline and decision gates

| Time | Work | Evidence required to continue |
|---|---|---|
| Week 0 | Trainer conversation and founder alignment | Accepted audience, participant boundaries, content role, time commitment, commercial terms to negotiate, and permission to use her name or materials. |
| Weeks 1–4 | Alia's private user-zero trial | Faster time to a clear next action; completed activity outings; accurate logistics; consistent calculations; useful weekly revision; safe escalation. |
| Weeks 1–3 | Twelve customer interviews and five trainer interviews if the coach channel remains relevant | At least six customers describe a recent, specific unresolved obstacle the proposed workflow can address. Record prior purchases and existing alternatives. |
| Weeks 3–5 | Six comparative usability sessions | The prototype resolves repeated problems that a credible existing beginner resource leaves unresolved. |
| Weeks 6–10 | 10–15-person paid manual pilot | At least 10 purchases, eight participants starting, six naming a resolved obstacle, acceptable refunds, and support time that can fit the price. These are internal learning thresholds. |
| Week 11 | Economics and product review | Contribution after transaction costs and variable support; trainer and engineer hours; which part created value; graduate, revise, or stop decision. |
| After evidence | Build the smallest production slice | Implement only workflows repeatedly used in the trials. Add authentication, persistent sensitive data, payments, or deployment through separately approved milestones. |

Dates begin when the trainer alignment gate is complete; they are sequencing estimates rather than commitments.

## MVP scope

### Build or simulate first

- resumable conversational intake;
- structured profile and safety-routing flags;
- deterministic targets with visible inputs and assumptions;
- a four-week plan with full, short, and minimum options;
- door-to-door activity blocks;
- Today and overwhelmed modes;
- Progress trends and versioned decisions;
- trainer-reviewed workout cards and limited review queue;
- editable weekly plan and simple completion/check-in logging;
- explicit export, deletion, and coach-sharing controls before real user data is stored.

### Delay until evidence supports it

- automatic wearable, Cronometer, calendar, or gym integrations;
- a broad exercise-video library;
- native mobile applications;
- social feeds or challenges;
- an open-ended autonomous fitness or medical adviser;
- a trainer marketplace;
- indefinite subscriptions without a demonstrated continuing job.

## Product and safety rules

- Consequential targets come from tested functions and reviewed rules, not unconstrained model prose.
- AI may interview, explain, retrieve, summarize, schedule, and propose permitted changes.
- The system states uncertainty and never invents measurements, diagnoses, credentials, or observed outcomes.
- Exercise changes outside approved rules enter trainer review.
- Symptoms and matters outside the fitness scope route to an appropriate professional.
- Astrology may be retained as a personal preference if a user wants it in tone or motivation; it must not affect physiological calculations.
- Personal health data stays out of Git, MetadataDB, analytics events, general logs, and model-training exports.
- Users can inspect, correct, export, delete, and revoke coach access to their information.

## Success measures

### Customer usefulness

- time from opening the product to knowing the next action;
- planned versus completed activity outings;
- first-session start rate;
- logistics estimate accuracy;
- uncertainty before and after the supported period;
- repeated questions resolved without contradiction;
- whether the participant continues independently, seeks coaching, or stops.

### Business viability

- qualified offer exposure, purchase conversion, refunds, and acquisition source;
- revenue after refunds and transaction charges;
- trainer and engineer minutes per participant;
- variable delivery cost and contribution per participant;
- personal-training acquisition attributed to the funnel;
- willingness to purchase the next clearly described service.

### Safety and trust

- unsupported or contradictory recommendations;
- correct trainer or clinical escalations;
- participant comprehension of plan changes;
- privacy, deletion, and access-control failures;
- complaints caused by unclear access, renewal, refund, or support terms.

## Current decisions and open decisions

### Decided for the experiment

- Product identity: `personal-fitness-os`.
- Primary job: turn goals and constraints into an executable, adaptive plan.
- Primary interface: Today, My Plan, Progress, Learn.
- First participant: Alia in a private four-week user-zero trial.
- First market hypothesis: U.S. women starting or returning to fitness, with strength adoption as the first problem to test.
- Initial delivery: mobile-friendly web plus human support; no production services in the seed milestone.
- Local learning environment: Anaheim and surrounding Southern California; commercial delivery designed for the United States.

### Requires trainer agreement or customer evidence

- public brand and product name;
- trainer participation, content licence, review availability, and credential language;
- final commercial agreement and ownership of commissioned assets;
- offer wording, price, support limits, refund policy, and launch date;
- exact customer segment and whether strength outperforms mobility or broader fitness planning;
- production technology providers and ongoing subscription model.

## Source documents

- [Personal Fitness OS business decision](../decisions/0004-personal-fitness-operating-system.md)
- [User-zero MVP](personal-fitness-os-mvp.md)
- [Adaptive tracking and phase rules](adaptive-tracking-and-phase-rules.md)
- [Eat, Sleep, Move, Make It Fit curriculum](eat-sleep-move-foundations-course.md)
- [Targets and decisions](foundations-targets-and-decisions.md)
- [Workout Outing Planner](workout-outing-planner.md)
- [U.S. market-gap research](../research/2026-09-13-us-market-gap/report.md)
- [Paid pilot plan](first-month-gym-pilot.md)
- [Sales-based services proposal](website-revenue-share-proposal.md)
