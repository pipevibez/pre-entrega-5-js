class ServicioWeb {
  constructor(id, nombre, categoria, precio, cuposDisponibles) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.cuposDisponibles = cuposDisponibles;
  }

  aplicarDescuento(porcentaje) {
    if (porcentaje > 0 && porcentaje <= 100) {
      let descuento = this.precio * porcentaje / 100;
      this.precio = this.precio - descuento;

      console.log("Se aplicó un descuento del " + porcentaje + "% a " + this.nombre);
      console.log("Nuevo precio: USD " + this.precio);
    } else {
      console.log("El porcentaje ingresado no es válido.");
    }
  }

  reservarCupo(cantidad) {
    if (cantidad > 0 && cantidad <= this.cuposDisponibles) {
      this.cuposDisponibles = this.cuposDisponibles - cantidad;

      console.log("Se reservaron " + cantidad + " cupo(s) para " + this.nombre);
      console.log("Cupos disponibles restantes: " + this.cuposDisponibles);
    } else {
      console.log("No hay cupos suficientes para " + this.nombre);
    }
  }

  mostrarInformacion() {
    console.log(
      "ID: " + this.id +
      " | Servicio: " + this.nombre +
      " | Categoría: " + this.categoria +
      " | Precio: USD " + this.precio +
      " | Cupos disponibles: " + this.cuposDisponibles
    );
  }
}

const landingPage = new ServicioWeb(
  1,
  "Landing page",
  "Diseño y desarrollo",
  350,
  5
);

const sitioInstitucional = new ServicioWeb(
  2,
  "Sitio institucional",
  "Desarrollo web",
  650,
  3
);

const tiendaOnline = new ServicioWeb(
  3,
  "Tienda online",
  "Ecommerce",
  900,
  2
);

const servicios = [
  landingPage,
  sitioInstitucional,
  tiendaOnline
];

console.log("Lista inicial de servicios:");
for (const servicio of servicios) {
  servicio.mostrarInformacion();
}

console.log("Aplicando descuento:");
landingPage.aplicarDescuento(10);

console.log("Reservando cupos:");
sitioInstitucional.reservarCupo(1);
tiendaOnline.reservarCupo(3);

console.log("Lista final de servicios:");
for (const servicio of servicios) {
  servicio.mostrarInformacion();
}

alert("Proceso finalizado. Revisá la consola para ver los objetos creados y sus cambios.");