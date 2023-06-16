//
const util = require("node:util");
const {connection} = require("./connectMySqli"); 
const query = util.promisify(connection.query).bind(connection);

export { query, connection };