require("dotenv").config();
const Hapi = require("hapi");
import { validate } from "./utils/JWTUtils";

// create a server object
const server = Hapi.server({
  port: 3001,
  host: "localhost"
});

// register routes
server.route(require("./routes"));

// server.route({
//   method: "GET",
//   path: "/{name}",
//   // config: { auth:  },
//   handler: (request, h) => {
//     return "Hello, " + encodeURIComponent(request.params.name) + "!";
//   }
// });

const init = async () => {
  await server.register(require("hapi-auth-jwt2"));
  server.auth.strategy("jwt", "jwt", {
    key: process.env.SECRET_KEY, // Never Share your secret key
    validate: validate, // validate function defined above
    verifyOptions: { algorithms: ["HS256"] } // pick a strong algorithm
  });
  server.auth.default("jwt");

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
