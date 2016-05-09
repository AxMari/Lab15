var gulp = require('gulp');
var browserSync = require("browser-sync").create();
var concat = require('gulp-concat-css');

gulp.task('default', function () {
  return gulp.src('styles.css')
    .pipe(concat("extra.css"))
    .pipe(gulp.dest('out/'));
});

gulp.task('browser-sync', function() {
	    browserSync.init({
	        server: {
	            baseDir: "./"
	        }

	    });
	gulp.watch(["*.html","*.css","*.js", "*.styl"])
		.on('change',browserSync.reload);
	});	

