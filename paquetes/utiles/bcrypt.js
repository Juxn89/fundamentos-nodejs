const BCRYPT = require('bcrypt')

const password = 'MiContraseña_123-.-';

BCRYPT.hash(password, 5, (err, hash) => {
    console.log(hash);

    BCRYPT.compare(password, hash, (err, res) => {
        console.log(res);
    })
})
