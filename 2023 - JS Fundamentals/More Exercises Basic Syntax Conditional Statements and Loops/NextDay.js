function init(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);
    return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(1) + '-' + date.getDate().toString().padStart(1)
}


console.log(init(2020, 3, 24));
