alert ("Bienvenido a Watch Argentina");
// Establecimiento de la función "datosCliente" para saber los datos del comprador y de entrega
//momentáneamente se ingresa esa información por Pompt hasta que sepamos cómo incluir eso en el HTML o sea que el submit de un formulario de datos se asigne a los objetos
function datoscliente (nombre, apellido, celular, direccion, localidad, codigopostal) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.celular = celular;
    this.direccion = direccion;
    this.localidad = localidad;
    this.codigopostal = codigopostal;
}

// Pido datos al cliente y ejecuto función para validar su ingreso
let nombre = prompt ("Ingrese su nombre");
function validardatos(nombre) {
    if (nombre = "") {
        alert ("ingrese un nombre válido");
    }
}
let apellido = prompt ("Ingrese su apellido");
function validardatos(apellido) {
    if (apellido = "") {
        alert ("Ingrese un apellido válido");
    }
}
let celular = prompt ("Ingrese su número de teléfono móvil");
function validardatos(celular) {
    if ((celular = "") || (celular != Number)) {
        alert ("Ingrese un número de celular válido");
    }
}
let direccion = prompt ("Ingrese su dirección");
function validardatos(direccion) {
    if (direccion = "") {
        alert ("Ingrese una dirección válida");
    }
}
let localidad = prompt ("Ingrese su localidad");
function validardatos(localidad) {
    if (localidad = "") {
        alert ("Ingrese una localidad válida");
    }
}
let codigopostal = prompt ("Ingrese su código postal");
function validardatos(codigopostal) {
    if ((codigopostal = "") || (codigopostal != Number)) {
        alert ("Ingrese un número de código postal válido");
    }
}

// pido al usuario las cantidades
let qSmartwatch = parseInt (prompt("Ingrese cantidad de Smartwatch 5000"));
let qApplewatch = parseInt (prompt ("Ingrese cantidad de Apple Watch"));
let qRider = parseInt (prompt ("Ingrese cantidad de Rider"));
let qRolexDeep = parseInt (prompt ("Ingrese cantidad de Rolex Deep"));


// Establecimiento de la función "producto" con su código, descripción y precio
function producto (codigo, descripcion, precio) {
    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
}
// determino los productos en valores globales
const producto1 = new producto (1, "Smartwatch", 6000);
const producto2 = new producto (2, "Applewatch", 8000);
const producto3 = new producto (3, "Rider", 12000);
const producto4 = new producto (4, "Rolex Deep", 80000);

// establezco la función subtotal que consiste en precio * cantidad
let precio = 0;
let cantidad = parseint(cantidad);
const subtotal = (precio, cantidad) => {return precio * cantidad}

//precios
precioSmartwatch = 6000;
precioApplewatch = 8000;
precioRider = 12000;
precioRolexDeep = 80000;

//determino el total a pagar
function calcularTotal() {
if (qSmartwatch > 0) {
            let subtotalSmartwatch = subtotal (precioSmartwatch, qsmartwatch);
    } else {
        alert ("Debe ingesar cantidad. Si es cero, elija 0");
    }
if (qApplewatch > 0) {
        let subtotalApplewatch = subtotal (precioApplewatch, qApplewatch);
} else {
    alert ("Debe ingesar cantidad. Si es cero, elija 0");
}
if (qRider > 0) {
    let subtotalRider = subtotal (precioRider, qRider);
} else {
alert ("Debe ingesar cantidad. Si es cero, elija 0");
}
if (qRolexDeep > 0) {
    let subtotalRolexDeep = subtotal (precioRolexDeep, qRolexDeep);
} else {
alert ("Debe ingesar cantidad. Si es cero, elija 0");
}
let totalApagar = subtotalSmartwatch + subtotalApplewatch + subtotalRider + subtotalRolexDeep ; 
alert ("Su total a pagar es de" + " " + totalApagar);
}

//Texto para solicitar al usuario si quiere añadir más productos. Nótese que aún no hemos aprendido como aumentar la cantidad con + o - y ligarlo a un botón 
//(apenas lo aprendamos lo haré)
let continuarcompra = prompt("¿Desea incluir más productos en su pedido?");
while (continuarcompra != "SI") {
    alert ("Graciar por comprar en Watch Argentina");
    alert ("El total es de $" + " " + totalApagar);

while (continuarcompra = "NO" || "no") {
    alert ("Será redireccionado al carrito para aumentar cantidades")
}
}
