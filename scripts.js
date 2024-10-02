function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  function downloadPDF() {
    window.location.href = 'path/to/your/file.pdf';
  }
  