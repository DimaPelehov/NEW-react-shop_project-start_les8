import { createSlice } from '@reduxjs/toolkit'

type LikesType = { [id: number]: boolean }

export const initialState: LikesType = {
    1: true,
    3: true,
}

export const likeSlice = createSlice({
    // назву likeSlice ми придумуємо самі
    name: 'like',
    // name-це унікальний ідентифікатор
    initialState,
    // initialState-значення за замовчуванням
    reducers: {
        // reducers- функція, котра використовується для зміни значення всередині redux(нашого сховища/стейту)
        toggleLikeState: (state, action) => ({
            //toggleLikeState - функція,котра приймає 2 параметра
            ...state,
            //  повертає попередній state
            [action.payload]: !state[action.payload],
            // і попереднє значення state для вказаного id
            // action.payload - це і є id
        }),
    },
})

export const { toggleLikeState } = likeSlice.actions

export default likeSlice.reducer
