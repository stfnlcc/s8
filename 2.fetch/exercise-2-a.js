const baseUrl = 'https://api.nationalize.io?name=';

document.addEventListener('DOMContentLoaded', () => {
    const consultButton = document.getElementById('consultButton');
    consultButton.addEventListener('click', () => {
        const nameInput = document.getElementById('nameInput').value;

        if (nameInput) {
            const apiUrl = baseUrl + encodeURIComponent(nameInput);

            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        } else {
            console.log('Ingrese un nombre antes de consultar.');
        }
    });
});
