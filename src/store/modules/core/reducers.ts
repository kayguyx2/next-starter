import { PayloadAction } from '@reduxjs/toolkit'
import router from 'next/router'

import { ICoreState, IAuthenticatorState } from './type'

import { setCookie, destroyCookie } from '@/lib/cookies'

export const coreReducers = {
  changeLanguage: (state: ICoreState, action: PayloadAction<string>) => {
    destroyCookie(null, 'language')
    setCookie(null, 'language', action.payload, { path: '/' })
    router.push(router.asPath, router.asPath, { locale: action.payload })

    state.language = action.payload
  },
  setAuthenticator: (state: ICoreState, action: PayloadAction<IAuthenticatorState>) => {
    state.authenticator = action.payload
  },
  resetAuthenticator: (state: ICoreState) => {
    state.authenticator = {
      show: false,
      challenge: '',
      clientId: '',
      ref: '',
      userId: '',
    }
  },
  setLoading: (state: ICoreState, action: PayloadAction<boolean>) => {
    state.loading = action.payload
  },
}
