let turnos = 3;


for (let i = 1; i <= 4; i++) {
    
    let nombre = prompt("Por favor ingrese su nombre:");
    if (i <= turnos) {
        alert("Hola " + nombre + ", tenés el turno número " + i + ".");
    } else {
        alert("Perdón " + nombre + ", no quedan más turnos");
        break;
    };
};