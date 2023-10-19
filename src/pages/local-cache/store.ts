import { atomWithStorage } from 'jotai/utils';
import localforage from "localforage";
import to from 'await-to-js';

const localforageInstance = localforage.createInstance({
    storeName: 'LocalPageStore',
    version: 1
})
const memoryCache = new Map();
const localForageStore: Parameters<typeof atomWithStorage>[2] = {
    async setItem(key, value) {
        const [err] =  await to(localforageInstance.setItem(key, value));
        if(err) {
            memoryCache.set(key, value);
        }
    },
    async getItem(key) {
        const [err, result] =  await to(localforageInstance.getItem(key));
        if(err) {
            return memoryCache.get(key) || null;
        }
        return  result
    },

    async removeItem(key) {
        const [err] =  await to(localforageInstance.removeItem(key));
        if(err) {
            memoryCache.delete(key);
        }
    }
}

export const pageStorageStore = atomWithStorage('LocalCache', null, localForageStore)



