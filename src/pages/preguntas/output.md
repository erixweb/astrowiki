---
layout: ../../layouts/DocLayout.astro
title: Tipos de renderizado 🏝️
description: "Astro nos permite compilar nuestra aplicación en el cliente, servidor o al desplegarla."
difficulty: easy
post_id: "8"
---

## Renderizado estático

Astro nos permite convertir sus componentes a HTML al compilar la aplicación.

### Integración

Si queremos hacer que los componentes carguen en `build-time` por defecto, debemos incluir en `astro.config.mjs` este código:

```js
export default defineConfig({
	output: "static",
})
```

### Efectos positivos

1. ✅ Efectivo para disminuir costes en el servidor
2. ✅ Rápido en ordenadores y dispositivos de alto rendimiento

### Efectos negativos

1. ❌ Si se usa JavaScript, en dispositivos de bajo rendimiento puede hacer la carga de la página MUY lenta
2. ❌ Problemas de compatibilidad según la versión del navegador

## Renderizado en el servidor

Así podemos hacer que por defecto los componentes carguen en el servidor:

```js
export default defineConfig({
	output: "server",
})
```

### Efectos positivos

1. ✅ Hace más rápida la experiencia en móvil y tablets.
2. ✅ Que no se use JavaScript soluciona la mayoría de problemas de compatibilidad.

### Efectos negativos

1. ❌ Aumenta la carga en el servidor.
2. ❌ Si la carga aumenta mucho, puede haber una gran latencia.