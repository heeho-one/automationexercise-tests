import { faker } from '@faker-js/faker';
import { UserAccountInformation } from '../interfaces/ui/user-account-information';

export class UITestDataUtils {

    static generateRandomUserAccountInformation(): UserAccountInformation {
        return {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            title: faker.helpers.arrayElement(['Mr.', 'Mrs.']),
            password: faker.internet.password(),
            birthMonth: faker.date.month(),
            birthDay: faker.number.int({ min: 1, max: 28 }),
            birthYear: faker.date.past({ years: 50 }).getFullYear(),
            newsletter: faker.datatype.boolean(),
            offers: faker.datatype.boolean(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            company: faker.company.name(),
            address1: faker.location.streetAddress(),
            address2: faker.location.secondaryAddress(),
            country: faker.helpers.arrayElement(['India', 'United States', 'Canada', 'Israel', 'New Zealand', 'Singapore']),
            state: faker.location.state(),
            city: faker.location.city(),
            zipCode: faker.location.zipCode(),
            mobileNumber: faker.phone.number(),
        }
    }

}