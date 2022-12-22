var quiz = {
	"JS": [
		{
			"id": 1,
			"images": "images/Camel.jpg",
			"answer": "camel",
			"YourAnswer": "",
			"score": 0,
			"status": ""
		},
		{
			"id": 2,
			"images": "images/Cat.jpg",
			"answer": "cat",
			"YourAnswer": "",
			"score": 0,
			"status": ""
		},
		{
			"id": 3,
			"images": "images/Dog.jpg",
			"answer": "dog",
			"YourAnswer": "",
			"score": 0,
			"status": ""
		},
		{
			"id": 4,
			"images": "images/donkey.jpg",
			"answer": "donkey",
			"YourAnswer": "",
			"score": 0,
			"status": ""
		},
		{
			"id": 5,
			"images": "images/Giraffe.jpg",
			"answer": "giraffe",
			"YourAnswer": "",
			"score": 0,
			"status": ""
		},
		{
			"id": 6,
			"images": "images/Horse.png",
			"answer": "horse",
			"YourAnswer": "",
			"score": 0,
			"status": ""
		},
		{
			"id": 7,
			"images": "images/Lion.jpg",
			"answer": "lion",
			"YourAnswer": "",
			"score": 0,
			"status": ""
		},
		{
			"id": 8,
			"images": "images/rabbit.jpg",
			"answer": "rabbit",
			"YourAnswer": "",
			"score": 0,
			"status": ""
		},
		{
			"id": 9,
			"images": "images/tiger.jpg",
			"answer": "tiger",
			"YourAnswer": "",
			"score": 0,
			"status": ""
		},
		{
			"id": 10,
			"images": "images/Zebra.jpg",
			"answer": "zebra",
			"YourAnswer": "",
			"score": 0,
			"status": ""
		}
	]
}



var quizApp = function () {

	this.score = 0;
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;


	this.displayQuiz = function (cque) {
		this.currentque = cque;
		if (this.currentque < totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
			document.getElementById('image').src = quiz.JS[this.currentque].images;
			document.getElementById("input").value = "";
		}
		if (this.currentque <= 0) {
			$("#previous").attr("disabled", true);
		}
		if (this.currentque >= totalque) {
			$('#next').attr('disabled', true);
			for (var i = 0; i < totalque; i++) {
				this.score = this.score + quiz.JS[i].score;
			}
			return this.showResult(this.score);
		}
	}

	this.showResult = function (scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
		for (var j = 0; j < totalque; j++) {
			var res;
			if (quiz.JS[j].score == 0) {
				res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
				'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + '<img src = '+ quiz.JS[j].images +' id = "img" width = "200" height = "200" />'+'</div>' +
				'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
				'<div><b>Your answer:</b> &nbsp;' + quiz.JS[j].YourAnswer + '</div>' +
				'<div class="last-row"><b>Score:</b> &nbsp;' + res +

				'</div>'

			);

		}
	}

	this.checkAnswer = function (option) {
		var answer = quiz.JS[this.currentque].answer;
		
		if (option == quiz.JS[this.currentque].answer) {
			if (quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
			}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		quiz.JS[this.currentque].YourAnswer = option;

	}

	this.changeQuestion = function (cque) {
		this.currentque = this.currentque + cque;
		this.displayQuiz(this.currentque);

	}

}


var jsq = new quizApp();

var selectedopt;
$(document).ready(function () {
	jsq.displayQuiz(0);
});




$('#next').click(function (e) {
	e.preventDefault();
	
	jsq.checkAnswer(document.getElementById("input").value.toLowerCase());
	
	jsq.changeQuestion(1);
});

$('#previous').click(function (e) {
	e.preventDefault();
	if (selectedopt) {
		jsq.checkAnswer(selectedopt);
	}
	jsq.changeQuestion(-1);
});



