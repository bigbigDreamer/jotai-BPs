import { faker} from '@faker-js/faker';
interface User {
}

export function createRandomUser(): User {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
        bio: faker.person.bio(),
        blog: faker.internet.url()
    };
}


export function genUsers(number = 10) {
    let arr = [];
    for (let i = 0; i < number; i ++) {
        arr.push(createRandomUser())
    }

    return arr;
}
