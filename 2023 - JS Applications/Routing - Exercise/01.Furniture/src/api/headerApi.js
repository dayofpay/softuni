export function setHeader(item) {
    const header = document.querySelector('header');
    const user = JSON.parse(sessionStorage.getItem("user"));
  
    const links = header.querySelectorAll('a');
    for (const link of links) {
      if (link.classList.contains("active") && item !== link.textContent) {
        link.classList.remove("active");
      }

      if(link.textContent === item){
        link.classList.add('active');
      }
    }
  }
  