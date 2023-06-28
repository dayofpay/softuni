function lockedProfile() {
    getData();
  
    async function getData() {
      let url = "http://localhost:3030/jsonstore/advanced/profiles";
  
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error");
        }
        const data = await response.json();
        let userData = data;
  
        // Create User Profile
        let userIterate = 1;
        for (let x in userData) {
            console.log(userData[x]);
          let getMain = document.createElement("div");
          getMain.innerHTML = `
            <img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user${userIterate}Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user${userIterate}Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user${userIterate}Username" value="${userData[x]["username"]}" disabled readonly />
            <div id="user${userIterate}HiddenFields" style="display: none">
                <hr>
                <label>Email:</label>
                <input type="email" name="user${userIterate}Email" value="${userData[x]["email"]}" disabled readonly />
                <label>Age:</label>
                <input type="text" name="user${userIterate}Age" value="${userData[x]["age"]}" disabled readonly />
            </div>
            <button>Show more</button>
            `;
  
          getMain.classList.add("profile");
          document.getElementById("main").appendChild(getMain);
  
          userIterate++;
        }
  
        // Add Functionality to every show more button
        let profiles = document.getElementsByClassName("profile");
  
        for (let x = 0; x < profiles.length; x++) {
          let getButton = profiles[x].getElementsByTagName("button")[0];
          getButton.addEventListener("click", clickButton);
        }
  
        function clickButton(event) {
          let profile = event.target.parentNode;
          let lockInput = profile.querySelector('input[name^="user"][value="lock"]');
          let hiddenFields = profile.querySelector('[id^="user"][id$="HiddenFields"]');
          let getButton = profile.querySelector("button");
  
          if (getButton.innerText === "Hide it") {
            hiddenFields.style.display = "none";
            getButton.innerText = "Show more";
          } else if (!lockInput.checked && getButton.innerText === "Show more") {
            hiddenFields.style.display = "block";
            getButton.innerText = "Hide it";
          }
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }
  }
  