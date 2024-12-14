let personas = [];

function crearTabla() {
  const tablaDiv = document.getElementById("tablaResultado");

  let tabla = "<table class='table table-bordered'><thead><tr><th>Nombre</th><th>Apellidos</th><th>Edad</th><th>Correo</th><th>Nacionalidad</th><th>Número</th></tr></thead><tbody>";

  personas.forEach(persona => {
    tabla += `<tr>
                <td>${persona.nombre}</td>
                <td>${persona.apellidos}</td>
                <td>${persona.edad}</td>
                <td>${persona.correo}</td>
                <td>${persona.nacionalidad}</td>
                <td>${persona.numero}</td>
              </tr>`;
  });

  tabla += "</tbody></table>";
  
  tablaDiv.innerHTML = tabla;
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  if (formulario.checkValidity() === false) {
    event.stopPropagation();
  } else {
    const edad = document.getElementById('validationDefaultUsername').value;
    const nacionalidad = document.getElementById('validationDefault04').value;

    if (edad < 18) {
      alert("Debes ser mayor de 18 años para completar este formulario.");
      return;
    }

    if (nacionalidad !== "Peruano") {
      alert("Solo se permite la nacionalidad Peruana.");
      return;
    }
    const datos = {
      nombre: document.getElementById('validationDefault01').value,
      apellidos: document.getElementById('validationDefault02').value,
      edad: edad,
      correo: document.getElementById('validationDefault03').value,
      nacionalidad: nacionalidad,
      numero: document.getElementById('validationDefault05').value
    };

    personas.push(datos);

    crearTabla();
  }

  formulario.classList.add('was-validated');
});
