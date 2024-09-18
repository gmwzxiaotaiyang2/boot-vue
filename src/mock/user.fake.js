import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import Mock from 'mockjs'
import { faker } from '@faker-js/faker'

export default defineFakeRoute([
  {
    url: '/mock/get-user-info',
    response: () => {
      return Mock.mock({
        id: '@guid',
        username: '@first',
        email: '@email',
        avatar: '@image("200x200")',
        role: 'admin',
      })
    },
  },
  {
    url: '/fake/get-user-info',
    response: () => {
      return {
        id: faker.string.uuid(),
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate(),
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        sex: faker.person.sexType(),
        role: 'admin',
      }
    },
  },
  {
    url: '/mock/user/login',
    method: 'post',
    response: ({ body }) => {
      return {
        msg: '',
        code: 200,
        data: Mock.mock({
          username: body.username,
          token: `${body.username}_@string`,
          avatar: 'https://fantastic-admin.github.io/logo.png',
        }),
      }
    },
  },
  {
    url: '/mock/user/permission',
    method: 'get',
    response: ({ headers }) => {
      let permissions = []
      if (headers.token?.indexOf('admin') === 0) {
        permissions = [
          'permission.browse',
          'permission.create',
          'permission.edit',
          'permission.remove',
        ]
      }
      else if (headers.token?.indexOf('test') === 0) {
        permissions = [
          'permission.browse',
        ]
      }
      return {
        msg: '',
        code: 0,
        data: {
          permissions,
        },
      }
    },
  },
  {
    url: '/mock/user/password/edit',
    method: 'post',
    response: () => {
      return {
        msg: '',
        code: 0,
        data: {
          isSuccess: true,
        },
      }
    },
  },
])
