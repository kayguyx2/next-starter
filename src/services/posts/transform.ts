import { AxiosResponse } from 'axios'

import { ResPosts } from './type'

export const transformPosts = (response: AxiosResponse<ResPosts>): ResPosts => {
  const results = response.data
  return results.map((result) => {
    return {
      userId: result?.userId || 0,
      id: result?.id || 0,
      title: result?.title || '',
      body: result?.body || '',
    }
  })
}
