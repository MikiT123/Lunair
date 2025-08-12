document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleThemeBtn');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
