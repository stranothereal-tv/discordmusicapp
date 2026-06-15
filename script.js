const form = document.querySelector('#waitlist-form');
const thanksPanel = document.querySelector('#thanks-panel');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.hidden = true;
  thanksPanel.hidden = false;
  thanksPanel.focus?.();
});
