async function solution() {
    let url = "http://localhost:3030/jsonstore/advanced/articles/list";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();
  
      for (let article of data) {
        let getExtraInfo = await fetch(
          `http://localhost:3030/jsonstore/advanced/articles/details/${article["_id"]}`
        );
  
        if (!getExtraInfo.ok) {
          throw new Error("Error");
        }
  
        const extraData = await getExtraInfo.json();
  
        let getSection = document.getElementById("main");
        let createAccordion = document.createElement("div");
  
        createAccordion.classList.add("accordion");
  
        createAccordion.innerHTML = `
          <div class="head">
              <span>${article["title"]}</span>
              <button class="button" data-id="${article["_id"]}">More</button>
          </div>
          <div class="extra" style="display: none;">
              <p>${extraData["content"]}</p>
          </div>
        `;
  
        getSection.appendChild(createAccordion);
      }
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  
    let buttons = document.getElementsByClassName("button");
  
    for (let button of buttons) {
      button.addEventListener("click", toggleContent);
    }
  
    function toggleContent(event) {
      let button = event.target;
      let extraElement = button.parentNode.nextElementSibling;
  
      if (extraElement.style.display === "none") {
        extraElement.style.display = "block";
        button.textContent = "Less";
      } else {
        extraElement.style.display = "none";
        button.textContent = "More";
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", solution);
  