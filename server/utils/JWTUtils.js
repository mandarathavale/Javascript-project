var jwt = require("jsonwebtoken");

export const signJWT = function() {
  const token = jwt.sign({ name: "mandar" }, process.env.SECRET_KEY, {
    expiresIn: process.env.TOKEN_EXPIRY
  });
  return token;
};

// validation function for jwt. Customize as needed
export const validate = async function(decoded, request) {
  console.log(decoded);
  // do your checks to see if the person is valid
  // if (!people[decoded.id]) {
  //   return { isValid: false };
  // }
  // else {
  return { isValid: true };
  // }
};
