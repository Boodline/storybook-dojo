[![Storybook](https://user-images.githubusercontent.com/321738/63501763-88dbf600-c4cc-11e9-96cd-94adadc2fd72.png)](https://storybook.js.org/)

# Instalación

Para instalar e iniciar el proyecto ejecutamos:

```bash
$ npx sb init
```

Al ejecutar el comando se preguntará si se desea elegir el tipo de proyecto del storybook (framework a utilizar), en este caso respondemos 'Yes' y seleccionamos la opcion 'REACT'

Para verificar la instalación e iniciar el storybook ejecutamos:
```bash
$ npm run storybook
```

## Guía de instalación completa de Storybook
https://storybook.js.org/docs/react/get-started/install

# Crear un componente

 - Creamos una carpeta dentro de *stories/* con el nombre del componente
 - Dentro de este creamos el archivo *.js* y *.css* correspondientes
 - Creamos un componente individual de React como normalmente lo realizaríamos

> El árbol de archivos puede ser organizado de cualquier manera deseada, se ha seleccionado la mas explicativa para un funcionamiento básico

> En este paso no se podrá probar el funcionamiento del componente ya que para eso requerimos ya crear un Story

### Árbol de archivos

Creación de las carpetas y archivos

<p align="center">
  <img src="./tutorial-assets/files-component.png" />
</p>


# Crear un story

  - Dentro de la carpeta designada para el componente creamos el archivo *.stories.ts*
    - Aqui se deberá definir cada uno de los stories que queramos presentar
    - En la version actual (6.0.13) la documentación y controles base serán automáticamente implementados

## Ejemplo

### Árbol de archivos

<p align="center">
  <img src="./tutorial-assets/files-stories.png" />
</p>

### Input.stories.js

<p align="center">
  <img src="./tutorial-assets/code-stories.png" />
</p>

## Resultado

<p align="center">
  <img src="./tutorial-assets/result-1.png" />
</p>
<p align="center">
  <img src="./tutorial-assets/result-2.png" />
</p>