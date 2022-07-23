const { Client }  = require('../models');
const encryptPass = require('../helpers/encryptPass');
const bcrypt = require('bcrypt');
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

const checkPass  = (pass, passDB) => {
  const isCheck = bcrypt.compareSync(pass, passDB) || (pass === passDB);

  return isCheck;
};

const login = async (email, password) => {
const client = await Client.findOne({ where: { email }});

  if(!client) {
    customError(400, 'Invalid email!');
  };

  if(!checkPass(password, client.password )) {
    customError(400, 'Invalid password!'); 
  }

  const { password: pass, ...rest } = client;
  const token = createToken(rest);

  return token
};



module.exports = {
  createClient,
  login,
};