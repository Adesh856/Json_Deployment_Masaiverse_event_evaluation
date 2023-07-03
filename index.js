const jsonServer = require("json-server")
const Server = jsonServer.create()
const router = jsonServer.router("db.json")
const middelware = jsonServer.defaults()

const Port = 5256

Server.use(middelware)
Server.use(router)
Server.listen(Port)