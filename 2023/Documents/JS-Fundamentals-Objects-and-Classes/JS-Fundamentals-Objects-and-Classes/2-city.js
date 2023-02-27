function printCity(city) {
    for (const key of Object.keys(city)) {
        console.log(`${key} -> ${city[key]}`);
    }
}

printCity({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);
