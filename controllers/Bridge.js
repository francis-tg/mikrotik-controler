const db = require("../models");
const {RouterApi} = require("../utils/routerApi");

const getBridge = async (req, res, next) => {
  const {id} = req.params;
  const getRouter = db.Router.findOne({where: {id}});
  if (getRouter) {
    const {host, user, password} = getRouter;
    const clientApi = await RouterApi({
      host,
      user,
      password
    });
    const interfacesBridge = clientApi
      .connect()
      .menu("/interface/bridge")
      .print();
    clientApi.close();
    return res.status(200).json(interfacesBridge);
  } else next();
};

const createBridge = async (req, res, next) => {
  const {id} = req.params;
  const {name} = req.body;
  const getRouter = db.Router.findOne({where: {id}});
  if (getRouter) {
    const {host, user, password} = getRouter;
    const clientApi = await RouterApi({
      host,
      user,
      password
    });
    const interfacesBridge = await (await clientApi.connect())
      .menu("/interface/bridge")
      .add({
        name: name,
        comment: `bridge_${name}`
      });
    clientApi.close();
    return res.status(200).json(interfacesBridge);
  } else next();
};

module.exports = {
  getBridge,
  createBridge
};
