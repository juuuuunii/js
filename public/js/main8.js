///////////////////////배열
var arr = [];
var arr1 = new Array;
arr[0] = "A";
arr1[1] = "B";

var arr1 = new Array;
arr1[0] = [];
arr1[0][0] = "A";
arr1[0][1] = "B";
//문자 가능
var arr2 = ["A", "B", "C"];  
arr2[3] = "D";
arr2.push("E");    //push :가장 마지막에 넣어줌
console.log(arr2);
//객체 가능  
var arr3 = [{
  title: "Sumsung tv",
  color: "White"
}, {
  title: "Sony tv",
  color: "Black"
}, {
  title: "LG tv",
  color: "Red"
}]       
console.log(arr3[1].title);
//배열 가능
var arr3 = {
  cate: [{
    title: "Sumsung tv",
    color: "White"
  }, {
    title: "Sony tv",
    color: "Black"
  }, {
    title: "LG tv",
    color: "Red"
  }],
  length: 3
};
console.log(arr3.cate[1].title);

var arr4 = {
  electronic: [{
    name: "TV",
    brand: "Samsung",
    color: "Black",
    position: "living room",
    year: 2015
  }, {
    name: "SmartPhone",
    brand: "Apple",
    color: "White",
    position: "Hand",
    year: 2018
  }],
  furniture: [],
  etc: []
}
console.log(arr4.electronic[0].position);

var members = [];
for(var i=0; i<10; i++){
  members[i] = [];
}
members[0][0] = "홍길동";
members[0][1] = 24;
members[0][2] = "M";
members[0][3] = "010-2222-3333";
members[0][4] = "서울 종로구 233";

//https://www.w3schools.com/js/js_objects.asp
///////////var Man = (function(){}());
//함수 실행문을 넣은 것
/*
function abc(){
  alert("test");
}
abc();
//함수 바로 실행문
(function abc(){
  alert("test");
}()
);
*/
///////////////////////객체 개념
var man = [];
man[0] = {
  name: "홍길동",
  age: 24,
  gender: "M",
  tel: "010-2222-3333",
  addr: "서울 종로구 233"
};

man[1] = {
  name: "홍길순",
  age: 26,
  gender: "F",
  tel: "010-4444-5555",
  addr: "서울 종로구 556"
};

man[2] = {
  name: "홍길만",
  age: 19,
  gender: "M",
  tel: "010-6666-7777",
  addr: "서울 종로구 788",
  //함수도 추가 가능
  run: function(speed){
    alert(this.name+"은 "+speed+"속도로 뜁니다.");
  }
};

console.log(man[0].age);           //Getter
man[0].age = 25;                   //Setter
console.log(man[0].age);   

console.log(man[1]);
console.log(man[1].addr);

man[2].money = 10000;            //속성을 누락해도 나중에 추가 가능
console.log(man[2]);
man[2].run(5);

man[3] = {};                     //즉, 나중에 객체 추가 가능
man[3].name = "홍길이";
man[3].age = 29;
man[3].gender = "M";
man[3].height = 175;

///////////////////////객체 응용
var Man = (function(){
  //생성자(Constructor)
  function Man(){
  }
}());

var cates = {
  cate: [{
    title: "SHOP PAGES",
    sub:[{
      title: "Filters area" ,
      icon: "",
      link: "#"
    }, {
      title: "Hidden sidebar" ,
      icon: "HOT",
      link: "#"
    }, {
      title: "No page heading" ,
      icon: "",
      link: "#"
    }, {
      title: "Small categories menu" ,
      icon: "",
      link: "#"
    }, {
      title: "Masonry grid" ,
      icon: "",
      link: "#"
    }, {
      title: "Products list view" ,
      icon: "",
      link: "#"
    }, {
      title: "With background" ,
      icon: "",
      link: "#"
    }, {
      title: "Category description" ,
      icon: "",
      link: "#"
    }, {
      title: "Only categories" ,
      icon: "",
      link: "#"
    }, {
      title: "Header overlap" ,
      icon: "",
      link: "#"
    }, {
      title: "Default shop" ,
      icon: "",
      link: "#"
    }]
  }],
  length: 1
};

console.log(cates);
//위와 같음. 위는 {배열}로, 아래는 [객체]로 선언한 것
var catess = [{
    title: "SHOP PAGES",
    sub:[{
      title: "Filters area" ,
      icon: "",
      link: "#"
    }, {
      title: "Hidden sidebar" ,
      icon: "HOT",
      link: "#"
    }, {
      title: "No page heading" ,
      icon: "",
      link: "#"
    }, {
      title: "Small categories menu" ,
      icon: "",
      link: "#"
    }, {
      title: "Masonry grid" ,
      icon: "",
      link: "#"
    }, {
      title: "Products list view" ,
      icon: "",
      link: "#"
    }, {
      title: "With background" ,
      icon: "",
      link: "#"
    }, {
      title: "Category description" ,
      icon: "",
      link: "#"
    }, {
      title: "Only categories" ,
      icon: "",
      link: "#"
    }, {
      title: "Header overlap" ,
      icon: "",
      link: "#"
    }, {
      title: "Default shop" ,
      icon: "",
      link: "#"
    }]
  }];
  console.log(catess);


var catesss = [{
  main: {
    title: "SHOP PAGES", 
    icon: "", 
    link: "#"
  },
  sub:[
    {title: "Filters area", icon: "", link: "#"},
    {title: "Hidden sidebar", icon: "HOT", link: "#"}, 
    {title: "No page heading", icon: "", link: "#"}, 
    {title: "Small categories menu", icon: "", link: "#"}, 
    {title: "Masonry grid", icon: "", link: "#"}, 
    {title: "Products list view", icon: "", link: "#"}, 
    {title: "With background", icon: "", link: "#"}, 
    {title: "Category description", icon: "", link: "#"}, 
    {title: "Only categories", icon: "", link: "#"}, 
    {title: "Header overlap", icon: "", link: "#"}, 
    {title: "Default shop", icon: "", link: "#"}
  ]
}, {
  main: {
    title: "PRODUCT HOVERS", 
    icon: "", 
    link: "#"
  },
  sub:[
    {title:"Summary on hover", icon:"", link:"#"},
		{title:"Icons on hover", icon:"", link:"#"},
		{title:"Icons & Add to cart", icon:"", link:"#"},
		{title:"Full info on image", icon:"", link:"#"},
		{title:"All info on hover", icon:"", link:"#"},
		{title:"Button on image", icon:"", link:"#"},
		{title:"Standard button", icon:"", link:"#"},
		{title:"Quick shop", icon:"", link:"#"},
		{title:"Tiled hover", icon:"", link:"#"},
		{title:"Categories hover #1", icon:"", link:"#"},
    {title:"Categories hover #2", icon:"", link:"#"}
  ]
}, {
  main: {
		title: "PRODUCT PAGESUN", 
		icon: "LIMITED", 
		link: "#"
	},
	sub:[
		{title:"Default", icon:"", link:"#"},
		{title:"Centered", icon:"", link:"#"},
		{title:"Sticky description", icon:"", link:"#"},
		{title:"With shadow", icon:"", link:"#"},
		{title:"With background", icon:"", link:"#"},
		{title:"Accordion tabs", icon:"NEW", link:"#"},
		{title:"Accordion in content", icon:"", link:"#"},
		{title:"Sticky add to cart", icon:"", link:"#"},
		{title:"With sidebar", icon:"", link:"#"},
		{title:"Extra content #1", icon:"", link:"#"},
		{title:"Extra content #2", icon:"", link:"#"}
	]
},{
	main: {
		title: "PRODUCT IMAGES", 
		icon: "", 
		link: "#"
	},
	sub:[
		{title:"Thumbnails left", icon:"", link:"#"},
		{title:"Thumbnails bottom", icon:"", link:"#"},
		{title:"Sticky images", icon:"", link:"#"},
		{title:"One column", icon:"", link:"#"},
		{title:"Two columns", icon:"", link:"#"},
		{title:"Combined grid", icon:"", link:"#"},
		{title:"Images full-width", icon:"", link:"#"},
		{title:"Zoom image", icon:"", link:"#"},
		{title:"Images size - small", icon:"", link:"#"},
		{title:"Images size - large", icon:"", link:"#"},
		{title:"Without thumbnails", icon:"", link:"#"}
	]
},{
	main: {
		title: "WOOCOMMERCE", 
		icon: "", 
		link: "#"
	},
	sub:[
		{title:"Simple product", icon:"", link:"#"},
		{title:"Variable product", icon:"", link:"#"},
		{title:"External product", icon:"", link:"#"},
		{title:"Grouped product", icon:"", link:"#"},
		{title:"Shopping Cart", icon:"", link:"#"},
		{title:"Checkout", icon:"", link:"#"},
		{title:"My account", icon:"", link:"#"},
		{title:"Wishlist", icon:"", link:"#"},
		{title:"Track order", icon:"", link:"#"},
		{title:"Custom 404 page #1", icon:"", link:"#"},
		{title:"Custom 404 page #2", icon:"", link:"#"}
	]
},{
	main: {
		title: "FEATURES", 
		icon: "BEST", 
		link: "#"
	},
	sub:[
		{title:"360° product viewer", icon:"", link:"#"},
		{title:"With video", icon:"", link:"#"},
		{title:"With instagram", icon:"", link:"#"},
		{title:"With countdown timer", icon:"", link:"#"},
		{title:"Product presentation", icon:"", link:"#"},
		{title:"Variations swatches", icon:"", link:"#"},
		{title:"Infinit scrolling", icon:"NEW", link:"#"},
		{title:"Load more button", icon:"", link:"#"},
		{title:"Catalog mode", icon:"", link:"#"},
		{title:"Cookies law info", icon:"", link:"#"},
		{title:"Parallax scrolling", icon:"", link:"#"}
	]
}];
console.log(catesss);

