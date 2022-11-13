const expressn- require('express');
const authController -require("../Controllers");
const authRouter -express.Router();


authRouter.post("signup", authController.signup);

authRouter.post("/login", authController.login);

module.exports - authRouter;