# Visual refinement record

Reference: latest user-approved editorial timeline mock, copied to `work/reference/editorial-timeline.png`.

Each pass records an observed render, a concrete refinement, and verification after the change. Screenshots are stored in `work/screenshots/`.

## Pass 1 — desktop masthead and actions

- Inspected the first live render at 1161×1355 against the reference, including DOM geometry.
- Found inherited anchor color overriding the shadcn primary button, a gray secondary surface, excessive masthead/intro height and overly tight name tracking.
- Refined explicit white-on-black primary styling, white outline styling, masthead margins/tracking and intro grid tracks.
- Verified readable button labels, white secondary action, no horizontal overflow and a substantially closer masthead. Screenshot: `work/screenshots/pass-01-after.jpg`.
- Remaining desktop differences (header wrapping, date breaks and one two-line summary) feed pass 2.

## Pass 2 — desktop proportions and timeline rhythm

- Reviewed 1161px reference width and a wider 1440px layout.
- Increased the headline/name width slightly; tightened the introduction to two lines and corrected explicit date breaks.
- Shortened the visible Ideal Consulting summary while retaining details in its disclosure.
- Verified the header divider at y388.5 against reference y387, white actions and zero horizontal overflow. Screenshot: `work/screenshots/pass-02-after.jpg`.
- Independent visual reviewer compared the screenshot with the reference and supplied these refinements.

## Pass 3 — tablet reflow

- Inspected 768×1024: two desktop columns crowded the timeline, wrapped the impact heading and stacked the hero actions.
- Moved the single-column breakpoint to 900px and retained 32px tablet gutters, adjacent actions, a full-width timeline and two-column impact grid.
- Verified the 768px render: 689px main content track, no horizontal overflow, readable titles and comfortable date rail. Screenshot: `work/screenshots/pass-03-after.jpg`.

## Pass 4 — narrow-phone readability

- Inspected 390px and 320px. A separate date column consumed too much reading space on the smallest phone; the body's minimum width also risked overflow with scrollbars.
- Moved dates above each role at ≤480px, with a compact rail on the left. Increased mobile role titles/supporting text to 16/14px, removed the minimum body width and enlarged interactive targets.
- Verified at 320×740: document client/scroll width both 305px (15px scrollbar), 250px role content width, all nine jobs present and no horizontal overflow. Screenshot: `work/screenshots/pass-04-after-320.jpg`.
- Opened and closed every role plus the full toolkit with Enter. Verified nine open roles, six skill groups, visible focus and no expanded-content overflow; confirmed email and telephone targets.

## Pass 5 — final timeline and interaction consistency

- Inspected the complete desktop timeline after scrolling to Experience. Last two summaries wrapped and made those rows ~20px taller than the other seven.
- Shortened those summaries without removing their expanded detail; aligned the 20% label to the mock. Replaced competing intersection observers with deterministic anchor/hash navigation and Overview at page top.
- Production build and typecheck passed after the refinements. Final visual and independent code-review results are recorded below.

## Final checks

- Independent review identified missing logo-only source technologies and insufficient small-text contrast. Both were corrected and the reviewer confirmed no outstanding findings in the reviewed scope. See `final-review.md`.
- Final `npm run build` passed on 2 October 2026, including TypeScript checking; `git diff --check` passed.
- Browser console contained no warnings or errors. Anchor navigation, keyboard disclosures and email/telephone targets were verified.
- Individual viewport checks covered 320px and 390px phones, 768px tablet, and 1161px and 1440px desktops. A final additional DOM sweep observed actual CSS widths 355, 433, 853, 1138, 1290 and 1600px, all without horizontal overflow. These are reported as actual widths because the browser capture surface sometimes applied a zoom factor.
- Browser screenshots occasionally included offscreen content or stitching artifacts; visual judgments also used DOM geometry and clean individual captures.
- Browser print preview was not verified.
