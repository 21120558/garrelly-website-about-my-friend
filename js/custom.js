

// JavaScript Document

$('#subscribeform').submit(function(){



	var action = $(this).attr('action');



		$("#mesaj").slideUp(750,function() {







		$('#mesaj').hide();



	$('#subsubmit')







			.after('')







			.attr('disabled','disabled');



	$.post(action, {







			email: $('#subemail').val()







		},







			function(data){







				document.getElementById('mesaj').innerHTML = data;







				$('#mesaj').slideDown('slow');







				$('#subscribeform img.subscribe-loader').fadeOut('slow',function(){$(this).remove()});







				$('#subsubmit').removeAttr('disabled');







				if(data.match('success') != null) $('#subscribeform').slideUp('slow');



			}







		);







		});







		return false;







	});

	function myAudio()
	{
		document.getElementById("audio").play()
	}


	setTimeout(function () {
		var click = document.getElementById("click-play");

		disappearFunction(click)
	}, 2000)


	document.getElementById("heart").addEventListener("click", myAudio);

	function disappearFunction(click) {
		click.classList.toggle(
			'disappear'
		);
	}
