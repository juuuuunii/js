/*
var Car = (function() {
	//Constructor (생성자)	
	function Car(name) {		
		this.name = name
	}
	return Car;
}());

var myCar = new Car("붕붕이");
console.log(myCar, myCar.name);

var otherCar = new Car("알수없음");
console.log(otherCar, otherCar.name);
///////////////////////////////////////////

var Car = (function() {
	//Constructor (생성자)
	function Car(_parent, _color, _w, _h) {		
		this.parent = _parent;
		this.color = _color;
		this.wid = _w;
		this.hei = _h;
		//this.obj = this.parent.append('<div style="width:'+this.wid+'px; height:'+this.hei+'px; background-color:'+this.color+'"></div>');
		this.obj = $('<div style="width:'+this.wid+'px; height:'+this.hei+'px; background-color:'+this.color+'"></div>').appendTo(this.parent);
		//this.obj = $로 만든 div. 자기 자신을 지칭한다.
	}
	Car.prototype.drive = function(_speed, _tar) {
		//console.log("달린다");
		//this.speed = _speed;
		//this.target = _tar;
		this.obj.click(function() {
			$(this).animate({"margin-left":_tar+"px"}, _speed);
	});
};
	return Car;
}());

//new Car(부모: jQurey/색상,넓이,높이 지정 )
var myCar = new Car($(".wrap"), "#f00", 100, 100);
var myCar2 = new Car($(".wrap"), "#00f", 200, 200);
//myCar.drive();
console.log(myCar.obj);
myCar.drive(1000, 1000);
myCar2.drive(500, 500);

*/

var Box = (function(){
	function Box(_data)/* 여기서의 객체이름은 위의 변수와 같이 한다. */ {
		this.obj = _data;
		this.create();
	};
	Box.prototype.create = function() {
		var style = ' style="position:relative;';
		if(this.obj.width) style += 'width:'+this.obj.width+'px;';
		if(this.obj.height) style += 'height:'+this.obj.height+'px;';
		if(this.obj.bgColor) style += 'background-color:'+this.obj.bgColor+';';	
		if(this.obj.borderWidth) style += 'border-width:'+this.obj.borderWidth+'px;';	
		if(this.obj.borderStyle) style += 'border-style:'+this.obj.borderStyle+';';	
		if(this.obj.borderColor) style += 'border-color:'+this.obj.borderColor+';';	
		style += '"';
		var html = '<div style="padding:20px;">';
		html += '<button class="w3-button w3-red bt_move">이동</button>'
		html += '<button class="w3-button w3-blue bt_reset">초기화</button>'
		html += '</div>';
		this.obj.bts = $(html).appendTo($(this.obj.parent));
		///
		html = '<div '+style+'">';
		if(this.obj.name) html += this.obj.name;
		html += '</div>';
		this.obj.box = $(html).appendTo($(this.obj.parent));
		;
	};
	Box.prototype.init = function(_target, _speed) {
		var tmp = this;
		$(".bt_move", $(this.obj.bts)).click(tmp, function() {
			tmp.obj.box.stop().animate({"left":_target+"px", _speed});
		});
		$(".bt_reset", $(this.obj.bts)).click(tmp, function() {
			tmp.obj.box.stop().animate({"left":"0px", _speed});
		});
		/*
		또는
		var box = this.obj.box;
		$(".bt_move", $(this.obj.bts)).click(box, function() {
			box.stop().animate({"left":_target+"px", _speed});
		});
		$(".bt_reset", $(this.obj.bts)).click(box, function() {
			box.stop().animate({"left":"0px", _speed});
		});
		*/
	};
	return Box;
}());

var bus = new Box({
	parent: ".wrap",
	name: "1500",
	bgColor: "f00",
	borderWidth: 5,
	borderStyle: "solid",
	borderColor: "#666",
	width: 200,
	height: 200
});
bus.init(1000, 2000)

var bus2 = new Box({
	parent: ".wrap",
	name: "마을버스",
	bgColor: "#00f",
	width: 100,
	height: 100
});
bus2.init(500, 5000)