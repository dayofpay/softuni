export const createUser = () => {
    console.log(true);
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

