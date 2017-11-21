var gulp = require("gulp");
var sass = require("gulp-sass");
var minify = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['sass', 'uglify']);

// compile all sass
gulp.task('sass', function () {
    return gulp.src('./dev/sass/main.scss')
        .pipe(sass({
            includePaths: ['./assets/css/'],
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minify())
        .pipe(gulp.dest('./assets/css/'));
});
// uglify JS files
gulp.task('uglify', function () {
    gulp.src('./dev/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js/'));
});
