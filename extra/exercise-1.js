fetch('https://breakingbadapi.com/api/characters')
.then(response => response.json())
.then(characters => {
    // Obtener el contenedor donde mostraremos los personajes
    const galleryContainer = document.getElementById('characters-gallery');

    // Iterar sobre los personajes y agregarlos al HTML
    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');

        const characterImage = document.createElement('img');
        characterImage.src = character.img;
        characterImage.alt = character.name;

        const characterName = document.createElement('p');
        characterName.textContent = character.name;

        characterCard.appendChild(characterImage);
        characterCard.appendChild(characterName);

        galleryContainer.appendChild(characterCard);
    });
})
.catch(error => console.error('Error fetching characters:', error));