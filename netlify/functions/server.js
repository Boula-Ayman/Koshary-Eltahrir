const { createRequestHandler } = require("@react-router/node");

exports.handler = async (event, context) => {
  // Convert Netlify event to Fetch API Request
  const url = new URL(event.rawUrl || event.url);
  const request = new Request(url.toString(), {
    method: event.httpMethod,
    headers: event.headers,
    body: event.body
      ? Buffer.from(event.body, event.isBase64Encoded ? "base64" : "utf8")
      : undefined,
  });

  const handler = createRequestHandler({
    build: require(process.cwd() + "/build/server/index.js"),
  });

  const response = await handler(request);

  // Convert Fetch API Response to Netlify response format
  const responseBody = await response.text();
  const headers = Object.fromEntries(response.headers.entries());

  return {
    statusCode: response.status,
    headers,
    body: responseBody,
    isBase64Encoded: false,
  };
};
