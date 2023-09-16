import { generateUniqueCatId } from "./idHandler";
function handleAddCat(req, res) {
    let formData = '';

    req.on('data', (chunk) => {
        formData += chunk;
    });

    req.on('end', () => {
        const parsedData = querystring.parse(formData);
        const catData = fs.readFileSync('./data/cats.json');
        let catJSON = JSON.parse(catData);
        console.log(formData);
        const newCatId = generateUniqueCatId(catJSON);

        const newCat = {
            id: newCatId,
            name: parsedData.name,
            description: parsedData.description,
            imageUrl: parsedData.upload,
            breed: parsedData.breed,
        };


        catJSON.push(newCat);

        fs.writeFileSync('./data/cats.json', JSON.stringify(catJSON));
        res.writeHead(302, { Location: '/' });
        res.end();
    });
}


module.exports = handleAddCat;