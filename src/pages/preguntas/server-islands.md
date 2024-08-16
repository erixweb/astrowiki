---
layout: ../../layouts/DocLayout.astro
title: Islas del Servidor (Server Islands)
description: "Las islas del servidor (Server Islands) hacen posible que puedas hacer toda tu página estática y cachearla mientras puedes seleccionar componentes que no sean estáticos y se rendericen en el servidor."
difficulty: hard
post_id: "7"
---

Las islas del servidor (Server Islands) hacen posible que **puedas hacer toda tu página estática** y cachearla **mientras puedes crear componentes concretos que se rendericen en el servidor** y no sean estáticos.


Podemos hacer esto añadiendo **server:defer** a el componente del servidor.

Por ejemplo, imagínate que nuestra página apenas necesita usar el servidor y puede ser estática. Sin embargo, necesitamos hacer un componente que sea dinámico y detecte el país en el que se encuentra el usuario. 

## Ejemplo compatible con **Vercel**

> **Astro** pages/index.astro
```astro
---
import Country from "/components/country.astro"
---

<h1>Tienda online</h1>

<Country server:defer /> <!-- Primero se carga toda la página y después aparece este botón -->
```

> **Astro** components/country.astro
```astro
---
const country = Astro.request.headers.get("X-Vercel-IP-Country")
---
<button>Compra desde {country}</button> 
```

## Problema

Solo hay un problema con las Astro Islands. Cuando refrescamos la página, podemos ver que **nuestro componente del servidor parpadea**, esto es porque primero se renderiza el HTML estático y después se empieza a cargar el componente de forma asíncrona.

Esto se puede arreglar añadiendole un fallback. El fallback, se irá una vez se haya cargado el componente del servidor.

Lo importante es añadir el `slot="fallback"` al componente fallback.

Aquí arreglo el ejemplo de arriba:

> **Astro** pages/index.astro
```astro
---
import Country from "/components/country.astro"
import CountryFallback from "/components/country-fallback.astro"
---

<h1>Tienda online</h1>

<Country server:defer>
    <CountryFallback slot="fallback" /> <!-- Esto se muestra antes de que el componente Country cargue-->
</Country>
```

> **Astro** components/country-fallback.astro
```astro
<button>Compra desde ...</button> 
```

> **Astro** components/country.astro
```astro
---
const country = Astro.request.headers.get("X-Vercel-IP-Country")
---
<button>Compra desde {country}</button> 
```

## Beneficios

**Rendimiento**: Podrás hacer que toda tu página se cargue mendiante un cache mientras que solo una parte concreta use el servidor.

**Personalización**: Una página estática, de normal es igual para todos los usuarios. Sin embargo, con Astro Islands puedes hacer que algunas partes sean exclusivas para cada usuario.