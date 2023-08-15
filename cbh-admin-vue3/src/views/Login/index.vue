<script setup lang="ts">
import LoginParticles from "@/components/Particles/LoginParticles.vue";
import {LockOnIcon, UserIcon} from 'tdesign-icons-vue-next'

</script>


<template>
  <!-- 登录页面粒子背景效果11 -->
  <LoginParticles/>
  <div class="wrap">
    <div class="container_form">
      <t-form labelWidth="0" class="form">
        <t-form-item>
          <t-input placeholder="请输入用户名" size="large">
            <template #prefix-icon>
              <UserIcon/>
            </template>
          </t-input>
        </t-form-item>

        <t-form-item>
          <t-input type="password" placeholder="请输入密码" size="large">
            <template #prefix-icon>
              <LockOnIcon/>
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
          <t-button class="item_button">登录</t-button>
        </t-form-item>
      </t-form>
    </div>

  </div>
</template>


<style lang="scss" scoped>
body {
  background-image: url("@/assets/img/bg.jpg");
  background-size: cover;
}

.wrap {
  height: 100vh;
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container_form {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 400px;
  box-shadow: 0 0 10px 0 #acacac;
  background-color: transparent;
  backdrop-filter: blur(3px);
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


