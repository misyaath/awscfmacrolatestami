import {Error} from "./Error.js";

export class EmptyImages extends Error{

    constructor() {
        super();
        this.message = "No Images data found";
    }
}
