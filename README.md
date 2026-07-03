# ACT II

## Getting started

This POC was developed in 2018. To run it with Polymer and Bower, some prerequisites are required.

To run the legacy code, execute the following commands:

```sh
nvm install 8.17.0
npx bower install
polymer serve --open
```

If `polymer serve` returns an error, install it globally:

```sh
npm install -g polymer-cli
```

The legacy version of the ACT II POC is now available in the browser.

## Challenges

The main challenge was running the original POC. Since Polymer is deprecated
and depends on Bower, it requires Node 8.17.0 to work correctly. Modern Node
versions break the dependency resolution, which is why the legacy setup requires
`nvm` to switch versions before installing dependencies.

## Migration planning

| Category        | Choice     |
| --------------- | ---------- |
| Library         | React v19  |
| Typing          | Typescript |
| Build Tool      | Vite       |
| Package Manager | pnpm       |
