export async function makeRequest(){
    let endpoint = "http://localhost:3030/jsonstore/advanced/dropdown";

    let request = await fetch(endpoint);

    let response = await request.json()
    return response;

}
export async function importItem(item){
    let data = {
        text: item,
    }

    let requestSettings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    // Send Post Data
    try{
        await fetch("http://localhost:3030/jsonstore/advanced/dropdown", requestSettings);
        return "success"
    }catch(error){
        return "error";
    }
}