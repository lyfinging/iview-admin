import request from '@/utils/request'

export function login(data) {
 
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

export function getInfo(data) {
  return request({
    url: '/api/user/info',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'post'
  })
}
