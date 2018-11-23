var data = [{
	datasets: [{
		data: [70, 30],
		backgroundColor: [
			'rgba(255, 99, 132, 0.5)',
			'rgba(255, 255, 255, 0)'
		],
		hoverBackgroundColor: [
			'rgba(255, 0, 0, 1)',
			'rgba(255, 255, 255, 0)'
		]
	}]
}, {
	labels: ["Red", "Blue", "Yellow"],
	datasets: [{
		label: '# of Votes',
		data: [12, 19, 3],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)'
		],
		borderWidth: 1
	}]
}, {
	labels: ["Red", "Blue", "Yellow"],
	datasets: [{
		label: '# of Votes',
		data: [12, 19, 3],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)'
		],
		borderColor: [
			'rgba(255,99,132,1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)'
		],
		borderWidth: 1
	}]
}];
var option = [{
	tooltips: {
		enabled: false //차트에 호버했을 때 뜨는 것
	},
	cutoutPercentage: 30, //두께
	rotation: -0.5 * Math.PI, //돌아가는 시작점의 각도
	circumference: 1.4 * Math.PI, //돌아가는
	animation: {
		animateRotate: false, //차트가 나올 때 돌아가는 애니메이션을 막음
		animateScale: true //차트가 나올 때 작아졌다 커짐
	}
}, {
	legend: {
		display: false //차트 분류
	}
}, {
	title: {
		display: true,
		text: 'Custon Chart Title',
		fontSize: 24,
		fontColor: "#f00"
	} //차트의 이름
}];
var chart = [];

var ctx = $(".chart");
ctx.each(function (i) {
	chart[i] = new Chart($(this), {
		type: 'doughnut',
		data: data[i],
		options: option[i]
	})
});