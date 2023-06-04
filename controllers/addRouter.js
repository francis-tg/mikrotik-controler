const db = require("../models")
module.exports.addRouter = (req, res, next) => {
    if (Object.keys(req.body).length > 0) {
        const { host, user, password,name } = req.body
        const newRouter = db.User.create({ host, user, password, name });
        return res.status(201).json(newRouter);
    }
}
module.exports.getRouter = (req, res, next) => {
    const routers = db.User.findAll();
    return res.status(200).json(routers);
}