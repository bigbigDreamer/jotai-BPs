import  { atomWithReset }  from 'jotai/utils';


export  const globalData = atomWithReset<{
    data: any[];
}>({
    data: []
})
