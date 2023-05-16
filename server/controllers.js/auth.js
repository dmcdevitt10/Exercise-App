const {User} = require('../util/models')

module.exports = {
    register: async (req, res) => {
        try {
            const {username, password} = req.body
            await User.create({username, password})
            res.status(200).send('User created')
        } catch (err) {
          console.log(err);
          res.status(400).send(`error with register: ${err}`);
        }
      },
}