# Proyecto: Animales en Investigación

## Descripción

Este proyecto es una aplicación web desarrollada en JavaScript que permite registrar y mostrar información sobre animales en investigación. Los investigadores pueden agregar animales, ver detalles y escuchar sonidos específicos de cada animal. La aplicación utiliza el paradigma de programación orientada a objetos (POO) e implementa funciones autoejecutables (IIFE) para la inicialización de ciertos elementos.

## Características

- **Registro de Animales**: Los usuarios pueden registrar animales seleccionando el nombre, edad, imagen y comentarios.
- **Visualización en Tarjetas**: Los animales registrados se muestran en tarjetas organizadas en filas de tres.
- **Modal de Detalles**: Al hacer clic en una tarjeta, se abre un modal que muestra los detalles del animal.
- **Reproducción de Sonidos**: Cada tarjeta tiene un ícono que permite reproducir el sonido correspondiente al animal.
- **Uso de IIFE**: Se utiliza una función autoejecutable para la inicialización del proyecto.
- **Interfaz Responsiva**: Se utiliza Bootstrap para asegurar que la interfaz sea responsiva en diferentes dispositivos.

## Requisitos

- **Visual Studio Code**: Se recomienda utilizar Visual Studio Code como editor de código.

- **Extensión Live Server**: Para ejecutar la aplicación localmente, es necesario instalar la extensión Live Server en Visual Studio Code.
Ejecutar el Servidor Local con Live Server
2. Instala la extensión Live Server desde la tienda de extensiones de Visual Studio Code.
3. Haz clic derecho en el archivo index.html y selecciona "Open with Live Server".
El proyecto se abrirá en el navegador predeterminado en la dirección http://127.0.0.1:5500.

- **Python (opcional)**: Si prefieres ejecutar un servidor local con Python, puedes hacerlo siguiendo las instrucciones a continuación. 
1. Abre una terminal en la carpeta del proyecto.
2. Ejecuta el siguiente comando:
```bash
python -m http.server
```
3. Abre tu navegador y navega a "http://0.0.0.0:8000/" para ver la aplicación.

## Instrucciones de Instalación y Ejecución

### 1. Clonar el Repositorio

Clona este repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone https://github.com/maaferna/DesafioPruenaModulo5_JS.git
```

Estructura del Proyecto

proyecto-animales-investigacion/
│
├── assets/
│   ├── css/
│   │   └── estilos.css      # Hoja de estilos personalizada
│   ├── imgs/
│   │   └── ...              # Imágenes utilizadas en el proyecto
│   └── js/
│   |   ├── Animal.js        # Clases de animales
│   |   ├── App.js           # Funcionalidades de la aplicación
│   |   └── index.js         # Inicialización y eventos principales
|   |___ sounds/             # Audios en formato mp3
|        |___...  
│
├── index.html               # Archivo principal de la aplicación
└── README.md                # Este archivo


Detalles Técnicos

Clases de Animales: Se han definido clases para cada tipo de animal, heredando de una clase Animal base.

Funciones Autoejecutables (IIFE): Se utiliza una IIFE para inicializar los elementos del proyecto y configurar el entorno.

Uso de Bootstrap: Se emplea Bootstrap 5 para la estructura y estilo de la interfaz.

Funcionalidades de la Aplicación

Registrar un Animal:

Selecciona el nombre del animal, la edad, sube una imagen y añade comentarios.

Haz clic en "Agregar" para registrar el animal en la tabla.
Ver Detalles del Animal:

Haz clic en una tarjeta de animal para ver un modal con la información completa del animal.

Reproducir Sonido:

Haz clic en el ícono de sonido dentro de la tarjeta para reproducir el sonido correspondiente al animal.


Consideraciones Finales

Asegúrate de que la carpeta assets/imgs/ contenga las imágenes necesarias para que la aplicación funcione correctamente.
Si añades nuevos animales, actualiza el archivo Animal.js con las nuevas clases y sonidos correspondientes.