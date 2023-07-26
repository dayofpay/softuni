export function updateNav() {
    const userNav = document.getElementById("memberHeader");
    const guestNav = document.getElementById("guestHeader");
  
    if (sessionStorage.getItem("user")) {
      userNav.style.visibility = "visible";
      guestNav.style.visibility = "hidden";
    } else {
      userNav.style.visibility = "hidden"
      guestNav.style.visibility = "visible";
    }

  }


export function _debugger(message){
    console.info(`[I] Debug Message - ${message}`)
}

export const getRootElement = document.getElementsByTagName('main')[0];