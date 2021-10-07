const express = require('express');
const router = express.Router();
const fs = require('fs');

const pathRouter = `${__dirname}`;

const removeExtension = (filename) => {
    return filename.split('.').shift();
}

fs.readdirSync(pathRouter).filter((file) => {
    const filename = removeExtension(file);
    const skip = ['index'].includes(filename);
    if (!skip) {
        router.use(`/${filename}`, require(`./${filename}`));
        console.log('CARGAR RUTA --->', filename);
    }
});

router.get('*', (req, res) => {
    res.status(404);
    res.send({ error: 'Not found' });
});

module.exports = router;