﻿var Tripper = function(id, tripperText, tripperClass, hoverId) {
	this.component = $("#" + id);
	this.hover = hoverId ? $("#" + hoverId) : this.component;
	this.defaultText = this.component.text();
	this.tripperText = tripperText;
	this.tripperClass = tripperClass;
	this.over = false;
	var ins = this;
	
	this.hover.bind("transitionend", function() { ins.transitionEnd(ins) });
	this.hover.bind("webkitTransitionEnd", function() { ins.transitionEnd(ins) });
	this.hover.bind("mozTransitionEnd", function() { ins.transitionEnd(ins) });
	this.hover.bind("oTransitionEnd", function() { ins.transitionEnd(ins) });
	
	this.hover.bind("mouseover", function() {
		ins.over = true;
		ins.transform(ins.component, 90);
	});
	
	this.hover.bind("mouseout", function() {
		ins.over = false;
		ins.transform(ins.component, 90);
	});
};

Tripper.prototype = {
	transform: function(component, deg) {
		var browser = client.browser;
		if (browser.name == "safari") {
			component.css("-webkit-transform", "rotateY(" + deg + "deg)");
		} else {
			component.css("transform", "rotateY(" + deg + "deg)");
		}
	},
	
	transitionEnd: function(ins) {
		ins.transform(ins.component, 0);
		if (ins.over) {
			ins.component.text(ins.tripperText);
			if (ins.tripperClass) {	
				ins.component.addClass(ins.tripperClass);
			}
		} else {
			ins.component.text(ins.defaultText);
			if (ins.tripperClass) {	
				ins.component.removeClass(ins.tripperClass);
			}
		}
	}
}