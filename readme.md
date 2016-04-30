# async/await with TypeScript

This example demonstrates the use of [async/await](https://github.com/lukehoban/ecmascript-asyncawait)
using TypeScript v1.9-dev,
Node.js v6
and [Visual Studio Code v1.0](https://code.visualstudio.com/);

```
$ node lib/await.js
1
2
3
Error: throw error to showcase source map support.
    at /async_await_typescript/lib/await.ts:21:9
    at undefined.next (native)
    at fulfilled (/async_await_typescript/lib/await.js:4:58)
 ```

#### Install dependencies
- Download [Visual Studio Code 1.0](https://code.visualstudio.com/Updates/) or later
- `node -v` Ensure [node is v6](https://nodejs.org/en/) or later
- `npm install .` Install deps defined in package.json

#### Visual Studio Code Integration

- `File ▸ Auto Save` Enable auto save.
- Gulp tasks are [auto detected](https://code.visualstudio.com/Docs/editor/tasks)
  and made available in the task list. 
  On a Mac `Shift + Command + P ▸ Run Task ▸ Press Enter` then select Watch.
- Watch automatically compiles TypeScript according to the gulpfile rules.
  
#### Directory Overview

```
.
├── .vscode
│   └── settings.json
├── es6
│   └── await.js
├── lib
│   ├── await.js
│   └── await.js.map
├── node_modules
│   ├── babel
│   ├── gulp
│   ├── gulp-babel
│   ├── gulp-sourcemaps
│   ├── gulp-typescript
│   ├── gulp-watch
│   ├── source-map-support
│   └── typescript
├── ts
│   └── await.ts
├── .gitignore
├── gulpfile.js
├── jsconfig.json
├── notes.md
├── package.json
├── readme.md
└── tsconfig.json
```

- `.vscode/settings.json` - [Settings for Visual Studio Code.](https://code.visualstudio.com/Docs/editor/customization)
`Code ▸ Preferences ▸ Workspace Settings` to change.
- `es6/await.js` - Output from TypeScript `await.ts` No browser or node version fully supports ES6 so this code
 can't be run anywhere without further processing from babel. The `es6` code is useful for manually comparing the
 babel output and typescript output to understand which parts of ES6 get down leveled to ES5.
- `lib/await.js` - Output from babel which is generated from the `es6/` files. `lib` is a mix between ES6 and ES5.
 This code runs on node v4.1.0 or better. Source maps allows tracing failures back to line numbers in
 the origional typescript files.
- `node_modules` - The dependencies defined in `package.json`
- `ts/await.ts` - TypeScript source files which are automatically transpiled on save by typescript.
- `.gitignore` - Standard [git ignore file](http://git-scm.com/docs/gitignore).
- `gulpfile.js` - [Gulp build system](https://github.com/gulpjs/gulp) used to setup source maps, babel, and typescript.
- `jsconfig.json` - [Visual Studio Code config file](http://blogs.msdn.com/b/vscode/archive/2015/07/06/vs-code-es6.aspx)
that defines the [version of JavaScript used by the editor.](https://code.visualstudio.com/Docs/languages/javascript)
- `package.json` - Standard [npm package config](https://docs.npmjs.com/files/package.json) that defines dependencies
and other metadata useful when [publishing to npm.](https://www.npmjs.com/)
- `readme.md` - The document you're currently reading.
- `tsconfig.json` - The [typescript compiler options.](https://github.com/Microsoft/TypeScript/wiki/tsconfig.json)

#### Workflow

- Node is still missing [many ES6 features](https://nodejs.org/en/docs/es6/).

`node --v8-options | grep "in progress"`

Node lacks support [for ES6 modules](https://github.com/nodejs/node/issues/2760#issuecomment-138858677) because [v8 hasn't implemented them](https://code.google.com/p/v8/issues/detail?id=1569)
As a result module type `commonjs` is used in tsconfig.json.

- **typescript** Transpiles ES 7 to ES 6
- **node.js** Runs ES 6/5 hybrid

TypeScript offers granular targeting via the [lib compiler option](https://github.com/Microsoft/TypeScript/blob/f0e2d817cad9f311fc692437d3bb5dadfa6c1e5d/src/compiler/commandLineParser.ts#L367) specified in tsconfig..

#### Credits

- Thanks to [@ivogabe](https://github.com/ivogabe) for blogging about [using typescript with babel](http://dev.ivogabe.com/combine-typescript-with-babel/)
- Thanks to [@Deathspike](https://github.com/Deathspike) for posting an [async example](https://github.com/Microsoft/TypeScript/issues/1664#issuecomment-129745146)
