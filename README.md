# Swyvl

## Invoke Lambda Functions Locally

To invoke a Lambda function locally, we need to use the AWS SAM CLI. To install, configure and learn more about the SAM CLI, please use the following links:

- https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html
- https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/using-sam-cli.html

## To run a lambda function:

1.  Via a terminal, navigate to the particular Lambda function found at /ampllify/backend/function.
2.  Modify the 'event.json' file located in the lambda function directory to properly mock the request body sent to your lambda function
3.  In a terminal, run this command:
    - `sam local invoke -e <path/to/event.json> -t <path/to/cloud-formation-template.(json/yaml)>`
    - the cloud formation template is located in the base directory of the lambda function
    - Some Lambda functions require environment variables to be set, in this case you can use a command similar to so:
      - `export TABLE_REGION=us-east-1 && export ENV=main && sam local invoke -e event.json -t ../swyvlUsers-cloudformation-template.json`
