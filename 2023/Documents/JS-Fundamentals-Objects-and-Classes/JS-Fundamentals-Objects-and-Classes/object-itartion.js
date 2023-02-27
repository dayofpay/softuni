let info = {
    firstName: 'Pesho',
    lastName: 'Petrov',
    age: 28,
    eyeColor: 'brown',
    isMale: true,
};

// iterate values
for (const value of Object.values(info)) {
    console.log(value);
}

// iterate keys
for (const key of Object.keys(info)) {
    console.log(`${key} - ${info[key]}`);
}
