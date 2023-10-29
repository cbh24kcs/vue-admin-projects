<script setup lang="ts">
import LoginParticles from "@/components/Particles/LoginParticles.vue";
import { LockOnIcon, UserIcon } from 'tdesign-icons-vue-next'
import instance from "@/utils/request.ts";
import { login } from "@/api/user/user"
// import { APIS } from '@/api'
// import { useFetch } from "@vueuse/core";

const handleLogin = async () => {
  const res = await login({ account: "admin", password: "123" });

  // const { data } = useFetch(APIS.user.LOGIN).post().json()
}

</script>

<template>
  <!-- 登录页面粒子背景效果11 -->
  <!-- <LoginParticles /> -->

  <div class="wrap">
    <div class="container">
      <div class="container_title">
        <div>登录到</div>
        <div>DPX JIRA SYSTEM</div>
      </div>
      <t-form labelWidth="0" class="form">
        <t-form-item>
          <t-input placeholder="请输入用户名" size="large">
            <template #prefix-icon>
              <UserIcon />
            </template>
          </t-input>
        </t-form-item>

        <t-form-item>
          <t-input type="password" placeholder="请输入密码" size="large">
            <template #prefix-icon>
              <LockOnIcon />
            </template>
          </t-input>
        </t-form-item>

        <t-form-item>
          <div class="item_select">
            <t-checkbox>记住账号</t-checkbox>
            <t-link theme="primary">忘记密码</t-link>
          </div>
        </t-form-item>

        <t-form-item>
          <t-button class="item_button" @click="handleLogin">登录</t-button>
        </t-form-item>
      </t-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  height: 100vh;
  width: 100vw;
  display: flex;
  background-image: url("@/assets/img/bg_login.jpg");
  background-size: cover;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  padding: 25px;
  box-shadow: 0 0 10px 0 #acacac;
  background-color: transparent;
  backdrop-filter: blur(8px);

  &_title {
    width: 400px;
    margin-bottom: 60px;

    div {
      font-family: "Microsoft YaHei";
      font-size: 36px;
    }
  }
}

.form {
  width: 400px;
}

.item {
  &_select {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &_button {
    width: 100%;
  }
}
</style>
