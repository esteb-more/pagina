function showSection(sectionId) {
    // Oculta todas las secciones
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
      section.classList.remove('active');
    });
  
    // Muestra la sección seleccionada
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
  }