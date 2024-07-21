
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: any = {
    value: [
        { name: 'Karthik', age: 31, mobile: '123-213-2311' },
        { name: 'John', mobile: '123-456-7890', age: 30 },
        { name: 'Jane', mobile: '123-456-7891', age: 25 },
        { name: 'Alice', mobile: '123-456-7892', age: 28 },
        { name: 'Bob', mobile: '123-456-7893', age: 25 },
    ]
}

export const dataSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getData: (state, action) => {
            console.log('state', state);
            state.value = action.payload
        }

    }
});

export const { getData } = dataSlice.actions;

export default dataSlice.reducer;