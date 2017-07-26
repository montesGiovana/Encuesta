$(document).ready(function(){

	$(".encuesta").on("keydown",function(e){
		setTimeout(function() {
			e.currentTarget.value = e.currentTarget.value.toUpperCase();
		},1);
	});

	realizarPeticionAjax("POST", {"idRequest": 1});

	$("#btn-enviar").on("click", function(e) {
		e.preventDefault();
		
		var jsonRequest = {};

		jQuery($("#encuesta")).serializeArray().map(function(item) {
			if (jsonRequest[item.name]) {
				if (typeof(jsonRequest[item.name]) == "string") {
					jsonRequest[item.name] = [jsonRequest[item.name]];
				}

				jsonRequest[item.name].push(item.value);
			} else {
				jsonRequest[item.name] = item.value;
			}
		});

		console.log(jsonRequest);