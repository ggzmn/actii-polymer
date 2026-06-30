# ACT II

## First movements

This POC was developed in 2018, so in order to run it with Polymer and Bower there are some characteristics to keep in mind.

If you want to run the legacy code, please follow these commands:

```sh
nvm install 8.17.0
npx bower install
polymer serve --open
```

If you have trouble with `polymer serve`, you can install it globally:

```sh
npm install -g polymer-cli
```

That's it, you can now watch the first version of the ACT II POC.

## Challenges

The biggest challenge was running the original POC. Since Polymer is deprecated
and relies on Bower, it requires Node 8.17.0 to work correctly. Modern Node
versions break the dependency resolution, which is why the legacy setup requires
`nvm` to switch versions before installing dependencies.

## Migration planning

The migration planning is the next one:

| Category        | Choice      |
| --------------- | ----------- |
| Library         | React v19   |
| Typing          | Typescript  |
| Build Tool      | Vite        |
| Package Manager | pnpm        |
| Styling         | TailwindCSS |

## Migration notes

The original POC used Polymer's two-way data binding and native web components.
The migration to React meant shifting to a unidirectional data flow model, which
required rethinking how components communicate and manage state.

Given the simplicity of the original POC, no complex logic was preserved —
components were rewritten from scratch following React conventions.


## Next steps

- [ ] Accessibility audit and improvements (WCAG 2.1 AA)
