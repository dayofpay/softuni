function solution() {
    let apiEndPoint = "http://localhost:3030/jsonstore/collections/students";
    let form = document.getElementById('form');
    let notification = document.querySelector('.notification');
  
    form.addEventListener('submit', submitEvent);
  
    async function submitEvent(event) {
      event.preventDefault();
  
      let getFirstName = document.getElementsByName('firstName')[0].value;
      let getLastName = document.getElementsByName('lastName')[0].value;
      let getFacultyNumber = document.getElementsByName('facultyNumber')[0].value;
      let getGrade = Number(document.getElementsByName('grade')[0].value);
  
      if (getFirstName === '' || getLastName === '' || getFacultyNumber === '' || isNaN(getGrade)) {
        notification.textContent = 'Invalid input!';
        return;
      }
  
      let student = {
        firstName: getFirstName,
        lastName: getLastName,
        facultyNumber: getFacultyNumber,
        grade: getGrade,
      };
  
      try {
        let response = await fetch(apiEndPoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(student),
        });
  
        if (!response.ok) {
          throw new Error(response.statusText);
        }
  
        clearForm();
        notification.textContent = 'Student created successfully.';
        setTimeout(() => {
          notification.textContent = '';
        }, 2000);
      } catch (error) {
        console.log(error);
        notification.textContent = 'Error creating student.';
      }
    }
  
    async function loadStudents() {
      let tableBody = document.querySelector('#results tbody');
      tableBody.innerHTML = '';
  
      try {
        let response = await fetch(apiEndPoint);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
  
        let students = await response.json();
        for (let studentId in students) {
          let student = students[studentId];
          let row = document.createElement('tr');
          row.innerHTML = `
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.facultyNumber}</td>
            <td>${student.grade.toFixed(2)}</td>
          `;
          tableBody.appendChild(row);
        }
      } catch (error) {
        console.log(error);
        notification.textContent = 'Error loading students.';
      }
    }
  
    function clearForm() {
      document.getElementsByName('firstName')[0].value = '';
      document.getElementsByName('lastName')[0].value = '';
      document.getElementsByName('facultyNumber')[0].value = '';
      document.getElementsByName('grade')[0].value = '';
    }
  
    loadStudents();
  }
  
  solution();
  