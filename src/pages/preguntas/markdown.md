---
layout: ../../layouts/DocLayout.astro
title: Markdown & Astro
description: "Astro es compatible con Markdown. Usando Markdown y Astro podrás crear tu blog con markdown sin la necesidad de escribir todo en HTML."
difficulty: hard
draft: true
---

Con Astro, ya **no tendrás que instalar ningún tipo de dependencia** para poder utilizar Markdown y hacer tu blog. Ya está integrado y simplemente debemos crear en `pages/` un archivo con la extensión de markdown `.md`.

`src/pages/blog.md` 
```md
# Hola!
Este es mi blog con `Astro`.
Puedes usar todo tipo de etiquetas que Markdown soporte. 
```

Al acceder a esta página, no tendrá sque escribir `/blog.md` en el navegador, ya que **Astro elimina automáticamente la extensión del archivo**. Simplemente puedes escribir **/blog**

Ahora vamos a hacer que nuestro blog tenga un estilo, un titulo, y incluso una estructura. Para eso creamos un layout y por ejemplo haríamos lo siguiente:

`src/layouts/Milayout.astro`
```astro
---
import '/estilos.css'

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