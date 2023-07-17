export function toggleStatusCode(e) {
    const button = e.target;
    const statusDiv = button.nextElementSibling;
    const statusVisibility = getComputedStyle(statusDiv).visibility;
  
    statusDiv.style.visibility = statusVisibility === 'hidden' ? 'visible' : 'hidden';
    button.textContent = statusDiv.style.visibility === 'hidden' ? 'Show status code' : 'Hide status code';
  }
  