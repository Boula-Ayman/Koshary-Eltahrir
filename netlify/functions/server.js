const { createRequestHandler } = require("@react-router/node");

module.exports = {
  async fetch(request) {
    const handler = createRequestHandler({
      build: require(process.cwd() + "/build/server/index.js"),
    });

    return handler(request);
  },
};
