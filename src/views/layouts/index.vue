<script setup>
import { userStore } from '@/stores/userStore'

const user = userStore()
const title = ref(import.meta.env.VITE_APP_TITLE)
</script>

<template>
  <el-container>
    <el-header>
      <div class="title">
        {{ title }}
      </div>

      <div class="user">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ user.username }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>
                Action 4
              </el-dropdown-item>
              <el-dropdown-item divided>
                Action 5
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

.title {
  left: 0;
}

.user {
  right: 0;
}
</style>
