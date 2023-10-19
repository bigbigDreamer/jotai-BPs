import { faker} from '@faker-js/faker';
import {sleep} from "../../utils";

export function createRandomUrl(): string {
    return faker.internet.url()
}

export async  function fetchUrl() {
    await sleep(1500);
    return createRandomUrl();
}
