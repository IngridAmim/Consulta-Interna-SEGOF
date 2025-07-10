function openModal(id) {
  document.querySelectorAll('.modal-window').forEach(modal => modal.classList.remove('active'));
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
  }
}

function closeModal() {
  document.querySelectorAll('.modal-window').forEach(modal => modal.classList.remove('active'));
}

// Busca e filtro das unidades e divisões
const searchInput = document.getElementById('search');

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();

  const unitCards = document.querySelectorAll('.unit-card');

  unitCards.forEach(card => {
    const unitName = card.querySelector('h3').textContent.toLowerCase();

    const divisionButtons = card.querySelectorAll('.division-pill');
    let divisionMatch = false;

    divisionButtons.forEach(btn => {
      if (btn.textContent.toLowerCase().includes(filter)) {
        divisionMatch = true;
      }
    });
    

    if (unitName.includes(filter) || divisionMatch) {
      card.style.display = '';
      divisionButtons.forEach(btn => {
        if (btn.textContent.toLowerCase().includes(filter)) {
          btn.style.display = '';
        } else {
          btn.style.display = 'none';
        }
      });
    } else {
      card.style.display = 'none';
    }
  });
});
