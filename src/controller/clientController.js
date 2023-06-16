const path = require("path");

const clientController = (req, res) => {
  const filePath = path.join(__dirname, "../views/index.ejs");
  const data = {
    title: "My Website"
  };
  res.render(filePath, data);
}

module.exports = {
    clientController
};