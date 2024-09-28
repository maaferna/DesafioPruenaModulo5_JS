import { Leon, Lobo, Oso, Serpiente, Aguila } from './Animal.js';
import { addAnimal } from './App.js';

document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.getElementById('btnRegistrar');
    if (registerButton) {
        registerButton.addEventListener('click', () => {
            const nombre = document.getElementById('animal').value;
            const edad = document.getElementById('edad').value;
            const comentarios = document.getElementById('comentarios').value;
            const img = document.getElementById('animalImage').files.length > 0
                        ? URL.createObjectURL(document.getElementById('animalImage').files[0])
                        : 'assets/img/lion.svg';

            if (!nombre || !edad || !comentarios || !img) {
                alert('Por favor seleccione una imagen.');
                return;
            }

            let animal;
            switch (nombre) {
                case 'Leon':
                    animal = new Leon(nombre, edad, img, comentarios, './assets/sounds/Rugido.mp3');
                    break;
                case 'Lobo':
                    animal = new Lobo(nombre, edad, img, comentarios, './assets/sounds/Aullido.mp3');
                    break;
                case 'Oso':
                    animal = new Oso(nombre, edad, img, comentarios, './assets/sounds/Grunido.mp3');
                    break;
                case 'Serpiente':
                    animal = new Serpiente(nombre, edad, img, comentarios, './assets/sounds/Siseo.mp3');
                    break;
                case 'Aguila':
                    animal = new Aguila(nombre, edad, img, comentarios, './assets/audio/Chillido.mp3');
                    break;
                default:
                    alert('Please select a valid animal');
            }

            if (animal) {
                addAnimal(animal);
                showToast('Animal added successfully!');
                document.getElementById('animal').value = '';
                document.getElementById('edad').value = '';
                document.getElementById('comentarios').value = '';
                document.getElementById('animalImage').value = '';
            }
        });
    } else {
        console.error('Register button not found!');
    }
});


function showToast(message) {
    const toastElement = document.getElementById('successToast');
    const toastBody = toastElement.querySelector('.toast-body');
    toastBody.textContent = message;
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
}

