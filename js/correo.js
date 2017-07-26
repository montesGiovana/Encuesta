$(document).ready(function(){

	var respuesta = $('#respuestas');

	$.ajax({
				type: "POST",
				url: "../js/controller.js",
				data: {"idRequest": 2},
				dataType: "json",
				success: function(values){
					$.each(values.contenido, function(index, obj){
						var $tr = $('<tr />'); 
						var $busca = $('<td />', {id: obj.busca}).appendTo($tr);
						var $medio = $('<td />', {id: obj.medio}).appendTo($tr);
						var $rango = $('<td />', {id: obj.rango}).appendTo($tr);
						var $edocivil= $('<td />', {id: obj.edocivil}).appendTo($tr);
						var $hijos = $('<td />', {id: obj.hijos}).appendTo($tr);
						var $rangoHijos = $('<td />', {id: obj.rangoHijos}).appendTo($tr);
						var $opinionDepto = $('<td />', {id: obj.opinionDepto}).appendTo($tr);
						var $atencion = $ ('<td />', {id: obj.atencion}).appendTo($tr);
						var $visita = $ ('<td />', {text: obj.visita}).appendTo($tr);
						var $recomendacion = $ ('<td />', {id: obj.recomendacion}).appendTo($tr);

						var $enviar = $('<td />',{class: "text-center"});
						var $icon = $('<i />',{class: "glyphicon glyphicon-pencil"});
						var $btnEnviar = $('<a />',{href: "#",class: "btn btn-success"});

						$icon.appendTo($btnEnviar);
						$btnEnviar.appendTo($enviar);
						$enviar.appendTo($tr);


					});
				},
				error: function(err){
					console.error(err);
				}
		});

	
	
});