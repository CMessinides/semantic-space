# Spacesuit
[![npm version](https://badge.fury.io/js/spacesuit-scss.svg)](https://badge.fury.io/js/spacesuit-scss)
---
Spacesuit is a library of Sass mixins that aims to make your padding and margin
more **meaningful**, **flexible**, and **consistent**.

## Quickstart
Install the Spacesuit package as a Node dependency:

```
$ npm install --save spacesuit-scss
```

You can then copy the package's Sass files (found in the
`node_modules/spacesuit-scss/scss` directory) into your own Sass directory.
Alternatively, you can include the package in the `includePaths` option of your
Sass build process. Here's an example with Gulp:

``` javascript
// gulpfile.js
const gulp = require("gulp"),
    sass = require("gulp-sass");

gulp.task("sass", function() {
  return gulp.src("src/scss/**/*.scss")
    .pipe(sass({
      includePaths: ["node_modules/spacesuit-scss/scss"]
    }))
    .pipe(gulp.dest("dist/css");
})
```

Then import the library with the rest of your Sass stylesheets:

```scss
// main.scss
@import "_base";
@import "_spacesuit";
```

**Tip:** If you want to override Spacesuit's default variables, redefine them
before you import Spacesuit:

```scss
// main.scss
@import "_base";
@import "_my-spacesuit-variables";
@import "_spacesuit";
```

## What is Spacesuit?
Spacesuit is a library that offers a set of Sass mixins to add padding and
margin to your elements with consistency and modularity in mind.

The library is inspired in large part by "[Space in Design Systems](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62)"
by Nathan Curtis. Nathan categorizes space into types like inset, stack, and
inline, and he limits his spatial options to a few variables, which keeps space
reusable and consistent across a design system.

Spacesuit is an execution of these ideas with a few modifications that I believe
make the system more flexible and widely usable.

## Why use Spacesuit?
Treating space like a modular component helps you keep your layout consistent.
That means less debugging, more meaningful white space, and a better user
experience.

Spacesuit also helps you tackle spacing across a variety of devices and screen
sizes. Comfortable padding on a desktop is often awkwardly large on a phone.
Spacesuit uses **scales** to allow you to easily organize your spatial options
at every size:

```scss
$default-space-scale: (
  sm: 2rem,
  lg: 6rem
);

$wide-space-scale: (
  sm: 4rem,
  lg: 10.5rem
);

.my-element {
  @include space-inset(sm);

  @include spsuit-media(1024px) {
    @include space-inset(sm, $wide-space-scale);
  }
}
```

## Installing for development
1. Clone this repository to your local machine.
2. Add to or edit the Sass files in the `scss` directory.
3. Run `gulp` to rebuild the package. To update only the stylesheets, run `gulp
sass`. To update only the docs, run `gulp docs`.

## Contributing
Bugs can be reported to the repository's issues page. To submit fixes or features,
open a pull request on Github.

## License
See the [LICENSE](https://github.com/CMessinides/spacesuit/blob/master/LICENSE).
