const { createRequestHandler } = require("@react-router/node");

module.exports = {
  async fetch(request) {
    const handler = createRequestHandler({
      build: require("./../build/server/index.js"),
    });

    return handler(request);
  },
};
