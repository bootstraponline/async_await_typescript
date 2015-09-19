# async/await with TypeScript

This example demonstrates the use of [async/await](https://github.com/lukehoban/ecmascript-asyncawait)
using [TypeScript v1.6](http://blogs.msdn.com/b/typescript/archive/2015/09/02/announcing-typescript-1-6-beta-react-jsx-better-error-checking-and-more.aspx),
[Babel](http://babeljs.io/), [Node.js v4](https://nodejs.org/en/blog/release/v4.0.0/)
and [Visual Studio Code v0.8.0](https://code.visualstudio.com/);

```
$ node lib/await.js
1
2
3
Error: throw error to showcase source map support.
    at /source/await.ts:21:9
    at [object Generator].next (native)
    at step (/source/await.js:8:41)
    at onfulfill (/source/await.js:5:43)
 ```

#### Install dependencies
- Download [Visual Studio Code 0.8.0](https://code.visualstudio.com/Updates/) or later
- `node -v` Ensure [node is v4.1.0](https://nodejs.org/en/) or later
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

- [node v4.1.0](https://nodejs.org/en/blog/release/v4.1.0/) is still missing [many ES6 features](https://nodejs.org/en/docs/es6/)

`node --v8-options | grep "in progress"`

Node lacks support [for ES6 modules](https://github.com/nodejs/node/issues/2760#issuecomment-138858677) because [v8 hasn't implemented them](https://code.google.com/p/v8/issues/detail?id=1569)
As a result [babel is required](http://babeljs.io/) to run on node.js. The version of v8 used by node can be found by running `node -p process.versions.v8`

- **typescript** Transpiles ES 7 to ES 6
- **babel** Transforms unsupported ES 6 into ES 5
- **node.js** Runs ES 6/5 hybrid

TypeScript lacks [granular targeting](https://github.com/Microsoft/TypeScript/issues/4692) meaning the JavaScript target is
all or nothing. Compiling to ES6 will use all ES6 features even if some (ex: modules) are not supported by node. Unfortunately
there's currently no browser or version of v8 that fully implements ES6. The ES6 code emitted by typescript can't be run anywhere.
To solve this problem, babel is used to transpile the subset of ES6 unsupported by node to ES5 which is supported.

#### Credits

- Thanks to [@ivogabe](https://github.com/ivogabe) for blogging about [using typescript with babel](http://dev.ivogabe.com/combine-typescript-with-babel/)
- Thanks to [@Deathspike](https://github.com/Deathspike) for posting an [async example](https://github.com/Microsoft/TypeScript/issues/1664#issuecomment-129745146)

--

#### ES6 Support Summary (as of Sep 2015)

[Default node v4 features](https://nodejs.org/en/docs/es6/)

- Block scoping
  - let
  - const
  - function-in-blocks
- Classes (strict mode only)
- Collections
  - Map
  - WeakMap
  - Set
  - WeakSet
- Typed arrays
- Generators
- Binary and Octal literals
- Object literal extensions (shorthand properties and methods)
- Promises
- New String methods
- Symbols
- Template strings
- Arrow Functions

#### [babel ES6](http://babeljs.io/docs/advanced/transformers/)

In node v4.1.0

- es6.arrowFunctions
- es6.blockScoping
- es6.classes
- es6.constants

Not yet in node:

- es6.destructuring
- es6.forOf
- es6.modules
- es6.parameters
- es6.properties.computed
- es6.properties.shorthand
- es6.spread
- es6.tailCall
- es6.templateLiterals
- es6.regex.unicode
- es6.regex.sticky

#### [TypeScript ES6 support](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript)

- classes
- generators
- async/await (requires flag and TS 1.6+, only for ES6 output mode)
- ES6 modules
- destructuring
- let/const
- for..of support
- decorators (ES7)
- computed properties
- template strings
