---
layout: ../../layouts/DocLayout.astro
title: Markdown & Astro
description: "Astro es compatible con Markdown. Usando Markdown y Astro podrás crear tu blog con markdown sin la necesidad de escribir todo en HTML."
difficulty: hard
draft: true
---
Astro es compatible con Markdown. Usando Markdown y Astro podrás crear tu blog con markdown sin la necesidad de escribir todo en HTML.
Comenzemos desde lo fácil. En este ejemplo crearemos una página sin ningún estilo. Apenas un titulo y un pequeño contenido.

`src/pages/blog.md` 
```md
# Hola!
Este es mi blog con `Astro`.
Puedes usar todo tipo de etiquetas que Markdown soporte. 
```

Solo con acceder a `tusitio.dev/blog`, estarás accendiendo al blog. En este blog se vera tu contenido como se vería de normal con la excepción de que # seria un h1 y la palabra Astro estaría con una letra diferente a el resto del contenido.

Ahora vamos a hacer que nuestro blog tenga un estilo, un titulo, y incluso una estructura. Para eso creamos un layout y por ejemplo haríamos lo siguiente:

`src/layouts/Milayout.astro`
```tsx
---
import 'estilos.css'

const { frontmatter } = Astro.props
---
<h1>
    {frontmatter.titulo}
</h1>
<p>
    {frontmatter.descripcion}
</p>
<!-- Contenido -->

<slot />
``` 

Y ahora en un archivo markdown haríamos lo siguiente:

`src/pages/blog.md`
```mdx
---
layout: ../../layouts/DocLayout.astro
title: Mi blog
descripcion: Este es mi primer blog.
---

# Hola!

Este es mi blog con `Astro`.
Puedes usar todo tipo de etiquetas que Markdown soporte. 
```  

Ahora nuestra página quedaría algo tal que: primero iría el título que hemos especificado en las etiquetas script del lado del servidor, despues la descripción y por último, el contendio fuera de las etiquetas script de Astro. Además de eso, en la segunda línea de `src/layouts/Milayout.astro` hemos especificado que se utilizarán los estilos del archivo `estilos.css`.