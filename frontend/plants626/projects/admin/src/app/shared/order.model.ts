interface Shipping{
    address: {
        address_line_1: string,
        admin_area_1: string,
        admin_area_2: string,
        country_code: string,
        postal_code: string
    },
    name: {
        full_name: string,
    }
}
export class Order{
    constructor(
        public orderId: string,
        public products: number[],
        public status: string,
        public shipping: Shipping 
    ){ }
}