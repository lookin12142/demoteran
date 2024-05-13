function showModal(animal) {
    // Obtener el contenedor modal
    var modal = document.getElementById("modal");
  
    // Obtener el contenedor de contenido modal
    var modalContent = document.getElementById("modalContent");
  
    // Mostrar el modal
    modal.style.display = "block";
  
    // Definir el contenido del modal basado en el animal seleccionado
    var modalHTML = `
      <div class="modal-header">
        <h2>Información de la ${animal}</h2>
        <button class="close-button" onclick="closeModal()">X</button>
      </div>
      <div class="modal-body">
        <form>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required>
      
          <label for="edad">Edad:</label>
          <input type="number" id="edad" name="edad" required>
      
          <label for="raza">Raza:</label>
          <input type="text" id="raza" name="raza">
        </form>
      </div>
    `;
  
    // Insertar el contenido en el contenedor modal
    modalContent.innerHTML = modalHTML;
  
    // Agregar la clase 'show' al contenedor del animal correspondiente
    var animalContainers = document.querySelectorAll('.animal-container');
    for (var i = 0; i < animalContainers.length; i++) {
      var container = animalContainers[i];
      if (container.classList.contains(animal)) {
        container.classList.add('show');
      } else {
        container.classList.remove('show');
      }
    }
  }
  
  
  function closeModal() {
    // Ocultar el modal al hacer clic en el botón de cerrar (X)
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }