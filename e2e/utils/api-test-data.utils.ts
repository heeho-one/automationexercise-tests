import { faker } from '@faker-js/faker';
import { RegisterRequest } from '../interfaces/api/register-request.interface';

export class APITestDataUtils {

    static generateRegisterUserPayload(): RegisterRequest {
        return  {
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

    }

    static convertToFormData(generatedTestData: Record<string, any>): FormData {
        let form = new FormData();

        for (const key in generatedTestData) {
            form.set(key, generatedTestData[key]);
        }

        return form;
    }

}