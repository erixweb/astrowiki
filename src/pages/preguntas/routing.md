---
layout: ../../layouts/DocLayout.astro
title: Routing en Astro
description: "Hoy en día crear rutas para tu web es facilísimo y Astro, no se queda atrás."
difficulty: medium
draft: true
---
Hoy en día crear rutas para tu web es facilísimo y Astro, no se queda atrás.

En Astro, existen las rutas estáticas. Las rutas estáticas son automáticas, por ejemplo src/pages/index.astro → tuweb.dev/ o tambíen src/pages/about.astro &rarr; tuweb.dev/about.

Para navegar por tu página, simplemente tienes que usar un anchor.
```
<a href="/about">About</a>
```
Además de eso, en Astro están las rutas dinámicas. Pueden ser muy útiles por ejemplo, cuando no quieres crear un archivo por cada uno de tus posts. `src/pages/post/[id].astro`, en este archivo lo que hara es detectar la URL, por ejemplo: `https://tusitio.dev/post/1` y con Astro podrás conseguir la `id`, que en este caso sería 1 y hacer por ejemplo un fetch a el post y devolver el contenido del post.

Además de esto necesitarás usar la función getStaticPaths(), esta función devolvera una raíz de objetos con cada posible ruta. Es decir todos los posts que tenemos.

```
export function getStaticPaths() {
  return [
    {params: {id: 1}},
    {params: {id: 2}},
    {params: {id: 3}}
  ]
}
```

Con esto conseguiremos que existan las rutas `tusitio.dev/post/1` `tusitio.dev/post/2` `tusitio.dev/post/3` y a partir de esto empezarías tu código. Y para conseguir la id usaremos la variable `Astro.params`, de esta manera: 
```
const { id } = Astro.params
```
Y aquí un ejemplo de como usar todo esto

`src/pages/post/[id].astro`
```
---
export function getStaticPaths() {
  return [
    {params: {id: 1}},
    {params: {id: 2}},
    {params: {id: 3}}
  ]
}

const { id } = Astro.params

const post = await fetch("https://jsonplaceholder.typicode.com/posts/"+id)
.then(res => res.json())
---

<h1>{post.title}</h1>
<p>
    {post.body}
</p>
```
En este ejemplo hemos puesto en el `getStaticPaths()` que permita que la URL sea `tusitio.dev/post/1`, `tusitio.dev/post/2` y `tusitio.dev/post/3`. Y en el código hemos puesto que obtenga la `id` usando `Astro.params` en un const. Después, hemos hecho que haga un fetch al post de la url en la API de jsonplaceholder. Y por último la API nos devuelve un código JSON y en un `<h1>`  ponemos el titulo del post y en un `<p>` el contenido del post.
