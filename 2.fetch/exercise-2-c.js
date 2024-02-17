function consultar() {
    var nombre = document.getElementById('nameInput').value;

    var resultados = obtenerResultadosDesdeAPI(nombre);

    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ""; 

    for (var i = 0; i < resultados.length; i++) {
        var resultado = resultados[i];

        var pElement = document.createElement('p');
        pElement.textContent = `El nombre ${nombre} tiene un ${resultado.porcentaje}% de ser de ${resultado.origen}`;

        var btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = function() {
            resultadosDiv.removeChild(pElement);
        };

        resultadosDiv.appendChild(pElement);
        resultadosDiv.appendChild(btnEliminar);
    }
}

function obtenerResultadosDesdeAPI(nombre) {
    return [
        { porcentaje: 22, origen: 'ET' },
        { porcentaje: 6, origen: 'MZ' }
    ];
}
