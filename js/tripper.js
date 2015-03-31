var Tripper = function(id, tripperText, tripperClass, hoverId) {
	this.component = $("#" + id);
	this.hover = hoverId ? $("#" + hoverId) : this.component;
	this.defaultText = this.component.text();
	this.tripperText = tripperText;
	this.tripperClass = tripperClass;
	this.over = false;
	this.browser = client.browser;
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
		if (this.browser.name == "safari") {
			component.css("-webkit-transform", "rotateY(" + deg + "deg)");
		} else if (this.browser.name == "firefox") {
			this.transitionEnd(this);
		} else {
			component.css("transform", "rotateY(" + deg + "deg)");
		}
	},
	
	transitionEnd: function(ins) {
		if (ins.browser.name != "firefox") {
			ins.transform(ins.component, 0);
		}
		if (ins.over) {
			ins.component.html(ins.tripperText);
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