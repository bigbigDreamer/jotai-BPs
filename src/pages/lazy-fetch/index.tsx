import {FC, useCallback, useEffect} from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Divider, List, Skeleton, Card, Button, message } from 'antd';
import {useAtomCallback} from "jotai/utils";
import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { genUsers } from "Pages/lazy-fetch/loader";
import { sleep } from "../../utils";
import  { globalData } from './store.ts'

import './index.css';
const LazyFetch: FC = () => {

    /**
     * If you want get truly data, you should use "useAtom" or "useAtomValue" mount atom
     * as subscribe, when data is update can repaint UI after publish "data update" with some actions
     */
    const [_globalData, setData] = useAtom(globalData);

    const loadMoreData = useAtomCallback(useCallback(async (get, set) => {
        const _data = get(globalData);
        await sleep(1500);
        set(globalData, {data: [..._data.data, ...genUsers()]})
        message.success("data load success!")
    }, []));

    useEffect(() => {
        loadMoreData()
    }, [])

    const handleReset = () => {
        setData(RESET);
        loadMoreData()
    }

    return (
        <div className="lazy-fetch-demo">
            <Card title="Lazy Fetch Demo List" bordered={false} extra={<Button type="primary" ghost onClick={handleReset}>Reset</Button>}>
                <div
                    id="scrollableDiv"
                    style={{
                        height: 400,
                        overflow: 'auto',
                        padding: '0 16px',
                        border: '1px solid rgba(140, 140, 140, 0.35)',
                    }}
                >
                    {
                        _globalData.data.length < 1 ? "Data Loading......" :   <InfiniteScroll
                            dataLength={_globalData.data.length}
                            next={loadMoreData}
                            hasMore={_globalData.data.length < 100}
                            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                            scrollableTarget="scrollableDiv"
                        >
                            <List
                                dataSource={_globalData.data}
                                renderItem={(item: any) => (
                                    <List.Item key={item.email}>
                                        <List.Item.Meta
                                            avatar={<Avatar src={item.avatar} />}
                                            title={<a href={item.blog}>{item.username}</a>}
                                            description={item.email}
                                        />
                                        <div>{item.bio}</div>
                                    </List.Item>
                                )}
                            />
                        </InfiniteScroll>
                    }
                </div>
            </Card>
        </div>
    )
}


export  default LazyFetch;
