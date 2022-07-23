const bcrypt = require('bcrypt');


const encryptPass = (pass) => {
  const salt = bcrypt.genSaltSync(10);

  const encryptedPass = bcrypt.hashSync(pass, salt);

  return encryptedPass;
};

module.exports = encryptPass;