class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.img = img;
        this.comentarios = comentarios;
        this.sonido = sonido;
    }

    getNombre() {
        return this.nombre;
    }

    getEdad() {
        return this.edad;
    }

    getImg() {
        return this.img;
    }

    getSonido() {
        return this.sonido;
    }

    setComentarios(comentarios) {
        this.comentarios = comentarios;
    }

    getComentarios() {
        return this.comentarios;
    }
}

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Rugir() {
        console.log("Rugido");
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Aullar() {
        console.log("Aullido");
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Grunir() {
        console.log("Gruñir");
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Sisear() {
        console.log("Sisear");
    }
}


class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Chillar() {
        console.log("Chillar");
    }
}


export { Leon, Lobo, Oso, Aguila, Serpiente }; 
