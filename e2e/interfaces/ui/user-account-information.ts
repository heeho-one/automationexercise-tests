export interface UserAccountInformation {
    name: string;
    email: string;
    title: 'Mr.' | 'Mrs.';
    password: string;
    birthMonth: string;
    birthDay: number;
    birthYear: number;
    newsletter: boolean;
    offers: boolean;
    firstName: string;
    lastName: string;
    company: string;
    address1: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
    mobileNumber: string;
}