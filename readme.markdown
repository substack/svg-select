# svg-select

select geometries from svg files by clicking

# example

``` js
var select = require('svg-select');
var s = select(document.querySelector('svg'));
s.on('select', function (geom) {
    geom.style.stroke = 'red';
});
s.on('blur', function (geom) {
    geom.style.stroke = 'black';
});
```

# methods

``` js
var select = require('svg-select')
```

## s = select(svg)

Create a new select instance `s` given an `svg` element.

## s.blur()

Deselect the active 

# events

## s.on('select', geom, ev)

Fires when a geometry is selected.

## s.on('blur', geom, ev)

Fires when a geometry is deselected.

# install

With [npm](https://npmjs.org) do:

```
npm install svg-select
```

# license

MIT
