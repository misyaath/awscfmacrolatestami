'use strict';
import * as app from "../../app.js"
import * as chai from "chai";

const expect = chai.expect;
let event, context;

describe('Tests LambdaHandler', function () {
    it('verifies successfully return Image ID', async () => {
        let event = {
            accountId: '125555',
            fragment: {
                NetworkInterfaces: {},
                BlockDeviceMappings: {},
                InstanceType: 't2.micro'
            },
            transformId: '89965555::AMIIdMacroFunction',
            requestId: '41255845wdfsf-gregr5-vgerfg',
            region: 'us-east-1',
            params: {},
            templateParameterValues: {}
        };
        const result = await app.lambdaHandler(event, context)
        let fragment = result.fragment;
        expect(result).to.have.property("requestId", event.requestId);
        expect(result).to.have.property("status", "success");
        expect(fragment).to.have.property("InstanceType", event.fragment.InstanceType);
        expect(fragment).to.have.property("NetworkInterfaces", event.fragment.NetworkInterfaces);
        expect(fragment).to.have.property("BlockDeviceMappings", event.fragment.BlockDeviceMappings);
        expect(fragment).to.have.property("ImageId");
    });
});
