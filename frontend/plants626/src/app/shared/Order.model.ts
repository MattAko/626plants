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
    },
    method: string,
    carrier: string,
    cost: number,
    signature: boolean,
}
interface Payer{
    address: {
        country_code: string
    },
    email_address: string,
    name: {
        given_name: string,
        surname: string
    },
    payer_id: string,
}

export class Order{
    constructor(
        public receiptId: string,
        public products: number[],
        public purchase_date: string,
        public payer: Payer,
        public status: string,
        public shipping: Shipping,
        public subtotal: number,
        public total: number,
    ){ }
}