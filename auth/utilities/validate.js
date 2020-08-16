// simple function to validate if payload has all the required fields or not
// payload: request body
// params: required params which needs to be validated angainst payload
module.exports = (payload, params) => {
  const payloadKeys = Object.keys(payload);

  for (let param of params) {
    if (!payloadKeys.includes(param)) {
      return `${param} is required.`;
    }
  }

  return false;
};
