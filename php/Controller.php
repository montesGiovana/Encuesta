<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	    /Obtenemos los datos de los id
        $busca = $_POST["Para que busca"];
        $medio = $_POST["¿En que medio nos vió?"];
        $rango = $_POST["Rango de edad"];
        $edocivil = $_POST["Estado Civil"];
        $hijos = $_POST["¿Tiene hijos?"];
        $rangoHijos = $_POST["Rango de edad de los hijos"];
        $opinionDepto = $_POST["Que le parecieron los Departamentos"];
        $atencion = $_POST["¿Como lo atendieron?"];
        $visita= $_POST["¿De donde nos visita?"];
        $recomendacion = $_POST["¿Nos recomendaria con amigos y familiares?"];

        header('Content-Type: application/json');
    
        $respuestas = array(
        'estado' => 'ok',
        'Para que busca' => $busca, 
        '¿En que medio nos vió?' => $medio, 
        'Rango de edad' => $rango,
        'Estado Civil' => $edocivil,
        '¿Tiene hijos?' => $hijos,
        'Rango de edad de los hijos' => $rangoHijos,
        'Que le parecieron los Departamentos' => $opinionDepto,
        '¿Como lo atendieron?' => $atencion,
        '¿De donde nos visita?' => $visita,
        '¿Nos recomendaria con amigos y familiares?' => $recomendacion
        );
    
        echo json_encode($respuestas, JSON_FORCE_OBJECT);	
}

?>