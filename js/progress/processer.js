var Processer = function(title, bar) {
	this.title = title;
	this.bar = bar;
};

Processer.prototype = {
	run: function(num, count) {
		var controlTitle = $('#' + this.title).text('本月进度（共' + count + '单）');
		var controlBar = $('#' + this.bar).NumberProgressBar({
		  duration: 12000,
		  current: num
		});
	}
};