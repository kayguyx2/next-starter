import { GetPosts } from './type'

import httpClient from '../httpClient'

export const getPosts: GetPosts = () => {
  return httpClient.post('https://jsonplaceholder.typicode.com/posts')
}
