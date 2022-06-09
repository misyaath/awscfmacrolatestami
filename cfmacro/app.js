import aws from 'aws-sdk'
import {AmiParams} from "./src/AmiParams.js";
import {GetAmi} from "./src/GetAmi.js";

let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
export const lambdaHandler = async (event, context) => {
    let latestAmi;

    try {
        let EC2 = new aws.EC2({"region": "us-east-1"});
        let params = new AmiParams();
        params.dryRun = false;
        params.owners = "self";
        response = await EC2.describeImages(params.setParams()).promise();

        if ("Images" in response) {
            latestAmi = new GetAmi(response.Images).byCreationDate().getLatest().ImageId;
        }
    } catch (err) {
        return console.log(err);
    }

    return latestAmi;
};
