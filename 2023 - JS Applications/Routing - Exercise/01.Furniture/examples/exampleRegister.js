let userData = { "email": "s@abv.bg", "password": "123" };

try {
    const response = await registerUser(userData);
    console.log(response);

} catch (error) {
    console.error(error);
}