let animalList = [];

function addAnimal(animal) {
    animalList.push(animal);
    updateAnimalList();
}

function updateAnimalList() {
    const animalListDiv = document.getElementById('Animales');
    animalListDiv.innerHTML = '';

    animalList.forEach(animal => {
        const card = document.createElement('div');
        card.classList.add('card', 'col-md-4');

        card.innerHTML = `
            <img src="${animal.getImg()}" class="card-img-top" alt="${animal.getNombre()}">
            <div class="card-body">
                <h5 class="card-title">${animal.getNombre()}</h5>
                <p class="card-text">${animal.getEdad()}</p>
                <img class="icon-sound" src="assets/imgs/audio.svg" alt="Play Sound" style="cursor:pointer; width:50px;" onclick="playSound('${animal.getSonido()}')" />
            </div>
        `;

        card.addEventListener('click', () => showAnimalDetails(animal));
        animalListDiv.appendChild(card);
    });
}


function showAnimalDetails(animal) {
    document.getElementById('modalImage').src = animal.getImg();
    document.getElementById('modalAge').textContent = animal.getEdad();
    document.getElementById('modalComments').textContent = animal.getComentarios();
    const successModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    successModal.show();
}

function playSound(sonido) {
    const audio = new Audio(sonido);
    audio.play();
}

window.playSound = playSound;

export { addAnimal };
