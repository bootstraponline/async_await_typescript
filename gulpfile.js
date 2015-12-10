"use strict";

var gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps');

// ts/*.ts -> es6 (virtual) -> lib/*.js

var typescriptProject = typescript.createProject("./tsconfig.json", {
    // use typescript 1.6.0-beta instead of bundled typescript 1.5.
    typescript: require('typescript')
});

// Compile all ts files with typescript then
// output the code and sourcemaps to lib/
gulp.task('default', function () {
    // For Visual Studio Code source map support lib must contain
    // both the typescript and the transpiled javascript because
    // the sourcemaps plugin requires all files at a single source root.
    return gulp.src('ts/**/*.ts')
        .pipe(gulp.dest('lib'))
        .pipe(sourcemaps.init())
        .pipe(typescript(typescriptProject))
        .pipe(gulp.dest('es6')) // output TS only for debugging
        .pipe(sourcemaps.write('.', { sourceRoot: '.' }))
        .pipe(gulp.dest('lib'));
});

// Automatically run default task when .ts files change.
gulp.task('watch', ['default'], function () {
    gulp.watch('ts/**/*.ts', ['default']);
});
