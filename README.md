# Pre-Entrega 5 - Instanciando Objetos

Proyecto realizado para la quinta pre-entrega del curso JavaScript Flex.

## Descripción

Este proyecto continúa la línea del gestor de servicios web trabajado en entregas anteriores.

En esta entrega se implementa una estructura basada en clases y objetos para representar servicios reales dentro de un simulador. Cada servicio cuenta con propiedades propias y métodos que permiten modificar o informar su estado.

El objetivo principal es consolidar el modelado de datos usando JavaScript moderno, clases, constructores, propiedades, métodos e instancias creadas con `new`.

## Funcionalidades

- Define una clase llamada `ServicioWeb`.
- Utiliza un constructor para inicializar las propiedades de cada servicio.
- Crea objetos reales usando la palabra clave `new`.
- Trabaja con al menos tres instancias diferentes.
- Guarda las instancias dentro de un array.
- Recorre el array con `for...of`.
- Muestra la información de cada servicio en consola.
- Aplica un descuento sobre el precio de un servicio.
- Reserva cupos disponibles de un servicio.
- Valida si hay cupos suficientes antes de modificar el estado.
- Muestra los cambios finales en consola.

## Clase principal

### `ServicioWeb`

La clase representa un servicio ofrecido dentro de un proyecto web.

## Propiedades utilizadas

Cada objeto creado a partir de la clase `ServicioWeb` contiene las siguientes propiedades:

- `id`
- `nombre`
- `categoria`
- `precio`
- `cuposDisponibles`

## Métodos utilizados

### `aplicarDescuento(porcentaje)`

Recibe un porcentaje, calcula el descuento correspondiente y modifica el precio del servicio.

### `reservarCupo(cantidad)`

Recibe una cantidad de cupos a reservar. Si hay disponibilidad suficiente, descuenta esa cantidad de los cupos disponibles.

### `mostrarInformacion()`

Muestra en consola la información completa del servicio.

## Instancias creadas

Se crean tres objetos reales usando la palabra clave `new`:

- `landingPage`
- `sitioInstitucional`
- `tiendaOnline`

## Tecnologías utilizadas

- HTML5
- JavaScript

## Conceptos aplicados

- Clases.
- Constructor.
- Uso de `this`.
- Instanciación de objetos con `new`.
- Propiedades.
- Métodos.
- Condicionales `if` y `else`.
- Arrays.
- Recorrido con `for...of`.
- Variables con `const` y `let`.
- Salida de datos con `console.log()`.
- Mensaje final con `alert()`.
- Vinculación de JavaScript externo con `defer`.

## Estructura del proyecto

```text
pre-entrega-5-js/
├── index.html
├── main.js
└── README.md
```

## Autor

Andrés Felipe Villarreal