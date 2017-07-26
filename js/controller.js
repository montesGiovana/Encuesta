var app = angular.module("encuestaModule", []);

app.controller("encuestaController", function($scope, $timeout){
	//console.log("Hola");

	$scope.bienvenida = true;
	$scope.final = false;

	//array de objetos
	$scope.encuesta =[
		//objetos
		{
			pregunta: "Usted busca para",
			respuesta: "",
			visible: false
		},

		{
			pregunta: "¿En que medio nos vió?",
			respuesta: "",
			visible: false
		},

		{
			pregunta: "Rango de edad",
			respuesta: "",
			visible: false
		},

		{
			pregunta: "Estado Civil",
			respuesta: "",
			visible: false
		},

		{
			pregunta: "¿Tiene hijos?",
			respuesta: "",
			visible: false
		},

		{
			pregunta: "Rango de la edad de los hijos",
			respuesta: "",
			visible: false
		},

		{
			pregunta: "¿Que le parecieron los departamentos?",
			respuesta: "",
			visible: false
		},

		{
			pregunta: "¿Como lo atendieron?",
			respuesta: "",
			visible: false
		},

		{
			pregunta: "¿De donde nos visitan?",
			respuesta: "",
			visible: false
		},

		{
			pregunta: "¿Nos recomendaría con amigos y familiares?",
			respuesta: "",
			visible: false
		}

	];


	$scope.siguientePregunta = function(indice, indicehide, event){
		//console.log("Hola");
		//0
		$scope.encuesta[indice].visible = true;
		//1
		$scope.encuesta[indicehide].visible = false;
		if(event != null){
			$scope.encuesta[indicehide].respuesta = event.currentTarget.id;
		}
		//variable de la pregunta 8
		//false para que se oculte la seccion
		$scope.final=false;


	}

	$scope.activarBienvenida = function(){
		$timeout(function callAtTimeout(){
			$scope.bienvenida = false;
			$scope.siguientePregunta(0,1,null);
		}, 5000);
	}

	$scope.activarFinal = function(){
		$scope.final = true;
		$scope.encuesta[8].visible = false;
		$timeout(function callAtTimeout(){
			$scope.siguientePregunta(9,8,null);
		}, 5000);
	}

	$scope.enviarRespuestas = function(){
		
		$.ajax({
				type: "POST",
				url: "php/Controller.php",
				data: {json: $scope.encuesta},
				dataType: "json",
				success: function(values){
					console.log("Hola");
					/*$.each(values.contenido, function(index,obj) {*/

						/*var $label = $('<label />',{class: "checkbox-inline"});
						var $check = $('<input />',{type: "checkbox",name: "subtitulos",value: obj.nombre}).appendTo($label);
						$label.append(obj.nombre+"&nbsp;");
						$label.appendTo($("#subtitulos"));
					
					});*/
				},
				error: function(err){
					console.error(err);
				}
		});
	}
	//peticion para consultar los subtitulos

});