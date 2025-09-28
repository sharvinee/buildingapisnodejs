const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() )

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'cute tshirt',
        size: 'medium'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        return res.status(418).send({ message: 'We need a logo!' })
    }
    
    res.send({
        tshirt: `cute tshirt with your ${logo} and ID of ${id}`, 
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});