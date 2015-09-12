# Random notes about ES6 and TypeScript

- Must run `tsc` to see `tsconfig.json` errors because gulp will not bubble them up.
- ES6 uses import instead of require.
- Target node v4.0.0 or better which supports generators natively.
- Generate the tree map on the readme with `tree -L 2 -a -I ".DS*|.git|.bin" --dirsfirst .`

--

``javascript
/**
	 * If you call resolve in the body of the callback passed to the constructor,
	 * your promise is fulfilled with result object passed to resolve.
	 * If you call reject your promise is rejected with the object passed to resolve.
	 * For consistency and debugging (eg stack traces), obj should be an instanceof Error.
	 * Any errors thrown in the constructor callback will be implicitly passed to reject().
	 */
  // https://github.com/borisyankov/DefinitelyTyped/blob/master/es6-promise/es6-promise.d.ts
```

```javascript
function puts(...optionalParams: any[]): void {
  console.log.apply(this, arguments);
  // blocked on https://github.com/Microsoft/TypeScript/issues/4755
  // console.log(...arguments);
}
```