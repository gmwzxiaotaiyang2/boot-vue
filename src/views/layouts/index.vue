<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { userStore } from '@/stores/userStore'

const user = userStore()
const title = ref(import.meta.env.VITE_APP_TITLE)

function handleMenuClick(command) {
  switch (command) {
    case 'logout':{
      user.logout()
      break
    }
  }
}
</script>

<template>
  <el-container>
    <el-header>
      <div class="header-left">
        <div class="title">
          {{ title }}
        </div>
        <div class="menu">
          <el-menu
            :router="true"
            default-active="/index"
            background-color="#fff0"
            text-color="#fff"
            active-text-color="#000"
            mode="horizontal"
            :ellipsis="false"
          >
            <el-menu-item index="/underway">
              进行中
            </el-menu-item>
            <el-menu-item index="/test">
              已预约
            </el-menu-item>
            <el-menu-item index="/index">
              历史
            </el-menu-item>
          </el-menu>
        </div>
      </div>

      <div class="user flex flex-justify-center">
        <el-dropdown @command="handleMenuClick">
          <span class=" username">
            <img :src="user.avatar" alt="" width="20px">
            {{ user.username }}
            <el-icon class="el-icon--right">
              <ArrowDown />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="logout">
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<style scoped>
/* 这里放置组件的样式 */
.head {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  color: #d6d6d6;
  background-color: rgb(29 60 134);
}

.el-container {
  width: 100vw;
  height: 100vh;
}

.el-header {
  display: flex;
  place-content: center space-between;
  background-color: #3894ff;
}

.header-left {
  display: flex;
  align-content: start;
  margin: auto 0;
  font-size: large;
  font-weight: bold;
  color: #fff;
}

.title {
  margin: auto 0;
}

.menu {
  margin-left: 50px;
}

.username {
  margin: auto 0;
  font-size: 15px;
  font-weight: bold;
  color: black;
}
</style>
