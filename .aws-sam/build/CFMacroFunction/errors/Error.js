/**
 * Class Super type for Errors
 */
export class Error{
    /**
     * Return error message
     * @returns {*}
     */
    getErrormessage(){
        return this.message;
    }

    /**
     * Return error message code
     * @returns {*}
     */
    getErrorCode(){
        return this.code;
    }
}
