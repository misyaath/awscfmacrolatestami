import * as chai from "chai";
import {GetAmi} from "../../src/GetAmi.js";

describe("Test Get Ami Class", () => {

    let imageData = {
        Images: [
            {
                "VirtualizationType": "hvm",
                "Description": "Provided by Red Hat, Inc.",
                "PlatformDetails": "Red Hat Enterprise Linux",
                "EnaSupport": true,
                "Hypervisor": "xen",
                "State": "available",
                "SriovNetSupport": "simple",
                "ImageId": "ami-1234567890EXAMPLE",
                "UsageOperation": "RunInstances:0010",
                "BlockDeviceMappings": [
                    {
                        "DeviceName": "/dev/sda1",
                        "Ebs": {
                            "SnapshotId": "snap-111222333444aaabb",
                            "DeleteOnTermination": true,
                            "VolumeType": "gp2",
                            "VolumeSize": 10,
                            "Encrypted": false
                        }
                    }
                ],
                "Architecture": "x86_64",
                "ImageLocation": "123456789012/RHEL-8.0.0_HVM-20190618-x86_64-1-Hourly2-GP2",
                "RootDeviceType": "ebs",
                "OwnerId": "123456789012",
                "RootDeviceName": "/dev/sda1",
                "CreationDate": "2019-05-10T13:17:12.000Z",
                "Public": true,
                "ImageType": "machine",
                "Name": "RHEL-8.0.0_HVM-20190618-x86_64-1-Hourly2-GP2"
            },
            {
                "Architecture": "x86_64",
                "CreationDate": "2019-01-14T19:17:25.000Z",
                "ImageId": "ami-032509850cf9ee54e",
                "ImageLocation": "amazon/amzn2-ami-hvm-2.0.20190115-x86_64-gp2",
                "ImageType": "machine",
                "Public": true,
                "OwnerId": "137112412989",
                "ProductCodes": [],
                "State": "available",
                "BlockDeviceMappings": [
                    {
                        "DeviceName": "/dev/xvda",
                        "Ebs": {
                            "DeleteOnTermination": true,
                            "SnapshotId": "snap-04359c6bb66cf4243",
                            "VolumeSize": 8,
                            "VolumeType": "gp2",
                            "Encrypted": false
                        }
                    }
                ],
                "Description": "Amazon Linux 2 AMI 2.0.20190115 x86_64 HVM gp2",
                "EnaSupport": true,
                "Hypervisor": "xen",
                "ImageOwnerAlias": "amazon",
                "Name": "amzn2-ami-hvm-2.0.20190115-x86_64-gp2",
                "RootDeviceName": "/dev/xvda",
                "RootDeviceType": "ebs",
                "SriovNetSupport": "simple",
                "Tags": [],
                "VirtualizationType": "hvm"
            }
        ]
    }

    it('should Return exception there no images data', function () {
        chai.assert.throws(() => {
            new GetAmi([])
        }, "No Images data found")
    });

    it('should Return asc images data', function () {
        let getAmi = new GetAmi(imageData.Images);
        let ami = getAmi.byCreationDate().getLatest();

        chai.expect(ami.ImageId).to.equal("ami-1234567890EXAMPLE");
    });
})
