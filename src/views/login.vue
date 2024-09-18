<template>
  <div class="login-frame">
    <div class="system-logo">
      <div>
        扬州大自然
      </div>
    </div>
    <div class="login-input">
      <div class="input-body">
        <h4>欢迎使用 ******* 系统！</h4>
        <el-input>niaho</el-input>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-frame {
  display: grid;
  grid-template-columns: minmax(250px, 50%) 1fr;
  min-width: 800px;
  min-height: 500px;

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
    margin: 20px;
  }
}
</style>
