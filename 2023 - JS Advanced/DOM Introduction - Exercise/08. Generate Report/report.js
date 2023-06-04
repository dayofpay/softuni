function generateReport() {
    let tableStatus = {
        "employee": false,
        "department": false,
        "status": false,
        "dateHired": false,
        "benefits": false,
        "salary": false,
        "rating": false,
    };

    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    for (let i = 0; i < checkboxes.length; i++) {
        let checkbox = checkboxes[i];
        let checkboxName = checkbox.getAttribute("name");
        if (checkbox.checked) {
            tableStatus[checkboxName] = true;
        }
    }

    let employeesData = [];

    if (tableStatus["employee"] || tableStatus["deparment"] || tableStatus["status"] || tableStatus["dateHired"] || tableStatus["benefits"] || tableStatus["salary"] || tableStatus["rating"]) {
        let employeeRows = document.querySelectorAll("table tbody tr");

        for (let i = 0; i < employeeRows.length; i++) {
            let row = employeeRows[i];
            let rowData = {};
            if (tableStatus["employee"]) {
                rowData["employee"] = row.querySelector("td:nth-child(1)").innerText;
            }
            if (tableStatus["deparment"]) {
                rowData["deparment"] = row.querySelector("td:nth-child(2)").innerText;
            }
            if (tableStatus["status"]) {
                rowData["status"] = row.querySelector("td:nth-child(3)").innerText;
            }
            if (tableStatus["dateHired"]) {
                rowData["dateHired"] = row.querySelector("td:nth-child(4)").innerText;
            }
            if (tableStatus["benefits"]) {
                rowData["benefits"] = row.querySelector("td:nth-child(5)").innerText;
            }
            if (tableStatus["salary"]) {
                rowData["salary"] = row.querySelector("td:nth-child(6)").innerText;
            }
            if (tableStatus["rating"]) {
                rowData["rating"] = row.querySelector("td:nth-child(7)").innerText;
            }

            employeesData.push(rowData);
        }
    }

    console.log(employeesData);
    document.getElementById("output").value = JSON.stringify(employeesData, null, 2);
}
