const service = require('../services/transactions.services');

const accountDeposit = async (req, res, next) => {
  const { value } = req.body;
  const  codClient  = req.client;

  try{
    await service.accountDeposit(codClient, value);

    return res.status(200).json({ message: 'Deposit completed successfully!'})
  } catch(e){
    next(e)
  }
};

const accountWithdraw = async (req, res, next) => {
  const { value } = req.body;
  const  codClient  = req.client;

  try{
    await service.accountWithdraw(codClient, value);

    return res.status(200).json({ message: 'Withdrawal completed successfully!'})
  } catch(err) {
    next(err)
  }
};

module.exports = {
  accountDeposit,
  accountWithdraw,
}