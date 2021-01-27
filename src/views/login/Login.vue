<template>
  <div class="login">
    <el-row>
      <el-col :span="8" :offset="14">
        <el-card shadow="always">
          <el-form>
            <el-input
              class="username"
              v-model="username"
              placeholder="账号"
            ></el-input>
            <el-input
              class="password"
              v-model="password"
              placeholder="密码"
              show-password
            ></el-input>
            <el-button type="primary" @click="onSubmit()">登录</el-button>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="stylus">
.login
  justify-items: center;
  align-items: center;
  .username, .password
    display:block;
    width: 90%;
    margin: 5px;
</style>
