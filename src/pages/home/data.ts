export default {
    menus: [
        {
            title: 'Lazy FetchData',
            path: '/lazy-fetch',
            desc: 'Introducing how to use jotai for lazy requests in production practice'
        },
        {
            title: 'Local Cache',
            path: '/local-cache',
            desc: 'Introducing how to use jotai and Storage cache user data'
        },
        {
            title: 'Dynamic Atom Key',
            path: '/dynamic-atom-key',
            desc: 'Only Use One Atom Import Instance, Transfer multi Atom Instances'
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
