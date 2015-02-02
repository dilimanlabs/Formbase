var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch');

gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        root: ['src/']
    });
});

gulp.task('livereload', function () {
    gulp.src(['src/q-components/**/*.html', 'src/q-designer/**/*.html', 'src/stylesheet/*.css', 'src/*.html', 'src/preview-components/*.html'])
        .pipe(watch(['src/gallery-components/**/*.html', 'src/q-components/**/*.html', 'src/q-designer/**/*.html', 'src/stylesheet/*.css', 'src/*.html', 'src/preview-components/*.html']))
        .pipe(connect.reload());
});

gulp.task('serve', ['livereload', 'webserver']);