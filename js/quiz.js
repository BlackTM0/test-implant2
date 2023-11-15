$(document).ready(function(){

    // QUIZ
	
    var Quiz = $('#quiz')
    var QuizSteps = $('[data-quiz-box]')
    var QuizInfo = $('[data-quiz-info]')
    var QuizFinal = $('[data-quiz-final]')
    var QuizLine = $('[data-quiz-line] span')
    var QuizNext = $('[data-quiz-next], [data-answer] label')
    var QuizNumberActive = $('[data-num-active]')
    var QuizNumberTotal = $('[data-num-total]')
    var QuizNumCount = QuizSteps.find('.item').length
    var QuizNumCountStart = (100/QuizNumCount)*1
    
    QuizNumberTotal.html(QuizNumCount)
	QuizLine.css('width',QuizNumCountStart+'%')
	
	QuizNext.on('click', function(){
	var LastStep = QuizSteps.find('.active').hasClass('last')
		if(LastStep==true){
			QuizSteps.fadeOut(650);
			QuizInfo.fadeOut(650);
            QuizFinal.delay(650).fadeIn(400);
		} else {
			var QuizStepActive = QuizSteps.find('.active')
			var QuizStepNum = QuizStepActive.data('num')
			var QuizStepNumNext = parseInt(QuizStepNum)+1
			var QuizStepNextActive = $('[data-num='+QuizStepNumNext+']')

			QuizStepActive.delay(100).fadeOut(500).removeClass('active')
			QuizStepNextActive.delay(500).fadeIn(500).addClass('active')
			LineWidth();
		}
	});

	function LineWidth(){
		var QuizNumActive = QuizSteps.find('.active').data('num')
        var QuizNumEnd = parseInt(QuizNumActive)
		var QuizLineWidth = (100/QuizNumCount)*QuizNumEnd
		QuizLine.css('width',QuizLineWidth+'%')
		QuizNumberActive.html(QuizNumEnd)
	}
	
	// SCROLL LINKS
	
	$('.sl').on( 'click', function(){
		var link = $(this);
		var linkToScroll = link.attr('href');
		var blockClass = linkToScroll.replace('#','.');
		var positionTop = $(blockClass).offset().top;
		if(linkToScroll !== undefined && linkToScroll !== '') {
				$('html, body').animate({
						scrollTop: positionTop - 113
				}, 700
				);
		}
		return false;
	});

	// PHONE MASK

	$('input[type="tel"]').mask('+7 (999) 999-99-99');

	// FORMS
	
	$('form').submit(function(){var form = this;
		if(this.form&&!this.form.value){this.form.focus(); return false;}
		
		var submit_text = $(form).find('button[type="submit"]').text();
		$(form).find('button[type="submit"] span').text('Отправка...').attr('disabled', 'disabled');
		
		$.ajax({
			'type': 'POST', 
			'url': ($(this).attr('action')||'send-amo.php'), 
			'data': $(this).serialize(), 
			'success': function(){
				$('.form-group').fadeOut(500);
				$('.politic').fadeOut(500);
				$('.end-message').fadeIn(500);
			}, 
			'error': function(){alert('Network Error');}, 
			'complete': function(){}, 
		});
		
		return false;
	});


});