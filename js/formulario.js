function mostrarFormulario() {
    const formContainer = document.getElementById('formContainer');

    // Crear el formulario
    formContainer.innerHTML = `
        <form id="miFormulario" onsubmit="return mostrarAlerta();">
            <div class="form-group">
                <label for="nombre">A nombre de:</label>
                <input type="text" class="form-control" id="nombre" required>
            </div>
            <div class="form-group">
                <label for="apellido">Apellido:</label>
                <input type="text" class="form-control" id="apellido" required>
            </div>
            <div class="form-group">
                <label for="correo">Correo:</label>
                <input type="email" class="form-control" id="correo" required>
            </div>
            <div class="form-group">
                <label for="telefono">Teléfono:</label>
                <input type="tel" class="form-control" id="telefono" required>
            </div>
            <div class="form-group">
                <label for="contraseña">Contraseña:</label>
                <input type="password" class="form-control" id="contraseña" required>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    `;

    // Mostrar el formulario
    formContainer.style.display = 'block';
}

function mostrarAlerta() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const contraseña = document.getElementById('contraseña').value;

    // Agregar una nueva fila a la tabla
    const tablaRegistros = document.getElementById('tablaRegistros').getElementsByTagName('tbody')[0];
    const nuevaFila = tablaRegistros.insertRow();
    
    nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${correo}</td>
        <td>${telefono}</td>
        <td>${contraseña}</td>
    `;

    // Muestra una alerta con SweetAlert2
    Swal.fire({
        title: 'Registro Agregado',
        text: 'Los detalles han sido agregados a la tabla.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });

    return false; // Evita que el formulario se envíe
}
