import { createSlice } from '@reduxjs/toolkit'

import { ICoreState } from './type'

import { RootState } from '@/store/index'
import { coreReducers } from '@/store/modules/core/reducers'

export const initialCoreState: ICoreState = {
  language: 'th',
  loading: false,
}

export const slice = createSlice({
  name: 'core',
  initialState: initialCoreState,
  reducers: coreReducers,
})

export const state = (rootState: RootState) => rootState.core

export const coreActions = {
  ...slice.actions,
}

const coreReducer = slice.reducer

export default coreReducer
