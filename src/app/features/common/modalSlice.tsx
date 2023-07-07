//path: src\app\features\common\modalSlice.tsx

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalState {
    title: string;
    isOpen: boolean;
    bodyType: string;
    size: string;
    extraObject: Record<string, unknown>;
}

interface ModalPayload {
    title: string;
    bodyType: string;
    size: string;
    extraObject: Record<string, unknown>;
}

const initialState: ModalState = {
    title: "", 
    isOpen: false,
    bodyType: "",
    size: "",
    extraObject: {},
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<ModalPayload>) => {
            const {title, bodyType, extraObject, size} = action.payload
            state.isOpen = true
            state.bodyType = bodyType
            state.title = title
            state.size = size || 'md'
            state.extraObject = extraObject
        },
        closeModal: (state) => {
            state.isOpen = false
            state.bodyType = ""
            state.title = ""
            state.size = ""
            state.extraObject = {}
        },
    }
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
