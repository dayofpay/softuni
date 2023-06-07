function lockedProfile() {
    let profiles = document.getElementsByClassName('profile');
  
    for (let x = 0; x < profiles.length; x++) {
      let getButton = profiles[x].getElementsByTagName('button')[0];
      getButton.addEventListener('click', clickButton);
    }
  
  
  function clickButton(e) {
    let profile = e.target.parentNode;
    let lockInput = profile.querySelector('input[value="lock"]');
    let getButton = profile.querySelector('button');
    if (getButton.innerText === 'Hide it') {
      getButton.disabled = true;
      let divElements = profile.getElementsByTagName('div');
      for (let i = 0; i < divElements.length; i++) {
        divElements[i].style.display = 'none';
      }
    }

  
    if (!lockInput.checked && getButton.innerText === "Show more") {
        // Unlocked
        let divElements = profile.getElementsByTagName('div');
        for (let i = 0; i < divElements.length; i++) {
          divElements[i].style.display = 'inline';
        }
        getButton.innerText = "Hide it"
        console.log(getButton);
      }
      
    else{
        // Locked


    }
  }
  
}