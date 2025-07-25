export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    title: 'Mr' | 'Mrs';
    birth_date: number;
    birth_month: string
    birth_year: number;
    firstname: string;
    lastname: string;
    company: string;
    address1: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobile_number: string;
}