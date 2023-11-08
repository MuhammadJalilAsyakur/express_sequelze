const { User } = require('../models');

module.exports = {
    getAlluser: async (req, res) => {
        const users = await User.findAll();
        res.json({
            message: "Get all data",
            data: users
        });
    }

}

