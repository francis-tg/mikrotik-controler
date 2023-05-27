const db = require("../models")
const { RouterApi } = require("../utils/routerApi")

module.exports.getInterfaces = async (req, res, next) => {
    const {id} = req.params
    const getRouter = db.Router.findOne({ where: { id } })
    if (getRouter) {
        const { host, user, password } = getRouter
        const client = await RouterApi({
            host,
            user,
            password
        })
    }
}