# Lee Joo Han — CV

A responsive editorial CV built with React, TypeScript, Vite, Tailwind CSS v4 and shadcn/ui. CV content lives in `src/data/resume.ts`; the visual layout and responsive rules are in `src/App.tsx` and `src/index.css`.

## Local development

```sh
nvm use
npm ci
npm run dev
```

Use Node.js 22 (recorded in `.nvmrc` and used by CI). If you do not use nvm, install Node.js 22 directly and skip `nvm use`.

Open http://127.0.0.1:5173/resume/. The Vite base is `/resume/` for the existing GitHub Pages repository path.

```sh
npm run typecheck
npm run build
npm run preview
```

The production output is `dist/`. No deployment or publishing runs as part of these commands.

## GitHub Pages deployment

The `.github/workflows/pages.yml` workflow installs the locked dependencies, checks TypeScript and builds the production site. Branch pushes and pull requests targeting `master` run the build. Successful pushes/merges to `master` also upload **only `dist/`** and deploy to https://leejoohan.github.io/resume/. A manual run on `master` can redeploy the site.

### One-time repository setup

Open [Settings → Pages](https://github.com/leejoohan/resume/settings/pages). Under **Build and deployment → Source**, select **GitHub Actions**. If the `github-pages` environment has branch restrictions, allow `master`. This setting must be configured on GitHub; committing the workflow alone does not change it.

### Publish this redesign

Commit the source code, `package.json`, `package-lock.json`, `.nvmrc`, Vite/TypeScript configuration, `.github/workflows/pages.yml`, and the profile image. `dist/`, `node_modules/`, working files and local screenshots are ignored.

```sh
npm ci
npm run build
git add .
git diff --cached --stat
git commit -m "Build responsive React CV with GitHub Pages deployment"
git push -u origin feat/editorial-react-cv
```

Open a pull request from `feat/editorial-react-cv` to `master`. After the build passes, merge it to publish. Future pushes to `master` repeat the build and deployment automatically. A local commit alone, or a push to the feature branch, does not update the live site.

Watch **Build and deploy CV** in [Actions](https://github.com/leejoohan/resume/actions). The deployment job reports the live URL. If Pages configuration fails, check the Source setting above. If assets return 404, retain `base: '/resume/'` in `vite.config.ts` and ensure the workflow uploads `dist/`.

This follows the [Vite GitHub Pages guide](https://vite.dev/guide/static-deploy.html#github-pages) and [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## UI and content

- Nine roles are shown in a compact timeline. Select any role to read all achievements and technologies.
- The full toolkit expands below the four featured technology brands.
- Native anchors, keyboard-operable disclosures, visible focus styles, reduced-motion support, and email/telephone links are included.
- Print styles are provided for the CV, role details and full toolkit. Browser print-preview behavior still needs visual verification.
- Geist is served locally through `@fontsource-variable/geist`.
- Button and Badge are official shadcn/ui registry components, with local import aliases and the Radix Slot dependency. `components.json` enables continued use of the shadcn CLI.
- Technology logos come from Simple Icons; general interface icons are Lucide.
- Existing legacy assets remain in `assets/`.

## Design reference

The implementation follows the approved white editorial timeline design. Visual verification and responsive refinement notes are recorded in `docs/verification/visual-iterations.md`.
