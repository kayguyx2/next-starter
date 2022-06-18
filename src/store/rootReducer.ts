import { combineReducers } from '@reduxjs/toolkit'

import coreReducer from '@/store/modules/core'

const rootReducer = combineReducers({
  core: coreReducer,
})

export default rootReducer
