
// window.onload
$(document).ready(function() {

// get JSON file
$.getJSON('js/baza.json', function(json) {
  		postalC = json;
		console.log('success');
	});

    var pCodeField = $('#postal_code'),
		message = $('#message'),
		postalC;


	// pCodeField.onchange = function(){
	// 	var pattern = this.pattern;
	// 	var placeholder = this.placeholder;
	// 	var isValid = this.value.search(pattern) >= 0;
		
	// 	if(!(isValid)){
	// 		message.innerHTML = "Wartość musi być zgodne ze wzorcem: " + placeholder;
	// 	} else {
	// 		message.innerHTML = "";
	// 	}
	// }

// funkcja przycisku
	$('#butt').click(function(){

        message.html('');
        var inner =  pCodeField.val();

        if(postalC.hasOwnProperty(inner)) {
            var arrayLength = postalC[inner].length;
            for(i = 0; i < arrayLength; i++){
		        message.append('<p class="bg-success">' + postalC[inner][i].city + ', ' + postalC[inner][i].adress + ', ' + postalC[inner][i].woj + '</p>');
            }
        } else {
                message.append('<p class="bg-danger"> Wprowadz prawidłowy kod pocztowy </p>');
            }
	});


});
