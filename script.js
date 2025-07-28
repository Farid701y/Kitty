function abrirCuaderno() {
  document.getElementById('portada').style.display = 'none';
  document.getElementById('paginaInterior').style.display = 'flex';
}

function cerrarCuaderno() {
  document.getElementById('paginaInterior').style.display = 'none';
  document.getElementById('portada').style.display = 'block';
}
