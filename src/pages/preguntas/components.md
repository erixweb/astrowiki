---
layout: ../../layouts/DocLayout.astro
title: Componentes en Astro 🚀
description: "En Astro los componentes son solo HTML, lo único que necesitas es conocimiento en HTML y a partir de ahí puedes crear tu componente de Astro."
difficulty: easy
draft: true
---
En Astro los componentes son solo HTML, lo único que necesitas es conocimiento en HTML y a partir de ahí puedes crear tu componente de Astro. La sintaxis está hecha de una forma en la que se parece a JSX o HTML.

La estructura de los componentes de Astro es la siguiente:
```tsx
---
// Script en JavaScript ejecutado en el servidor
---
<!-- Código HTML -->
```
Por ejemplo vamos a crear un componente llamado `Button` en el que usando Astro.props vamos a hacer que necesite una propiedad llamada `name` que sera el nombre del botón.

`src/components/Button.astro` 
```tsx
---
export interface Props {
    name: string
}

const { name } = Astro.props
---

<button>{name}</button>
```

En este código hemos definido que las propiedades (Props) posibles son `name`. En la interfaz Props podrías definir mas de una propiedad (la separación es sin comas, no hace falta ningun tipo de separación, simplemente un salto de linea servirá). Después de definir la propiedad name, en el código html, fuera de los ---, hemos hecho que la propiedad name se encuentre dentro de un botón.

`src/pages/index.astro`
```
---
import Button from '../components/Button.astro'
---
<h1>Haz click a este botón</h1>
<Button 
    name="Click me"
/>
```  
Este código es sinonimo de `<button>Click me</button>`, en este ejemplo los componentes son poco útiles pero podrán ser útiles cuando por ejemplo, necesitas hacer una tarjeta para cada uno de tus posts. En ese caso podríamos definir una propiedad llamada titulo y otra llamada descripción.

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
    descripcion= "Este es mi primer post en el que explico quién soy."
/>
<Card 
    titulo= "Mi nuevo proyecto"
    descripcion= "He creado un nuevo proyecto que me gustaría que vieseis."
/>
```

Este código nos ha hecho ahorrarnos lineas y hacer un código mas limpio. Además hemos podido reutilizar el componente dos veces.

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

Este codigo lo que hara es crear un botón con `Hola mundo` de nombre. Es decir, es sinónimo de `<button>Hola mundo</button>`