var Tripper = function(id, tripperText, tripperClass, hoverId) {
	this.component = $("#" + id);
	this.hover = hoverId ? $("#" + hoverId) : this.component;
	this.defaultText = this.component.text();
	this.tripperText = tripperText;
	this.over = false;
	
	var ins = this;
	this.hover.bind("transitionend", function() {
		ins.component.css("transform", "rotateY(0deg)");
		if (ins.over) {
			ins.component.text(ins.tripperText);
			if (tripperClass) {	
				ins.component.addClass(tripperClass);
			}
		} else {
			ins.component.text(ins.defaultText);
			if (tripperClass) {	
				ins.component.removeClass(tripperClass);
			}
		}
	});
	
	this.hover.bind("mouseover", function() {
		ins.over = true;
		ins.component.css("transform", "rotateY(90deg)");
	});
	
	this.hover.bind("mouseout", function() {
		ins.over = false;
		ins.component.css("transform", "rotateY(90deg)");
	});
};