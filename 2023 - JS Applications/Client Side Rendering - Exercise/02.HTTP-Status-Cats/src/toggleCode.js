export function toggleStatusCode(e) {
    const button = e.target;
    const statusDiv = button.nextElementSibling;
    statusDiv.style.visibility = statusDiv.style.visibility === 'hidden' ? 'visible' : 'hidden';
    button.textContent = statusDiv.style.visibility === 'hidden' ? 'Show status code' : 'Hide status code';
  }
  