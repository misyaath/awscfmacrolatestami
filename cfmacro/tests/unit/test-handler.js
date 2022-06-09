'use strict';
import * as app from "../../app.js"
import * as chai from "chai";

const expect = chai.expect;
let event, context;

describe('Tests LambdaHandler', function () {
    it('verifies successfully return Image ID', async () => {
        const result = await app.lambdaHandler(event, context)
        console.log(result);
        expect(result).to.be.an('string');
    });
});
