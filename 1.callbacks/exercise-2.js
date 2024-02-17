const userAnwsers = [];

function confirmExample(description) {
    const result = confirm(description);
    return result;
}

function promptExample(description) {
    const result = prompt(description);
    return result;
}

function father(description, callback) {
    const answer = callback(description);
    userAnwsers.push(answer);
}

father('¿Te gusta el chocolate?', confirmExample);
father('Ingresa tu nombre:', promptExample);
father('¿Quieres recibir notificaciones?', confirmExample);

console.log(userAnwsers);
