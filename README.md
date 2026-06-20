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

## Migration planning

The migration planning is the next one:

| Build Tool      | Choice      |
| --------------- | ----------- |
| Library         | React v19   |
| Typing          | TS          |
| Build Tool      | Vite        |
| Package Manager | pnpm        |
| Styling         | TailwindCSS |
