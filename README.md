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
## Creando la cuadrícula
## Dando formato a las tarjetas
## Animaciones
