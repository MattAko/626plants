export class AdminProduct{
    constructor(
        public id: number,
        public description: string,
        public images: string[],
        public name: string,
        public price: number,
        public quantity: number,
        public posted: Date,
        public visible: boolean,
        public status: string,
        public sold: boolean,
    ){}
}