---
layout: ../../layouts/DocLayout.astro
title: Tipos de renderizado 🏝️
description: "Astro nos permite compilar nuestra aplicación en el cliente, servidor o al desplegarla."
difficulty: easy
post_id: "8"
---

## Renderizado en el cliente

Astro nos permite cargar sus componentes en el dispositivo del usuario.

### Integración

Si queremos hacer que los componentes carguen en el cliente por defecto, debemos incluir en `astro.config.mjs` este código:

```js
export default defineConfig({
	output: "client",
})
```

### Efectos positivos

1. ✅ Efectivo para disminuir costes en el servidor
2. ✅ Rápido en ordenadores y dispositivos de alto rendimiento

## Efectos negativos

1. ❌ En dispositivos de bajo rendimiento puede hacer la carga de la página MUY lenta
2. ❌ Problemas de compatibilidad según la versión del navegador
