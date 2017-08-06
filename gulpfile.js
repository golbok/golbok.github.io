var gulp = require("gulp");
var sass = require("gulp-sass");
var minify = require("gulp-clean-css");
var concat = require("gulp-concat");

// compile all sass
gulp.task('sass', function(){
	return gulp.src('_sass/main.scss')
				.pipe(sass({
					includePaths: ['./assets/css'],
					outputStyle: 'expanded'
				}))

				.pipe(gulp.dest('./assets/css'))
				.pipe(minify())
				.pipe(gulp.dest('./assets/css'));
});
