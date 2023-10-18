const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const PORT = 5050;
const app = express();

app.use(express.urlencoded({ extended: false }));

async function generateHash(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, function(err, hash) {
            if (err) {
                reject(err);
            } else {
                resolve(hash);
            }
        });
    });
}

app.get('/', async (req, res) => {
    try {
        // Generate hashed password ( Just for the demo, JWT Demonstration is our main priority here )
        const hashedPassword = await generateHash('parola123');

        const jwtConfig = {
            payLoadData: {
                'username': 'test',
                'password': hashedPassword,
            },
            secret: {
                'token': 'SecretToken7777'
            },
            algorithm: 'HMAC'
        };

        // Synchronous
        console.log(true);
        const jwt_sign = jwt.sign(jwtConfig.payLoadData, jwtConfig.secret.token, { expiresIn: '30d' });


        res.send(jwt_sign)
    } catch (error) {
        res.status(500).send('Error generating token: ' + error.message);
    }
});


// Demonstration with verifying JWT using request

app.get('/verify/:token', async (req, res) => {
        // Verification
        const verify = jwt.verify(req.params.token, 'SecretToken7777', function(err, decoded) {
            return err !== null ? { JWT_EXCEPTION: 'Invalid Signature' } : decoded;
        });
        console.log(true);
        res.send(verify)
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT} ...`));
