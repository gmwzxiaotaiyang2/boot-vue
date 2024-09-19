<script setup>
import Logo from '@/assets/png/logo.png'
import { userStore } from '@/stores/userStore'

const user = userStore()
const router = useRouter()

const username = ref('')
const password = ref('')

function usernameChaged(target) {
  // console.log(target)
}

function login() {
  user.login({ username: username.value, password: password.value }).then((result) => {
    console.log(result)
    router.push('/')
  }).catch((err) => {
    console.log(err)
  })
}
</script>

<template>
  <div class=" flex justify-center h-screen flex-wrap flex-items-center">
    <div class="login-frame">
      <div class="system-logo">
        <div>
          <!-- 扬州大自然 -->
          <img :src="Logo">
        </div>
      </div>
      <div class="login-input">
        <div class="input-body">
          <h4>欢迎使用 ******* 系统！</h4>
          <el-input v-model="username" @change="usernameChaged">
            <template #prefix>
              <div class="i-mdi:user w-1em h-1em" />
            </template>
          </el-input>
          <el-input v-model="password" type="password">
            <template #prefix>
              <div class="i-mdi:password w-1em h-1em" />
            </template>
          </el-input>
          <el-button type="primary" width="100%" @click="login">
            登录
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-frame {
  display: grid;
  grid-template-columns: minmax(250px, 50%) 1fr;
  min-width: 800px;
  height: 500px;

  // background-color: rgb(206 206 206);
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 30%);
}

.system-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(238 238 238);
  border-radius: 20px 0 0 20px;
}

.login-input {
  width: 100%;
  height: 100%;
  margin: auto;

  .input-body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 300px;
    padding: 20% 50px;
  }
}
</style>
