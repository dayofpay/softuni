export async function createUser(data) {
    try {



        const apiUrl = "http://localhost:3030/jsonstore/users/";

        const request = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (request.ok) {
            const responseData = await request.json();
            return responseData;
        } else {
            console.log('Failed creating user', request.status, request.statusText);
            return null;
        }
    } catch (err) {
        console.error('Error:', err);
        return null;
    }
}



export async function updateUser(id, userData) {
    try {
        const updateUrl = `http://localhost:3030/jsonstore/users/${id}`;
        const response = await fetch(updateUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log('Update request failed:', response.status, response.statusText);
            return null;
        }
    } catch (err) {
        console.error('Error:', err);
        return null;
    }
}

export async function getUserInfo(id){
    try{
        const url = `http://localhost:3030/jsonstore/users/${id}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            return await data;
        } else {
            console.log('get user info failed:', response.status, response.statusText);
            return null;
        }
    }catch(err){
        console.error('Error',err);

        return null;
    }
}

