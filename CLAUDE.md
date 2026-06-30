# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A 2018-era proof of concept for an ACT II popcorn marketing microsite, built with **Polymer 1.9.0** (web components via HTML Imports + `Polymer({...})` factory syntax, not Polymer 2/3 class syntax). There is no JS bundler, transpiler, or package.json-driven build — dependencies are vendored into `bower_components/` via Bower, and the browser loads raw HTML/JS files directly.

The repo is mid-migration: the `refactor` branch planned full rewrite to React 19 + Vite + pnpm + plain CSS3. Until that migration happens, treat this as legacy Polymer 1 code and avoid introducing modern JS syntax/tooling assumptions (no ES modules, no async/await in element scripts, no class-based components).
