const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");
const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  { timestamp: true }
);

UserSchema.methods.validatePassword = async function (password) {
  return await bycrypt.compare(password, this.password);
};

UserSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bycrypt.genSalt(10);
  this.password = await bycrypt.hash(this.password, salt);
});

module.exports = mongoose.model("UserModel", UserSchema);
