export class UploadForm{
    constructor(
        public name: string,
        public quantity: number,
        public price: number,
        public description: string,
        public imageFiles: FileList,
        public postedDate: Date
    ){ }
}