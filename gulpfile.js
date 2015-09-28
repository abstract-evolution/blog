var gulp = require('gulp');
var marked = require('gulp-marked');

gulp.task('default', function() {
    gulp.src('posts/*.md')
        .pipe(marked())
       	.pipe(gulp.dest('./build/'));
});
