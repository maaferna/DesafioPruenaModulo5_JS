import { Leon, Lobo } from './Animal.js';

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
                <button class="btn btn-primary" onclick="playSound('${animal.getSonido()}')">Play Sound</button>
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
    $('#exampleModal').modal('show');
}

function playSound(sonido) {
    const audio = new Audio(sonido);
    audio.play();
}

export { addAnimal };
