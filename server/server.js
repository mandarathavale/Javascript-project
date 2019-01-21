require("dotenv").config();
const Hapi = require("hapi");
// const routeObject = require("./routes");
// server.route({ routeObject });

// create a server object
const server = Hapi.server({
  port: 3001,
  host: "localhost"
});

// validation function for jwt. Customize as needed
const validate = async function(decoded, request) {
  console.log(decoded);
  // do your checks to see if the person is valid
  // if (!people[decoded.id]) {
  //   return { isValid: false };
  // }
  // else {
  return { isValid: true };
  // }
};

server.route({
  method: "GET",
  path: "/",
  config: { auth: false },
  handler: (request, h) => {
    return "Hello, world!";
  }
});

server.route({
  method: "GET",
  path: "/{name}",
  // config: { auth:  },
  handler: (request, h) => {
    return "Hello, " + encodeURIComponent(request.params.name) + "!";
  }
});

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
