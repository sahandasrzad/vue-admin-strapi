import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    identifier: username,
    password: password
  }
  // console.log("u: "+username+", p: "+password)
  return request({
    url: '/auth/local',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  // console.log("u: "+token)
  return request({
    url: '/users/me',
    method: 'get'
    // headers: {'Authorization': 'Bearer '+token,'Access-Control-Allow-Headers':'*'}
  })
}

