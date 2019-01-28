import { loginHandler } from "../handlers/loginHandler";

module.exports = [
  {
    method: "POST",
    path: "/login",
    config: { auth: false },
    handler: loginHandler
  }
];
