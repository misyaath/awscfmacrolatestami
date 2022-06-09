import {AmiParams} from "../../src/AmiParams.js";
import * as chai from "chai";

describe("Test Ami param Class", function () {

    it('should Dry run default is true', function () {
        let params = new AmiParams().setParams();
        chai.expect(params.DryRun).to.equal(true);
    });

    it('should Dryrun is return setup value true', function () {
        let ami = new AmiParams();
        ami.dryRun = false;
        let params = ami.setParams();
        chai.expect(params.DryRun).to.equal(false);
    });

    it('should IncludeDeprecated default is false', function () {
        let params = new AmiParams().setParams();
        chai.expect(params.IncludeDeprecated).to.equal(false);
    });

    it('should IncludeDeprecated is return setup value true', function () {
        let ami = new AmiParams();
        ami.includeDeprecated = true;
        let params = ami.setParams();
        chai.expect(params.IncludeDeprecated).to.equal(true);
    });

    it('should filters array of objects', function () {
        let ami = new AmiParams();
        ami.filters = [
            {
                Name: "architecture",
                Values: [
                    "i386"
                ]
            },
            {
                Name: "image-id",
                Values: [
                    "im-5665474"
                ]
            }
        ];
        ami.filters = [
            {
                Name: "hypervisor",
                Values: [
                    "ovm"
                ]
            },
            {
                Name: "owner-alias",
                Values: [
                    "amazon"
                ]
            }
        ];
        ami.filters = {
            Name: "image-type",
            Values: [
                "machine"
            ]
        };
        let expect = [
            {
                Name: "architecture",
                Values: [
                    "i386"
                ]
            },
            {
                Name: "image-id",
                Values: [
                    "im-5665474"
                ]
            },
            {
                Name: "hypervisor",
                Values: [
                    "ovm"
                ]
            },
            {
                Name: "owner-alias",
                Values: [
                    "amazon"
                ]
            },
            {
                Name: "image-type",
                Values: [
                    "machine"
                ]
            }
        ]
        let params = ami.setParams();
        chai.expect(params.Filters).to.have.deep.members(expect);
    });

    it('should imageIds has array of values', function () {
        let ami = new AmiParams();
        ami.imageIds = "im-0025488666";
        ami.imageIds = "im-0025488666";
        let params = ami.setParams();
        let expect = ["im-0025488666", "im-0025488666"]
        chai.expect(params.ImageIds).to.have.members(expect);
    });

    it('should ExecutableUsers has array of values', function () {
        let ami = new AmiParams();
        ami.executableUsers = "self";
        ami.executableUsers = "all";
        let params = ami.setParams();
        let expect = ["all", "self"]
        chai.expect(params.ExecutableUsers).to.have.members(expect);
    });

    it('should Owners has array of values', function () {
        let ami = new AmiParams();
        ami.owners = "amazon";
        ami.owners = "self";
        let params = ami.setParams();
        let expect = ["amazon", "self"]
        chai.expect(params.Owners).to.have.members(expect);
    });

    it('should return all params which are sets', function () {
        let ami = new AmiParams();
        ami.owners = "self";
        ami.executableUsers = "self";
        ami.imageIds = "im-0125556666";
        ami.filters = {
            Name: " architecture",
            Values: [
                "i386"
            ]
        }
        let params = ami.setParams();
        let expect = {
            Owners: [
                "self"
            ],
            IncludeDeprecated: false,
            DryRun: true,
            ImageIds: [
                "im-0125556666"
            ],
            Filters: [
                {
                    Name: " architecture",
                    Values: [
                        "i386"
                    ]
                }
            ]
        }
        chai.expect(params).to.have.deep.include(expect);
    });
})
