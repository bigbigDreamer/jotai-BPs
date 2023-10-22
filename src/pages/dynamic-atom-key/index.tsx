import {FC, useEffect} from "react";
import {useAtom} from "jotai";

import { pageStore, StoreKey } from "Pages/dynamic-atom-key/store.ts";
import type {WritableAtom} from "jotai";
import  classes from 'clsx';

import './index.css'
const DynamicAtomKey: FC = () => {

    const [checked, setChecked] = useAtom<boolean, [boolean], void>(pageStore(StoreKey.CHECK_STORE) as WritableAtom<boolean, boolean[], void>)
    const [content, setContent] = useAtom<string, [string], void>(pageStore(StoreKey.CONTENT_STORE) as WritableAtom<string, string[], void>)

    const handleCheck = () => {
        setChecked(!checked)

        if(checked) {
            setContent("Not Checked")
        } else {
            setContent("Checked")
        }
    }

    const checkContainerCls = classes('check-container', {
        'check-container-switch': checked
    })


    useEffect(() => () => {
        pageStore.setShouldRemove(() => true);
    })

    return (
        <div className="dynamic-atom-key-container">
            <div className={checkContainerCls} onClick={handleCheck}>
                <div className="check-inner"></div>
            </div>
            <div className="checked-content">
                {content}
            </div>
        </div>
    )
}

export  default DynamicAtomKey;
