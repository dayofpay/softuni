import { generateBreedId } from "./idHandler";

function handleAddBreed(req, res) {
    let formData = '';

    req.on('data', (chunk) => {
        formData += chunk;
    });

    req.on('end', () => {
        const parsedData = querystring.parse(formData);
        const catData = fs.readFileSync('./data/breeds.json');
        let breedJSON = JSON.parse(catData);
        console.log(formData);
        const newBreedId = generateBreedId(breedJSON);

        const newBreed = {
            id: newBreedId,
            breed: parsedData.breed,
        };


        breedJSON.push(newBreed);

        fs.writeFileSync('./data/breeds.json', JSON.stringify(breedJSON));
        res.writeHead(302, { Location: '/' }); // Redirect to the home page
        res.end();
    });
}


module.exports = handleAddBreed;