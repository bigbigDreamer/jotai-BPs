import {FC, useCallback, useEffect} from "react";
import { Suspense, useState } from "react";
import { flushSync } from 'react-dom';
import { Spin, QRCode, Button } from "antd";
import { useAtomValue } from 'jotai';
import {RESET, useAtomCallback} from "jotai/utils";
import { pageStorageStore } from "Pages/local-cache/store.ts";
import {fetchUrl} from "Pages/local-cache/loader.ts";

import './index.css';

const LocalCache: FC = () => {

    const url = useAtomValue(pageStorageStore);
    const [loading, setLoading] = useState(true);

    const lazyLoadUrl = useAtomCallback<Promise<unknown>, [isAction?: boolean]>(useCallback(async (get, set, isAction = false) => {
        if(isAction) {
            flushSync(() => {
                setLoading( true);
            })
            set(pageStorageStore, RESET);
        }
        const cacheUrl = await get(pageStorageStore);
        if(!cacheUrl) {
            const _url = await fetchUrl();
            set(pageStorageStore, _url);
        }
    }, []));


    useEffect(() => {
        lazyLoadUrl()
            .finally(() => {
                setLoading(pre => !pre);
            })
    }, [])

    return (
        <Suspense fallback={<Spin spinning={true} size={"large"} />}>
            <div className="local-cache-container">
                <Button type="primary" className="w-[134px] mb-[20px]" onClick={() => lazyLoadUrl(true).finally(() => setLoading(false))}>
                    Reset
                </Button>
                <QRCode value={url! as string || 'https://ant.design/'} status={loading ? 'loading' : 'active'}/>
            </div>
        </Suspense>
    )
}


export default LocalCache;
