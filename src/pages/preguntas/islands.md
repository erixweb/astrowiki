---
layout: ../../layouts/DocLayout.astro
title: Islands 🏝️
description: "El concepto de las Islas consiste en que la página se renderice en el servidor y solo se use el JavaScript necesario."
difficulty: easy
post_id: "3"
---

Por defecto, cuando creas tu proyecto de Astro, **empiezas con CERO JavaScript**. Las islas, lo que **permiten es que puedas añadir interactividad** a tu página sin la necesidad de que todos los componentes se rendericen en el servidor. Solo se renderizan los necesarios.

A esto se le llama **Partial hydration** (Hidratación parcial). 

En el ejemplo de abajo, tenemos un archivo JSX de React y un archivo de Astro. Para que podamos usar JavaScript, debemos añadirle el atributo **client:load**.

> **React** components/button.jsx
```jsx

export default function Button () {
    function handleClick () {
        console.log("Hello world")
    }

    return (
        <button onclick={handleClick}>
            ¡Click!
        </button>
    )
}

```

> **Astro** pages/index.astro

```astro
---
import Button from "/components/button.jsx"
---

<div>
    <Button client:load />
</div>
```