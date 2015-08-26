var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    mocha = require('gulp-mocha');

var tsProject = ts.createProject({
    declarationFiles: true,
    noExternalResolve: true,
    module:'commonjs'
});

gulp.task('scripts', function() {
    var tsResult = gulp.src('src/*.ts')
        .pipe(ts(tsProject));

    tsResult.dts.pipe(gulp.dest('definitions'));

    return tsResult.js.pipe(gulp.dest('.'));
});



gulp.task('default', ['scripts'], function () {
    return gulp.src('test/*_test.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({}));
});

gulp.task('watch', ['default'], function() {
    gulp.watch('src/*.ts', ['default']);
});
