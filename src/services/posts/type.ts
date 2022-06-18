import { AxiosResponse } from 'axios'

// Get Post type
export type GetPosts = () => Promise<AxiosResponse<ResPosts, any>>
export type ResPosts = ResultPost[]
export interface ResultPost {
  userId: number
  id: number
  title: string
  body: string
}
