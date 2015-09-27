"use strict";

var gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel');
    
// typescript -> babel
// ts/*.ts -> es6 (virtual) -> lib/*.js

var typescriptProject = typescript.createProject("./tsconfig.json", {
    // use typescript 1.6.0-beta instead of bundled typescript 1.5.
    typescript: require('typescript')
});

// https://babeljs.io/docs/usage/options/
// http://babeljs.io/docs/advanced/transformers/
var babelOptions = {
    whitelist: [
    // commented out transformers are supported in node v4
    // todo: review remaining typescript features that need transforming
    // https://nodejs.org/en/docs/es6/
    // 'es6.arrowFunctions', 
    // 'es6.blockScoping',
    // 'es6.classes',
    // 'es6.constants',
        'es6.destructuring',
        'es6.forOf',
        'es6.modules',
        'es6.parameters',
        'es6.properties.computed',
        'es6.properties.shorthand',
        'es6.spread',
        'es6.tailCall',
    // 'es6.templateLiterals', // aka Template strings
        'es6.regex.unicode',
        'es6.regex.sticky'
    ]
};

// Compile all ts files with typescript then babel and
// output the code and sourcemaps to lib/
gulp.task('default', function () {
    // For Visual Studio Code source map support lib must contain
    // both the typescript and the transpiled javascript because
    // the sourcemaps plugin requires all files at a single source root.
    return gulp.src('ts/**/*.ts')
        .pipe(gulp.dest('lib'))
        .pipe(sourcemaps.init())
        .pipe(typescript(typescriptProject))
        .pipe(gulp.dest('es6')) // output TS only (before babel) for debugging
        .pipe(babel(babelOptions))
        .pipe(sourcemaps.write('.', { sourceRoot: '.' }))
        .pipe(gulp.dest('lib'));
});

// Automatically run default task when .ts files change.
gulp.task('watch', ['default'], function () {
    gulp.watch('ts/**/*.ts', ['default']);
});
