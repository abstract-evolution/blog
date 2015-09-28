# Building a simple static blog generator!

This blog post will show how to build itself.

The goal is to build a static site generator where posts are written in Markdown, and output as html.

## Technology choices

There are certainly some static site-generator tools out there. A couple examples are Jeckyll and Assemble.io. I'm sure these are great tools, but in the little time I've put into using them, I haven't been able to get something like this up and running.

To turn the markdown blog posts into html we need a 'build'. We're going to use Gulp. Gulp is a NodeJS tool, so to follow along, you'll need that installed.

## Getting set up

### Create a new Node project

Lets create a new directory: `my-blog/` and create a `package.json` file inside it:

```json
{
  "name": "my-blog",
  "author": "Zach Lysobey"
}
```

*note: we could've done this with `npm init`, but I wanted to be as bare bones as possible, and that generates a `package.json` with many fields we don't really care about right now*

Lets create a directory (`posts/`) to put our markdown files in and save this file there as `static-blog-generator.md`.

### Get going with Gulp

We need to install gulp.

#### Install Gulp globally

```shell
npm install -g gulp
```

#### Install Gulp locally

```shell
npm install --save-dev gulp
```

#### Create a gulpfile

Create a new file `gulpfile.js` in the root of the project with the following contents:

```javscript
var gulp = require('gulp');

gulp.task('default', function() {
    console.log('Hello Gulp!')
});
```

#### Does it work?

Type `gulp` into the terminal. You should see something like:

```
[13:37:00] Using gulpfile ~/my-blog/gulpfile.js
[13:37:00] Starting 'default'...
Hello Gulp!
[13:37:00] Finished 'default' after 96 μs
```

#### Turn our mardown into html

We need something to convert our markdown posts into html that can be deployed. A quick search turned up [gulp-marked](https://www.npmjs.com/package/gulp-marked) on NPM.

##### Install it:

```shell
npm install --save-dev gulp-marked
```

##### Use it in our gulpfile

`require` it at the top of the `gulpfile.js`

```javascript
var gulp = require('gulp');
var marked = require('gulp-marked');
```

Modify our `default` gulp task:

```javascript
gulp.task('default', function() {
    gulp.src('posts/*.md')
        .pipe(marked())
        .pipe(gulp.dest('./build/'));
});
```

This will take all `.md` files in `posts/`, *stream* them through the `marked` library (converting them to html), and save those output files to a new `build/` directory.

##### Does it work?

Run `gulp`. If it works you should see a file named `static-blog-generator.html` in `build/`.
