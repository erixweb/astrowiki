---
layout: ../../layouts/DocLayout.astro
title: Routing en Astro
description: "Hoy en día crear rutas para tu web es facilísimo y Astro, no se queda atrás."
difficulty: medium
post_id: "5"
---

## Rutas estáticas

En Astro, existen las rutas estáticas. Las **rutas estáticas son automáticas** al crear un archivo .astro en la carpeta `/pages`. Por ejemplo: src/pages/index.astro → tuweb.dev/ o tambíen src/pages/about.astro &rarr; tuweb.dev/about.

No necesitas usar componentes como el `<Link />` para navegar, **puedes usar un anchor**. 
```tsx
<a href="/about">About</a>
```
## Rutas dinámicas

Si deseas usar rutas dinámicas, **simplemente debes crear un archivo con el nombre de los parámetros entre corchetes** (`[]`) y acabado en .astro &rarr; **[test].astro**.

Para acceder a los parámetros simplemente podemos usar **Astro.params**.

> **Astro** [name].astro
```astro  
---
const { name } = Astro.params // → Sinónimo de Astro.params.name
---

<h1>¡Bienvenido, {name}!</h1>
```

## Modo SSG

En caso de que tengas activado el output **static**, todas tus rutas deben ser generadas al compilar la aplicación. Por lo tanto, no habrá tanto dinamismo.

Si quieres crear una ruta dinámica, debes usar exportar la función `getStaticPaths()`.

> **Astro** /src/pages/idioma/[language].astro
```astro
---
export function getStaticPaths() {
  return [
    {params: {language: 'spanish'}},
    {params: {language: 'english'}},
    {params: {language: 'french'}},
  ];
}

const { language } = Astro.params 
---

<h1>¡Hablas {language}!</h1>
```

De esta manera, se crearan las rutas /idioma/spanish | /idioma/english | /idioma/french.
