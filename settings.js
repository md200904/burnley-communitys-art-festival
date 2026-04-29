const FONT_KEY = 'bca-site-font';

document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('font-select');
  if (!select) return;

  const currentFont = localStorage.getItem(FONT_KEY);
  if (currentFont) {
    for (const option of select.options) {
      if (option.value === currentFont) {
        option.selected = true;
        break;
      }
    }
  }

  select.addEventListener('change', () => {
    const chosenFont = select.value;
    localStorage.setItem(FONT_KEY, chosenFont);
    document.body.style.fontFamily = chosenFont;
  });
});
