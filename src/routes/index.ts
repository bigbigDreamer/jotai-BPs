import  type { RouteItemUnionType } from 'react-launcher';
import Home from 'Pages/home';
import LazyFetch from "Pages/lazy-fetch";

export default [
    { title: '首页', component:Home, path: '/'  },
    { title: 'LazyFetch', component:LazyFetch, path: '/lazy-fetch'  },
] as RouteItemUnionType[]
