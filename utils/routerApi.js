const RouterOSClient = require("routeros-client").RouterOSClient;

module.exports.RouterApi = ({ host, user, password }) => {
  const api = new RouterOSClient({
    host: host,
    user: user,
    password: password,
  });
    return api;
};