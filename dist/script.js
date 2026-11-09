const privacy = document.querySelector('#privacy');
for (const id of ['privacy-open', 'privacy-footer']) {
  document.getElementById(id)?.addEventListener('click', () => privacy.showModal());
}
document.querySelector('.dialog-close')?.addEventListener('click', () => privacy.close());
privacy?.addEventListener('click', event => { if (event.target === privacy) privacy.close(); });
document.querySelectorAll('[data-interest]').forEach(link => {
  link.addEventListener('click', () => { document.querySelector('#interes').value = link.dataset.interest; });
});
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelector('form')?.addEventListener('submit', () => {
  const button = document.querySelector('.submit');
  button.textContent = 'Enviando solicitud…';
  button.disabled = true;
  setTimeout(() => { button.textContent = 'Enviar solicitud ↗'; button.disabled = false; }, 15000);
});
window.addEventListener('pageshow', () => {
  const button = document.querySelector('.submit');
  if (button) { button.textContent = 'Enviar solicitud ↗'; button.disabled = false; }
});
