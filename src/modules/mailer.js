const { resolve } = require("path");
const nodemailer = require("nodemailer");
const hds = require("nodemailer-express-handlebars");
const { host, port, user, pass } = require("../config/mailer");
const exphbs = require("express-handlebars");

const viewPath = resolve(__dirname, '..', 'resources', 'mail');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass }
  });

/* transport.use("compile", hds({
    viewEngine: "handlebars",
    viewPath: path.resolve("./src/resources/mail/"),
    extName: ".html"
})); */
 
transport.use("compile", hds({
  viewEngine: exphbs.create({
    layoutsDir: resolve(viewPath, "layouts"),
    partialsDir: resolve(viewPath, "partials"),
    defaultLayout: "default",
    extName: ".handlebars",
  }),
  viewPath,/*viewPath === viewPath: viewPath, */
  extName: ".handlebars",
}));

module.exports = transport;