function start(data, criteria) {
    let employees = JSON.parse(data);
    let getCriteriaData = criteria.split('-');
    let number = 0;

    for (let startIndex = 0; startIndex < employees.length; startIndex++) {
        if (getCriteriaData[0] === 'all') {
            console.log(`${number}. ${employees[startIndex]["first_name"]} ${employees[startIndex]["last_name"]} - ${employees[startIndex]["email"]}`);
            number++;
        } else if (getCriteriaData[0] !== 'all' && employees[startIndex][getCriteriaData[0]] === getCriteriaData[1]) {
            console.log(`${number}. ${employees[startIndex]["first_name"]} ${employees[startIndex]["last_name"]} - ${employees[startIndex]["email"]}`);
            number++;
        }
    }
}

start('[{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"}, {"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "null","gender": "Female"}, {"id": "3","first_name": "Evanne","last_name": "Maldin","email": "null","gender": "Male"}, {"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"}]', 'gender-Female');