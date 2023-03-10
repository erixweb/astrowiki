---
layout: ../../layouts/DocLayout.astro
title: Componentes en Astro 馃殌
description: "En Astro los componentes son solo HTML, lo 煤nico que necesitas es conocimiento en HTML y a partir de ah铆 puedes crear tu componente de Astro."
difficulty: easy
draft: true
---
En Astro los componentes son solo HTML, lo 煤nico que necesitas es conocimiento en HTML y a partir de ah铆 puedes crear tu componente de Astro. La sintaxis est谩 hecha de una forma en la que se parece a JSX o HTML.

La estructura de los componentes de Astro es la siguiente:
```
---
// Script en JavaScript ejecutado en el servidor
---
<!-- C贸digo HTML -->
```
Por ejemplo vamos a crear un componente llamado `Button` en el que usando Astro.props vamos a hacer que necesite una propiedad llamada `name` que sera el nombre del bot贸n.

`src/components/Button.astro` 
```
---
export interface Props {
    name: string
}

const { name } = Astro.props
---

<button>{name}</button>
```

En este c贸digo hemos definido que las propiedades (Props) posibles son `name`. En la interfaz Props podr铆as definir mas de una propiedad (la separaci贸n es sin comas, no hace falta ningun tipo de separaci贸n, simplemente un salto de linea servir谩). Despu茅s de definir la propiedad name, en el c贸digo html, fuera de los ---, hemos hecho que la propiedad name se encuentre dentro de un bot贸n.

`src/pages/index.astro`
```
---
import Button from '../components/Button.astro'
---
<h1>Haz click a este bot贸n</h1>
<Button 
    name="Click me"
/>
```  
Este c贸digo es sinonimo de `<button>Click me</button>`, en este ejemplo los componentes son poco 煤tiles pero podr谩n ser 煤tiles cuando por ejemplo, necesitas hacer una tarjeta para cada uno de tus posts. En ese caso podr铆amos definir una propiedad llamada titulo y otra llamada descripci贸n.

`src/components/Card.astro`
```
---
export interface Props {
    titulo: string
    descripcion: string
}

const { titulo, descripcion } = Astro.props
---
<li>
    <h2>{titulo}</h2>
    <p>
        {descripcion}
    </p>
</li>
```
`src/pages/index.astro`

```
---
import Card from '../components/Card.astro'
---

<h1>Posts</h1>
<Card 
    titulo= "Mi primer post"
    descripcion= "Este es mi primer post en el que explico qui茅n soy."
/>
<Card 
    titulo= "Mi nuevo proyecto"
    descripcion= "He creado un nuevo proyecto que me gustar铆a que vieseis."
/>
```

Este c贸digo nos ha hecho ahorrarnos lineas y hacer un c贸digo mas limpio. Adem谩s hemos podido reutilizar el componente dos veces.

En Astro existe el elemento `<slot />` en el que simplemente renderiza el HTML que hay dentro de una etiqueta. Es decir puede actuar como un div si lo usas de la siguiente forma:

`src/components/Button.astro`
```
<button>
    <slot />
</button>
```

`src/pages/index.astro`
```
---
import Button from '../components/Button.astro'
---

<Button>
    Hola mundo
<Button/>
```

Este codigo lo que hara es crear un bot贸n con `Hola mundo` de nombre. Es decir, es sin贸nimo de `<button>Hola mundo</button>`