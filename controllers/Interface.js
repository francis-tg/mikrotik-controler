const db = require("../models");
const {RouterApi} = require("../utils/routerApi");

const getInterfaces = async (req, res, next) => {
  const {id} = req.params;
  const getRouter = db.Router.findOne({where: {id}});
  if (getRouter) {
    const {host, user, password} = getRouter;
    const clientApi = await RouterApi({
      host,
      user,
      password
    });
    const interfaces = await (await clientApi.connect())
      .menu("/interface")
      .getAll();
    clientApi.close();
    return res.status(200).json(interfaces);
  }
};
async function rename(req, res, next) {
  const {id, interface} = req.params;
  const {name} = req.body;
  const getRouter = db.Router.findOne({where: {id}});
  if (getRouter) {
    const {host, user, password} = getRouter;
    const clientApi = await RouterApi({
      host,
      user,
      password
    });
    const interfaces = (await clientApi.connect()).menu("/interface").edit(
      {
        name
      },
      interface
    );
    clientApi.close();
    return res.status(200).json(interfaces);
  }
}

async function enable(req, res, next) {
  const {id, interface} = req.params;
  const getRouter = db.Router.findOne({where: {id}});
  if (getRouter) {
    const {host, user, password} = getRouter;
    const clientApi = await RouterApi({
      host,
      user,
      password
    });
    const interfaces = await (await clientApi.connect())
      .menu("/interface")
      .enable(interface);
    clientApi.close();
    return res.status(200).json(interfaces);
  }
}

async function disable(req, res, next) {
  const {id, interface} = req.params;
  const getRouter = db.Router.findOne({where: {id}});
  if (getRouter) {
    const {host, user, password} = getRouter;
    const clientApi = await RouterApi({
      host,
      user,
      password
    });
    const interfaces = await (await clientApi.connect())
      .menu("/interface")
      .disable(interface);
    clientApi.close();
    return res.status(200).json(interfaces);
  }
}

module.exports = {
  rename,
  enable,
  disable,
  getInterfaces
};
