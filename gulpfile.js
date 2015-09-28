var gulp = require('gulp');
var marked = require('gulp-marked');
var insert = require('gulp-insert');

var header = [
    '<html>',
    '<head>',
    '<meta charset="UTF-8">',
    '<link rel="stylesheet" href="vendor/bootstrap.css">',
    '<style>.container { max-width: 750px; }</style>',
    '</head>',
    '<body>',
    '<div class="container">'
].join('\n');

var footer = [
    '<div>',
    '</body>',
    '<html>'
].join('\n');

gulp.task('default', ['vendor', 'move-index'], function() {
    gulp.src('posts/*.md')
        .pipe(marked())
        .pipe(insert.prepend(header))
        .pipe(insert.append(footer))
       	.pipe(gulp.dest('./build'));
});

gulp.task('vendor', function() {
    gulp.src('node_modules/bootstrap/dist/css/bootstrap.css')
        .pipe(gulp.dest('./build/vendor'));
});


gulp.task('move-index', function() {
    gulp.src('index.html')
        .pipe(gulp.dest('./build'));
});
