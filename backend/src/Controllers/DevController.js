const axios = require('axios');
const Dev = require('../Models/Dev');

module.exports = {

    //Listagem de usuários
    async index(req, res) {
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.deslikes } },
            ],
        })
        return res.json(users);
    },

    async store(req, res) {
        //Puxa a propriedade username do objeto req.body
        const { username } = req.body;

        //Verifica usuário existente
        const userExist = await Dev.findOne({ user: username });
        if (userExist) {
            return res.json(userExist);
        };

        //Joga para a constante response o json da api user github
        const response = await axios.get(`https://api.github.com/users/${username}`);

        //jogando dados da importação axios para constante, usando desistruturação
        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });


        return res.json(dev);
    }

}

//https://api.github.com/users/Rafaelzf