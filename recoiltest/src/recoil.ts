import { atom, selector } from 'recoil';

export const textState = atom({
   key: 'textState', // unique ID (with respect to other atoms/selectors)
   default: 'abc', // default value (aka initial value)
});

export const textLength = selector({
    key: 'textLength',
    get: ({get}) => {
        const length = get(textState);
        const array = [];
        array.push(length)
        return array;
    }
})