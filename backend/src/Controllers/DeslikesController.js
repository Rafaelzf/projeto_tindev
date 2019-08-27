const Dev = require('../Models/Dev');

module.exports = {
    async store(req, res) {

        const { devId } = req.params;
        const { user } = req.headers;

        //Guarda e instância o usuário e o alvo do like em constantes
        const loggedDev = await Dev.findById(user);
        const targetdDev = await Dev.findById(devId);

        if (!targetdDev) {
            return res.status(400).json({ error: 'Dev not exists' });
        }


        //Adicionando o ID do target dentro do array de likes do usuário configurado no model
        loggedDev.deslikes.push(targetdDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
}