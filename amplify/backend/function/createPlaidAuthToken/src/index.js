/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const { Configuration, PlaidApi, PlaidEnvironments } = require("plaid");

  /* TODO: Plaid client secret is for sandbox only now, 
make a file that will get the right client secret for the right env */

  const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
      headers: {
        "PLAID-CLIENT-ID": process.env.plaidClientId,
        "PLAID-SECRET": process.env.plaidClientSecretSandbox,
      },
    },
  });

  try {
    const client = new PlaidApi(configuration);
    const linkTokenRequest = {
      user: {
        // This should correspond to a unique id for the current user.
        client_user_id: "1",
      },
      client_name: "Plaid Test App",
      products: ["auth"],
      language: "en",
      redirect_uri: "https://main.d3k1mcd5nd8wjp.amplifyapp.com/",
      country_codes: ["US"],
    };
    console.info(`Fetching Plaid link token...`);
    const response = await client.linkTokenCreate(linkTokenRequest);
    const linkToken = response.data.link_token;
    console.info(`Successfully retrieved Plaid link token: ${linkToken}`);
    return {
      statusCode: 200,
      //  Uncomment below to enable CORS requests
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
      body: JSON.stringify({ linkToken }),
    };
  } catch (error) {
    // handle error
    console.error(error);
  }
};
