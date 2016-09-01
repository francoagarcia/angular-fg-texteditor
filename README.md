# angular-fg-texteditor
AngularJS directive for simditor
==============

## Install

This projects depends on:
	1. of course, AngularJs
	2. jquery
	3. fontawesome

So: 

```
bower install jquery --save
bower install fontawesome --save
bower install angular-fg-texteditor --save
```

## Usage

### Add scripts and styles

```html
<link rel="stylesheet" type="text/css" href="bower_components/angular-fg-texteditor/dist/angular-fg-texteditor.min.css" />
<link rel="stylesheet" type="text/css" href="bower_components/fontawesome/css/font-awesome.min.css">

<script src="bower_components/angular-fg-texteditor/dist/angular-fg-texteditor.min.js"></script>
```

### Add modules

```js
angular.module('app', ['fg.texteditor']);
```

### And 1 line is enough:

```html
<texteditor ng-model='mymodel'></texteditor>
```
.
==============
License MIT.