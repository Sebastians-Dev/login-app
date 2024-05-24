const EmailCode = require("./EmailCode");
const User = require("./user");


EmailCode.belongsTo(User);
User.hasOne(EmailCode);