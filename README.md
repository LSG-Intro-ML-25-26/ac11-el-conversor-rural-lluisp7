[![Work in MakeCode](https://classroom.github.com/assets/work-in-make-code-8824cc13a1a3f34ffcd245c82f0ae96fdae6b7d554b6539aec3a03a70825519c.svg)](https://classroom.github.com/online_ide?assignment_repo_id=22030614&assignment_repo_type=AssignmentRepo)
 
Proyecto Granja - MakeCode Arcade
Este es un juego de gestión de recursos y comercio desarrollado en Python para la plataforma MakeCode Arcade. El jugador controla a un personaje en una granja, donde debe recolectar madera para poder comerciar con diferentes animales y obtener recursos.

Descripción
El juego consiste en un mapa abierto delimitado por vallas donde aparecen árboles y varios NPCs (animales y objetos). El objetivo principal es acumular leña talando árboles para usarla como moneda de cambio y comprar animales para tu inventario.

Funcionalidades
Sistema de movimiento: El personaje se mueve en cuatro direcciones y la cámara lo sigue.

Recolección de recursos: Se pueden talar árboles dispersos por el mapa. Al talar uno, se obtiene madera y el árbol reaparece en otra posición aleatoria tras un tiempo.

Sistema de comercio: Al interactuar con los animales (gallinas, cabras, caballos, etc.), se abre un menú para comprar unidades a cambio de leña.

Inventario: El juego gestiona internamente la cantidad de madera y los animales comprados.

Colisiones: Se ha implementado un sistema de colisiones personalizado para gestionar la interacción entre el jugador y los objetos sólidos sin depender de un mapa de teselas (tilemap).

Controles
Flechas de dirección (o WASD): Mover al personaje por el mapa.

Botón A (Barra espaciadora / Tecla Z): Botón de acción principal.

Si estás cerca de un árbol: Lo tala.

Si estás tocando a un animal: Inicia el comercio.

Si estás tocando la casa: Muestra el inventario de leña actual.

Advertencia de Compatibilidad
Este proyecto ha sido programado utilizando características específicas de Python en MakeCode. Debido a la complejidad de ciertas estructuras lógicas utilizadas (clases personalizadas, gestión de memoria directa y diccionarios), el código no es compatible con el editor de bloques.

Si intentas cambiar la vista al modo "Bloques", es probable que el editor no pueda interpretar el código correctamente, lo que podría causar errores de compilación o impedir que el juego se ejecute. Se recomienda mantener el editor siempre en modo Python.

Cómo ejecutar el código
Abrir el editor de MakeCode Arcade.

Crear un nuevo proyecto.

Cambiar el modo de edición a Python (parte superior de la pantalla).

Borrar cualquier código existente y pegar el contenido del script main.py.

El juego cargará automáticamente los sprites y la lógica.

Notas técnicas
El proyecto no utiliza el editor de mapas (tilemap) por defecto, sino que posiciona los elementos usando coordenadas cartesianas (X, Y) sobre un fondo de color fijo. Los recursos gráficos están definidos directamente en el código para facilitar la portabilidad del script.

> Open this page at [https://raimonizard.github.io/makecode-arcade-template-nena-mov/](https://raimonizard.github.io/makecode-arcade-template-nena-mov/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/raimonizard/makecode-arcade-template-nena-mov** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/raimonizard/makecode-arcade-template-nena-mov** and click import

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
