var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    vulcanize = require('gulp-vulcanize');

gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        root: ['src/'],
        port: 9090
    });
});

gulp.task('livereload', function () {
    gulp.src(['src/q-components/**/*.html', 'src/q-designer/**/*.html', 'src/stylesheet/*.css', 'src/*.html', 'src/preview-components/*.html'])
        .pipe(watch(['src/gallery-components/**/*.html', 'src/q-components/**/*.html', 'src/q-designer/**/*.html', 'src/stylesheet/*.css', 'src/*.html', 'src/preview-components/*.html', 'src/formbase/*.html']))
        .pipe(connect.reload());
});

gulp.task('vulcanize', function () {
    var DEST_DIR = 'src/formbase';
    return gulp.src('src/formbase-app.html')
        .pipe(watch(['src/gallery-components/**/*.html', 'src/q-components/**/*.html', 'src/q-designer/**/*.html', 'src/stylesheet/*.css', 'src/*.html', 'src/preview-components/*.html']))
        .pipe(vulcanize({
            dest: DEST_DIR,
            strip: true
        }))
        .pipe(gulp.dest(DEST_DIR));
});

gulp.task('serve', ['livereload', 'webserver', 'vulcanize']);