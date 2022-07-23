const { Client }  = require('../models');
const encryptPass = require('../helpers/encryptPass');
const { createToken, customError } = require('../helpers');

const createClient = async (userInfos) => {
  const hashPass = await encryptPass(userInfos.password);
  const [client, created] = await Client.findOrCreate({ 
    where: { email: userInfos.email },
    defaults: { ...userInfos, password: hashPass },
  });
  
  if (!created) {
    customError(409, 'Email already registered');
  };

  const { password, ...newClient } = client;
  
  const token = createToken(newClient);

  return token;
};

module.exports = {
  createClient
};