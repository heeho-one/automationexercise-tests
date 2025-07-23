import { faker } from '@faker-js/faker';
import { UserAccountInformation } from '../interfaces/ui/user-account-information';
import { RegisterRequest } from '../interfaces/api/register-request.interface';

export class APITestDataUtils {

    static generateRegisterUserPayload(): FormData {
        const userInfo = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            title: faker.helpers.arrayElement(['Mr', 'Mrs']),
            password: faker.internet.password(),
            birth_month: faker.date.month(),
            birth_date: faker.number.int({ min: 1, max: 28 }),
            birth_year: faker.date.past({ years: 50 }).getFullYear(),
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            company: faker.company.name(),
            address1: faker.location.streetAddress(),
            address2: faker.location.secondaryAddress(),
            country: faker.helpers.arrayElement(['India', 'United States', 'Canada', 'Israel', 'New Zealand', 'Singapore']),
            state: faker.location.state(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
            mobile_number: faker.phone.number(),
        }

        let form = new FormData();

        for (const key in userInfo) {
            form.set(key, userInfo[key]);
        }

        return form
    }

}