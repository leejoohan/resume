# Editorial CV implementation plan

> Execution: subagent-driven development, explicitly requested by the user. The approved design is the latest editorial timeline mock at `work/reference/editorial-timeline.png`.

## Goal and design

Replace the existing Bootstrap CV with a fully responsive React, TypeScript, Tailwind CSS and shadcn/ui page. Match the reference's white-only surfaces, oversized bold black name, two-column introduction, nine-entry connected timeline and right-side impact, capabilities and branded technical skills. Preserve useful original information through compact summaries and accessible expandable role details, plus education and contact sections below. Keep the first-screen composition faithful. Build locally on `feat/editorial-react-cv`; publishing is outside this request.

## Architecture

Vite single-page React app, Tailwind Vite plugin, local shadcn Button/Badge/Accordion primitives as needed, Lucide general icons and recognizable monochrome technology brand icons. Typed CV data separate from rendering. Local font assets where practical. GitHub Pages-compatible base `/resume/`. Native section anchors and actual email/telephone links, no inert buttons or invented downloads. Preserve existing assets until migration is verified.

## Global constraints

- White backgrounds only, near-black heavy headings and gray body copy; no gradients, decorative images or fabricated claims.
- All nine roles with original dates, company names, role details and relevant stacks; both education records and existing public contact information.
- RM1.2M is the user's confirmed currency, without claiming monthly or annual revenue.
- Each key technical skill has a leading technology icon and visible label.
- Responsive from 320px to wide desktop, accessible focus and keyboard controls, reduced-motion support, readable print layout.
- Complete at least five actual visual refinement cycles, recording changes and screenshots in `docs/verification/visual-iterations.md`.

## Interfaces and ownership

Content worker owns `src/data/resume.ts`. Exports `profile`, `experiences`, `impacts`, `education`, `skillGroups` and TypeScript types. Experience fields: `id`, `period`, `start`, `end`, `role`, `company`, `summary`, `highlights: string[]`, `technologies: string[]`. Profile fields: `name`, `headline`, `tagline`, `summary`, `currentRole`, `currentCompany`, `currentPeriod`, `email`, `phone`, `phoneHref`. Impact fields `value`, `label`, `context`; education fields `degree`, `institution`, `period`; skillGroup fields `label`, `skills: string[]`.

UI worker owns app, components, styles and build configuration, consumes the data interface. Coordinator owns verification artifacts/docs and integrates reviewer findings through the UI worker. Review worker audits source, accessibility, completeness and screenshot fidelity.

## Tasks

- [x] 1. Extract and rewrite original CV data, keeping claims traceable. Check all nine jobs, education and contact records against `work/reference/original-cv.html`.
- [x] 2. Build React/Tailwind/shadcn UI, actual navigation, expandable detail, education/contact and brand icons. Install dependencies and verify production build/typecheck.
- [x] 3. Visual iteration 1: compare initial desktop render at reference width; refine masthead scale, intro ratios and page gutters.
- [x] 4. Visual iteration 2: refine desktop timeline/rail widths, row spacing, typography and icons from screenshot review.
- [x] 5. Visual iteration 3: refine tablet reflow and spacing at 768/1024px without clipping or crowded content.
- [x] 6. Visual iteration 4: refine narrow-mobile layout at 320/390px, navigation, timeline and tap targets.
- [x] 7. Visual iteration 5: final cross-size consistency, expanded content, keyboard/focus, contact and reduced-motion review; fix findings and capture final screenshots.
- [x] 8. Independent whole-change review, final production build and focused checks. Leave a working preview and report branch, verification and any limits.

## Review focus

1. Long date/company strings at 320px must wrap without horizontal overflow.
2. Anchor navigation and expanded role details must remain operable by keyboard.
3. Every role and education record must be present, with no invented metrics or availability claims.
4. Fonts and all assets must load under the `/resume/` deployment path.
5. Print must expose substantive role details and retain contact/education without clipped columns.

## Verification boundary

All five visual refinement passes and the independent review are complete. Print styles were inspected, but actual browser print-preview pagination and disclosure expansion remain unverified; README records this limit.
