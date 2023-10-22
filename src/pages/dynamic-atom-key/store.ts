import { atomFamily } from 'jotai/utils';
import {WritableAtom, atom} from "jotai";

const keyMapAtom: {
    [StoreKey.CHECK_STORE]: WritableAtom<boolean, boolean[], void>;
    [StoreKey.CONTENT_STORE]: WritableAtom<string, string[], void>
} = {
    CHECK_STORE: atom(false),
    CONTENT_STORE: atom('')
}
export const pageStore = atomFamily<StoreKey, WritableAtom<boolean, boolean[], void> | WritableAtom<string, string[], void>>(key => keyMapAtom[key]);

export enum StoreKey {
    CHECK_STORE = 'CHECK_STORE',
    CONTENT_STORE = 'CONTENT_STORE'
}
