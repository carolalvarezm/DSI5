# Práctica 10: Pokedex
## Preparación
* Lo primero que hacemos es instalar un linter para css:

```
 $ npm install -D stylelint stylelint-config-standard
```
* Añadimos un script de npm para ejecutarlo directamente con lo siguiente:

```
 $ npx stylelint src/css/*.css
``` 
* Instalamos algunos plugins para utilizar con postcss. Ya que postcss no hace nada por si mismo:

        ```
        $ npm install -D autoprefixer postcss-clean
        $ npm install -D postcss-font-magician
        $ npm install -D postcss-mixins
        $ npm install -D postcss-nesting
        $ npm install -D @fullhuman/postcss-purgecss
        $ npm install -D postcss-preset-env

        ```
    * Empezaremos con el *autofixer* y el *postcss-clean*, que se encargarán de incluir prefijos para navegadores antiguos y minimizar el código respectivamente.
    * Tambien pondremos *postcss-mixins* que nos dejará crear partes de código reutilizable.
    * El *postcss-font-magician*  carga "automáticamente" las fuentes de Google fonts.
    * El *postcss-nesting* nos permite anidar css fácilmente.
    * Por último *@fullhuman/postcss-purgecss* nos eliminará codigo css que no estemos utilizando en nuestro código.

* A continuación para que funcione con parcel debemos crear nuestro fichero de configuración, en este caso será un JSON y lo guardaremos con el nombre de *.postcssrc*. El mío quedaría así:

```
{
"plugins": {
"postcss-mixins": true,
"postcss-font-magician": true,
"postcss-nesting": true,
"@fullhuman/postcss-purgecss": {
"content": [
"./src/**/*.html",
"./src/**/*.js"
]
},
"autoprefixer": true,
"postcss-clean": true
}
}
```
## Haciendo las peticiones
* Para hacer las peticiones a la API de PokeAPI utilizaremos las promesas y el  Promise.all() para que nos salgan siempre en orden creciente.

* En primer lugar metemos todas las url que vamos a utilizar en un array.
* Luego mapeamos cada url con un fetch a esa url.
* Por último hacemos un Promise.all en el que cuando se cumplan el resto de promesas esta también se cumplirán:
    * Mapeamos las respuestas y las convertimos a json para poder leerlas.
    * Por cada pokemon llamamos a la función de crear la cuadrícula.

```javascript
function getPokemon() {

    let urls = [];
    for (i = 1; i < 152; i++) {
        urls.push("https://pokeapi.co/api/v2/pokemon/" + i + '/');
    }
    // Mapeamos cada url a su promesa 
    let requests = urls.map(url => fetch(url));

    // Promise.all esperamos a que se resuelvan todas
    Promise.all(requests)
        //Mapeamos las respuesta y las pasamos a un json para poder leerlas
        .then(responses => Promise.all(responses.map(r => r.json())))
        // Por cada pokemon llamamos a crear la cuadrícula
        .then(pokemons => pokemons.forEach(pokemon => {
            crearCuadricula(pokemon);
        }));
}
```

## Creando la cuadrícula
* Para crear la cuadrícula desde javascript lo que hacemos es ir creando elementos con createElement y luego añadiéndolos al html.
    * Para el texto sacamos el nombre y el id del pokemon. ```p.textContent = pokemon.id + ". " + pokemon.name;```
    * Para la imagen sacamos el sprite que está de espaldas: ```img.src = pokemon.sprites.back_default;```
* A continuación añadimos al elemento 'div' las clases *elemento*, *round* y *shadow* para darles formato con css.
```javascript
    div.classList.add("elemento");
    div.classList.add("round");
    div.classList.add("shadow");
```
* Finalmente añadimos listeners a los elementos para que cuando pasemos el ratón por encima se vea de frente y cuando lo saquemos se vea de espaldas.
```javascript

    div.addEventListener("mouseover", function() {
        img.src = pokemon.sprites.front_default
    });

    div.addEventListener("mouseout", function() {
        img.src = pokemon.sprites.back_default
    });
```

* Añadimos para finalizar los elementos al html:
```javascript
    div.appendChild(img);
    div.appendChild(p);
```
## Dando formato a las tarjetas
* Lo primero que hacemos en la parte del css es centrar todos los elementos que estén dentro de la etiqueta *body* usando flex:
```css
body {
    display: flex;
    justify-content: center;
}

```

### Grid
* A continuación utilizaremos grid para definir una cuadrícula en el div que hemos puesto la clase *.container*:
    * Esta cuadrícula tendrá 8 columnas y 18 filas para albergar los 151 primeros pokemons.
    * También dejaremos un espacio entre cada elemento.
    ```css
        .container {
        display: grid;
        grid-template-columns: repeat(8, 140px);
        grid-template-rows: repeat(18, 140px);
        grid-gap: 10px 10px;
    }
    ```
### Redondeado y sombras
* También redondeamos las esquinas de los elementos dándoles la clase *round*:

```css
.round {
    border-radius: 5%;
}
```
* Y le añadimos sombras:
```css
.shadow {
    box-shadow: 5px 5px 10px 4px gray;
}
```
### Elemento
* Una vez que le hemos dado el formato de tarjetas lo primero que hacemos es centrar los elementos hijos con flex. 
* Añadimos también un gradiente de blanco a gris para el fondo.
* A los párrafos hijos transformamos la primera letra a mayúsculas y le añadimos una fuente desde los assets.
* Finalmente cuando el cursor pase por encima la imagen hija se hará más grande.

```css

@font-face {
    font-family: pokemon;
    src: url(../assets/Pokemon.ttf);
}

.elemento {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-image: linear-gradient(180deg, white 30%, gray);
    
    & p {
        text-transform: capitalize;
        font-family: pokemon;
        font-size: 20px;
    }
    &:hover {
        & img {
            animation: agrandar 3s;
        }
    }
}
```
### Animaciones
* El paso anterior utiliza una animación que escala la imagen. La definimos de la siguiente manera:
```css
@keyframes agrandar {
    0% {
        transform: scale(1, 1);
    }
    100% {
        transform: scale(2, 2);
    }
}
```

## Resultado

* El resultado final sería algo así:

![Resultado](https://github.com/ULL-ESIT-DSI-1920/dsi-p4-pokedex-alu0100944723/blob/master/src/assets/Capturas_Readme/Resultado.gif)

* También puede verse en la siguiente [url](https://ull-esit-dsi-1920.github.io/dsi-p4-pokedex-alu0100944723/)