const fs = require('fs');
const path = require('path');

const usersDbDir = path.join(__dirname, '../', 'dataBase', 'usersDB.js');
const usersDB = require('../dataBase/usersDB');

module.exports = {
    createUser: (userObj) => {
        usersDB.push(userObj);
        const str = `module.exports = ${JSON.stringify(usersDB)};`;
        fs.writeFile(usersDbDir, str, () => {});
    },
    getAllUsers: () => usersDB,
    getUserById: (userId) => usersDB[userId],
    updateUserById: (userId, userObj) => {
        usersDB[userId] = userObj;
    },
    deleteUserById: (userId) => usersDB.splice(userId, 1)
};