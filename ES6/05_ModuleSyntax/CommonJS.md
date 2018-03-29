## An Introduction to CommonJS

The CommonJS specification includes a [module loading syntax](http://wiki.commonjs.org/wiki/Modules/1.1) to cleanly specify JavaScript dependencies. While first widely used in Node it was used heavily also in the browser as well (in ES5). Historically, when specifying dependencies for the browser, we have had to manually manage a list of our files and keep them in the right order. For the modules to communicate, everything had to be in global scope.

eg.

```html
<script src="jquery.js" type="text/javascript"></script>
<script src="d3.js" type="text/javascript"></script>
<script src="charts.js" type="text/javascript"></script>
<script src="myfiles/file1.js" type="text/javascript"></script>
<script src="myfiles/file2.js" type="text/javascript"></script>
<script src="myfiles/file3.js" type="text/javascript"></script>
<script src="myfiles/file4.js" type="text/javascript"></script>
<script src="myfiles/file5.js" type="text/javascript"></script>
<script src="myfiles/file6.js" type="text/javascript"></script>
```
