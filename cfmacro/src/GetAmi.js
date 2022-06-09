import {EmptyImages} from "../errors/EmptyImages.js";
import moment from "moment/moment.js";


export const GetAmi = class {

    constructor(images) {
        if (images.length === 0) {
            throw new EmptyImages();
        }
        this._images = images;
    }

    getLatest() {
        let images = this._images;
        return images.reverse()[0];
    }

    get images() {
        return this._images;
    }

    byCreationDate() {
        this._images.sort((a, b) => {
            const dateA = moment(a['CreationDate']).unix();
            const dateB = moment(b['CreationDate']).unix();
            if (dateA < dateB) {
                return -1;
            }
            if (dateA > dateB) {
                return 1;
            }
            return 0;
        })
        return this;
    }
}
