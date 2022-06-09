/**
 * Settings parameter for get amu ids from aws
 * see further docs https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeImages-property
 * @type {AmiParams}
 */
export const AmiParams = class {

    _dryRun = true;
    _filters = [];
    _imageIds = [];
    _includeDeprecated = false;
    _executableUsers = [];
    _owners = [];

    /**
     * Setter for DryRun
     * @param dryRun bool
     */
    set dryRun(dryRun) {
        this._dryRun = dryRun;
    }

    /**
     * Setter for Filters
     * @param filter array
     */
    set filters(filter) {
        if (filter instanceof Array) {
            this._filters = this._filters.concat(filter);
        } else {
            this._filters.push(filter)
        }
    }

    /**
     * setter for image id aws AMI image id
     * @param imageId
     */
    set imageIds(imageId) {
        this._imageIds.push(imageId)
    }

    /**
     * setter for IncludeDeprecated
     * @param includeDeprecated bool
     */
    set includeDeprecated(includeDeprecated) {
        this._includeDeprecated = includeDeprecated;
    }

    /**
     * setter for ExecutableUsers
     * @param executableUser array
     */
    set executableUsers(executableUser) {
        this._executableUsers.push(executableUser)
    }

    /**
     * setter for Owner
     * @param owner array
     */
    set owners(owner) {
        this._owners.push(owner)
    }


    /**
     * Setting parameters for request
     * @returns {{ImageIds: *[], Filters: *[], ExecutableUsers: *[], DryRun: boolean, IncludeDeprecated: boolean, Owners: *[]}}
     */
    setParams() {
        let params = {
            DryRun: this._dryRun,
            IncludeDeprecated: this._includeDeprecated,
        };

        if (this._filters.length > 0) {
            params['Filters'] = this._filters;
        }

        if (this._imageIds.length > 0) {
            params['ImageIds'] = this._imageIds;
        }

        if (this._executableUsers.length > 0) {
            params['ExecutableUsers'] = this._executableUsers;
        }

        if (this._owners.length > 0) {
            params['Owners'] = this._owners;
        }

        return  params;
    }
}
