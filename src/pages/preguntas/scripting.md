---
layout: ../../layouts/DocLayout.astro
title: Scripting con Astro 🚀
description: "En Astro tienes dos etiquetas para usar JavaScript, una es Server-side y otra Client-side. La principal que todo el mundo usa para importar sus compoenentes es la que empieza y acaba con `---`, este ejemplo es el que esta del lado del servidor (Server-side). En el siguiente ejemplo lo que vamos a hacer es importar una tarjeta y crearla en el HTML."
difficulty: medium
draft: true
---
En Astro tienes dos etiquetas para usar JavaScript, una es Server-side y otra Client-side. La principal que todo el mundo usa para importar sus compoenentes es la que empieza y acaba con `---`, este ejemplo es el que esta del lado del servidor (Server-side). En el siguiente ejemplo lo que vamos a hacer es importar una tarjeta y crearla en el HTML.

`src/pages/index.astro`
```
---
import Card from '../components/Card.astro'
---

<h1>Mi tarjeta</h1>

<Card
    title=Hello
    description=World
/>
```

Si hicieses un fetch en estas etiquetas, el fetch se haría en el servidor, no en el cliente. Por tanto si queremos hacer un fetch en el cliente tendremos que usar la siguiente etiqueta.
La siguiente etiqueta para hacer scripting se usa del lado del cliente (Client-side). Esta es la etiqueta que utilizaremos para añadir interactivdad, debug en el cliente, etc.
La etiqueta es `<script>`. En el siguiente ejemplo vamos a detectar cuando se cliqueé un botón y haremos un console.log("hello world").

```
<button>Click me</button>
<script>
document.querySelector("button").addEventListener("click", () => {
    console.log("Hello world")
})
</script> 
```
En Astro la etiqueta script puede tener varios cambios. Por defecto, las etiquetas script son procesadas y empaquetadas por Astro. Para evitar la empaquetación de el script, usamos `is:inline`. Como en el siguiente ejemplo:

```
<button>Click me</button>
<script is:inline>
document.querySelector("button").addEventListener("click", () => {
    console.log("Hello world")
})
</script> 
``` 

En Astro, también podemos usar archivos TypeScript. Como en el siguiente ejemplo:
```
<button>Click me</button>
<script src="/button.ts"></script>
``` 