import { PayloadAction } from '@reduxjs/toolkit'
import { ICoreState } from './type'

export const coreReducers = {
  setStatus: (state: ICoreState, action: PayloadAction<string>) => {
    state.status = action.payload
  },
  setLoading: (state: ICoreState, action: PayloadAction<boolean>) => {
    state.loading = action.payload
  },
}
