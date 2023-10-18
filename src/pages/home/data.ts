export default {
    menus: [
        {
            title: 'Lazy FetchData',
            path: '/lazy-fetch',
            desc: 'Introducing how to use jotai for lazy requests in production practice'
        },
        {
            title: 'Local Cache'
        },
        {
            title: 'Dynamic Atom Key'
        },
        {
            title: 'Customize Jotai Hook'
        },
    ]
} as {
    menus: {
        title: string;
        path: string;
        desc: string;
    }[]
}
