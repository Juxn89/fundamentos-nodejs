const gulp = require('gulp')
const server = require('gulp-server-livereload')

gulp.task('build', (callback) => {
    console.log('Building site');

    setTimeout(callback, 1200);
    callback();
})

gulp.task('serve', (callback) => {
    gulp.src('./herramientas/automatizacion/www')
        .pipe(server({
            livereload: true,
            open: true
        }));
})

gulp.task('default', gulp.series('build', 'serve'))