function consultar() {
    document.getElementById("pepe").innerHTML = '<h1>formulario</h1>'
    + '<div class="mb-3">'
    + '<label for="nombre" class="form-label">Nombre</label>'
    + '<input type="text" class="form-control" id="nombre" placeholder="Ingrese sus nombres">'
    + '</div><div class="mb-3">'
    + '<label for="apellido" class="form-label">Apellido</label>'
    + '<input type="text" class="form-control" id="apellido" placeholder="Ingrese sus apellidos">'
    + '</div><div class="mb-3">'
    + '<label for="correo" class="form-label">Correo</label>'
    + '<input type="email" class="form-control" id="correo" placeholder="Ingrese su correo electronico">'
    + '</div><div class="mb-3">'
    + '<label for="telefono" class="form-label">Telefono</label>'
    + '<input type="number" class="form-control" id="telefono" placeholder="Ingrese su numero de telefono">'
    + '</div><div class="mb-3">'
    + '<label for="contraseña" class="form-label">Contraseña</label>'
    + '<input type="password" class="form-control" id="contraseña" placeholder="Ingrese su contraseña">'
    + '</div>'
    + '<button class="btn btn-outline-danger" type="button" onclick="confirmarGuardado()">Guardar</button>';
}

function confirmarGuardado() {
    Swal.fire({
        title: "deseas guardar los datos?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "guardar",
        denyButtonText: `no guardar`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("guardado con exito!", "", "success");
            // You can add the code to handle the form data here.
        } else if (result.isDenied) {
            Swal.fire("informacion no guardada", "", "error");
        }
    });
}