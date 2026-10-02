# CV content audit

Source checked: `work/reference/original-cv.html`, with the professional rewrite in `work/reference/rewritten-cv.txt`. The original was reviewed on 2 October 2026. The revenue currency (RM) was separately confirmed by the user.

| Content | Result |
| --- | --- |
| Identity and contact | Name, public email and telephone preserved. Telephone link uses Malaysia's `+60` country code with the leading domestic `0` removed. |
| Experience | All nine roles, employers and original date ranges are present, newest first. Year-only roles retain year-only dates; no months were inferred. |
| Education | Both diploma (2010–2012) and engineering degree (2013–2015) are present, including the University of Bradford collaboration. Institution wording is expanded from the original abbreviation and should be checked against official records before publication. |
| Outcomes | Source claims of RM1.2 million within six months, 30% process efficiency, 20% client acquisition and renewals, 99.9% uptime, and 2,000+ agencies across five portals remain attributed to their roles. The source does not define whether RM1.2 million is monthly or cumulative, so neither basis is asserted. |
| Technical skills | Each role retains its relevant named stack. Additional technologies from the original hero and Tech Stack logo inventory (source lines 174–198) are included without claims of depth or proficiency. The final audit recovered Git, PostgreSQL, Ionic, Gulp, SCSS, Prisma, Raspberry Pi, Arduino, Microchip and Analog Devices; embedded platforms and vendors are explicitly labelled as listed. |
| Editorial exclusions | Subjective competency percentages, an unsupported superlative about portal size, and the reason-for-leaving allegation are omitted. No independent verification of the source metrics is claimed. |

`src/data/resume.ts` exports the typed `profile`, `experiences`, `impacts`, `education` and `skillGroups` collections specified in the implementation plan.
