document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = 'https://api.agify.io?name=michael';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Datos de la API Agify:", data);
      })
      .catch(error => {
        console.error("Error en la solicitud fetch:", error);
      });
  });
  