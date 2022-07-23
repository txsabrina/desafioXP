const errorHandle =  (e, _req, res, _next) => {
    return res.status(e.status || 500)
    .json({ message: e.message || 'Something is wrong, try again later' });
};

module.exports = errorHandle;