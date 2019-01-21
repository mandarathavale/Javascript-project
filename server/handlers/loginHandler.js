import { signJWT } from "../utils/JWTUtils";

export const loginHandler = (request, h) => {
  var token = signJWT();
  let response;
  if (token) {
    response = h.response(token);
    // response.header("authorization", token);
  } else {
    response = h.response("Bad Request");
    response.code(400);
  }
  return response;
};
