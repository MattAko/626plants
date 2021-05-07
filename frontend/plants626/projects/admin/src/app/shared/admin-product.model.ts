export class AdminProduct{
    constructor(
        public id: number,
        public description: string,
        public images: string[],
        public name: string,
        public price: number,
        public quantity: number,
        public posted: Date,
        public purchased: Date,
        public receiptId: any,
        public visible: boolean,

    ){}
}