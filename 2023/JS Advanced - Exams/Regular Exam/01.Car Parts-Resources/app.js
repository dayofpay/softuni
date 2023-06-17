window.addEventListener('load', solve);

function solve() {
  const nextButton = document.getElementById('next-btn');
  const infoList = document.querySelector('.info-list');
  const confirmList = document.querySelector('.confirm-list');
  const completeImg = document.getElementById('complete-img');
  const completeText = document.getElementById('complete-text');
  let carModel, carYear, partName, partNumber, condition;

  nextButton.addEventListener('click', function (event) {
    event.preventDefault();

    carModel = document.getElementById('car-model').value;
    carYear = document.getElementById('car-year').value;
    partName = document.getElementById('part-name').value;
    partNumber = document.getElementById('part-number').value;
    condition = document.getElementById('condition').value;

    if (carModel && carYear && partName && partNumber && condition && carYear >= 1980 && carYear <= 2023) {
      const listItem = document.createElement('li');
      listItem.classList.add('part-content');
      listItem.innerHTML = `
        <article>
          <p>Car Model: ${carModel}</p>
          <p>Car Year: ${carYear}</p>
          <p>Part Name: ${partName}</p>
          <p>Part Number: ${partNumber}</p>
          <p>Condition: ${condition}</p>
        </article>
      `;
      infoList.appendChild(listItem);

      document.getElementById('car-model').value = '';
      document.getElementById('car-year').value = '';
      document.getElementById('part-name').value = '';
      document.getElementById('part-number').value = '';
      document.getElementById('condition').value = '';
      nextButton.disabled = true;

      const editButton = document.createElement('button');
      editButton.setAttribute('class', 'edit-btn');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', function () {
        const listItem = this.parentNode;

        if (listItem) {
          const article = listItem.querySelector('article');
          const carModelElement = article.querySelector('p:nth-child(1)');
          const carYearElement = article.querySelector('p:nth-child(2)');
          const partNameElement = article.querySelector('p:nth-child(3)');
          const partNumberElement = article.querySelector('p:nth-child(4)');
          const conditionElement = article.querySelector('p:nth-child(5)');

          const carModelValue = carModelElement.textContent.split(': ')[1];
          const carYearValue = carYearElement.textContent.split(': ')[1];
          const partNameValue = partNameElement.textContent.split(': ')[1];
          const partNumberValue = partNumberElement.textContent.split(': ')[1];
          const conditionValue = conditionElement.textContent.split(': ')[1];

          document.getElementById('car-model').value = carModelValue;
          document.getElementById('car-year').value = carYearValue;
          document.getElementById('part-name').value = partNameValue;
          document.getElementById('part-number').value = partNumberValue;
          document.getElementById('condition').value = conditionValue;

          infoList.removeChild(listItem);
          nextButton.disabled = false;
        }
      });

      const continueButton = document.createElement('button');
      continueButton.setAttribute('class', 'continue-btn');
      continueButton.textContent = 'Continue';
      continueButton.addEventListener('click', function () {
        const listItem = this.parentNode;

        if (listItem) {
          const article = listItem.querySelector('article').cloneNode(true);

          const confirmItem = document.createElement('li');
          confirmItem.classList.add('part-content');
          confirmItem.appendChild(article);

          const confirmButton = document.createElement('button');
          const cancelButton = document.createElement('button');
          confirmButton.setAttribute('class', 'confirm-btn');
          cancelButton.setAttribute('class', 'cancel-btn');
          confirmButton.textContent = 'Confirm';
          cancelButton.textContent = 'Cancel';

          confirmButton.addEventListener('click', function () {
            const listItem = this.parentNode;

            if (listItem) {
              confirmList.removeChild(listItem);

              if (confirmList.children.length === 0) {
                completeImg.style.visibility = 'visible';
                completeText.textContent = 'Part is Ordered!';
                nextButton.disabled = false;
              }
            }
          });

          cancelButton.addEventListener('click', function () {
            const listItem = this.parentNode;

            if (listItem) {
              confirmList.removeChild(listItem);
              nextButton.disabled = false;
            }
          });

          confirmItem.appendChild(confirmButton);
          confirmItem.appendChild(cancelButton);

          confirmList.appendChild(confirmItem);

          infoList.innerHTML = '';
        }
      });

      listItem.appendChild(editButton);
      listItem.appendChild(continueButton);
    }
  });
}
