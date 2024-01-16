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

    console.info(
      "Successfully connected to plaid client. Exchanging public token for access token."
    );

    const body = JSON.parse(event.body);
    const publicToken = body.publicToken;

    if (!publicToken) {
      throw new Error("Please try request with valid public token.");
    }

    console.info("Calling plaid to exchange public token for access token...");

    const response = await client.itemPublicTokenExchange({
      public_token: publicToken,
      // redirect_uri: "https://main.djtegc4mzj3vp.amplifyapp.com/",
    });

    const accessToken = response.data.access_token;

    if (accessToken) {
      console.info(`Successfully retrieved accessToken: ${accessToken}`);
      return {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  },
        body: JSON.stringify({ accessToken }),
      };
    }
    throw new Error("access token was null.");
  } catch (error) {
    // handle error
    console.error(
      `Failed to exchange plaid public token for plaid access token. See error: ${error} `
    );
  }
};
