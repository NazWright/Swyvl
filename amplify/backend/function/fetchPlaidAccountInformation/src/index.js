/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  try {
    const { Configuration, PlaidApi, PlaidEnvironments } = require("plaid");
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const configuration = new Configuration({
      basePath: PlaidEnvironments.sandbox,
      baseOptions: {
        headers: {
          "PLAID-CLIENT-ID": process.env.plaidClientId,
          "PLAID-SECRET": process.env.plaidClientSecretSandbox,
        },
      },
    });

    console.info("Connecting to plaid client...");
    const client = new PlaidApi(configuration);

    console.info("Successfully connected to plaid client.");

    const body = JSON.parse(event.body);
    const accessToken = body.accessToken;

    if (!accessToken) {
      throw new Error("Please try request with valid access token.");
    }

    console.info("Retrieving account details with access token...");

    const accountsResponse = await client.accountsGet({
      access_token: accessToken,
    });

    console.info("Successfully retrieved account details...");

    return {
      statusCode: 200,
      //  Uncomment below to enable CORS requests
      //  headers: {
      //      "Access-Control-Allow-Origin": "*",
      //      "Access-Control-Allow-Headers": "*"
      //  },
      body: JSON.stringify(accountsResponse.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
