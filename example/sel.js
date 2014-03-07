var select = require('../');
var s = select(document.querySelector('svg'));
s.on('select', function (geom) {
    geom.style.stroke = 'red';
});
s.on('blur', function (geom) {
    geom.style.stroke = 'black';
});
