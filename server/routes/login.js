import { loginHandler } from "../handlers/loginHandler";

module.exports = [
  {
    method: "POST",
    path: "/",
    config: { auth: false },
    handler: loginHandler
  }
];
