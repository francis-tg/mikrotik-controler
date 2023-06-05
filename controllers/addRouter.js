const db = require("../models");
module.exports.addRouter = (req, res, next) => {
  if (Object.keys(req.body).length > 0) {
    const {ip, user, password, name} = req.body;
    const newRouter = db.Router.create({host: ip, user, password, name});
    return res.status(201).json(newRouter);
  }
};
module.exports.getRouter = async (req, res, next) => {
  const routers = await db.Router.findAll({raw: true});

  return res.status(200).json(routers);
};
