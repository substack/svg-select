var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;

module.exports = Select;
inherits(Select, EventEmitter);

function Select (svg) {
    if (!(this instanceof Select)) return new Select(svg);
    var self = this;
    this.svg = svg;
    this.enabled = true;
    
    svg.addEventListener('mousedown', function (ev) {
        if (!self.enabled) return;
        var tag = String(ev.target.tagName).toLowerCase();
        if (tag === 'path') {
            if (self.selected) self.blur();
            self.selected = ev.target;
            self.emit('select', self.selected, ev);
        }
        else self.blur(ev);
    });
}

Select.prototype.enable = function () {
    this.enabled = true;
};

Select.prototype.disable = function () {
    this.enabled = false;
    this.blur();
};

Select.prototype.blur = function (ev) {
    if (!this.selected) return;
    var s = this.selected;
    this.selected = null;
    this.emit('blur', s, ev);
};
