import  type { RouteItemUnionType } from 'react-launcher';
import Home from 'Pages/home';
import LazyFetch from "Pages/lazy-fetch";
import LocalCache from "Pages/local-cache";
import DynamicAtomKey from "Pages/dynamic-atom-key";

export default [
    { title: '首页', component:Home, path: '/'  },
    { title: 'LazyFetch', component:LazyFetch, path: '/lazy-fetch'  },
    { title: 'LocalCache', component:LocalCache, path: '/local-cache'  },
    { title: 'DynamicAtomKey', component:DynamicAtomKey, path: '/dynamic-atom-key'  },
] as RouteItemUnionType[]
