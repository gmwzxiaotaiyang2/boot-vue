import api from '../index'

export default {
  login(data) {
    return api.post('/user/login', data)
  },
  login2(data) {
    console.log(data)
    return api.post('/usasdfasdfadsfasdfer/login')
  },
}
