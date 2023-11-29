<script setup>
import { UserCircleIcon, ChevronDownIcon } from 'tdesign-icons-vue-next';
import { useUserStore } from "@/store"
import { MessagePlugin } from 'tdesign-vue-next';


const router = useRouter()
const userStore = useUserStore()


//前往个人中心
const toPersonalCenter = () => { }

//登出
const handleLogout = () => {
    userStore.logout()
    MessagePlugin.success("已退出")
    router.push({ path: "/login" })
}

</script>


<template>
    <t-head-menu>
        <template #logo>
            <img width="136" class="logo" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />
        </template>
        <template #operations>
            <t-space size="medium">
                <t-dropdown trigger="click" minColumnWidth="100px" placement="bottom">
                    <t-button variant="text">
                        <template #icon>
                            <UserCircleIcon />
                        </template>
                        <span>{{ userStore.userInfo.name }}</span>
                        <template #suffix>
                            <ChevronDownIcon />
                        </template>
                    </t-button>
                    <t-dropdown-menu>
                        <t-dropdown-item @click="toPersonalCenter" style="text-align: center">个人中心</t-dropdown-item>
                        <t-dropdown-item @click="handleLogout" style="text-align: center">退出登录</t-dropdown-item>
                    </t-dropdown-menu>
                </t-dropdown>
            </t-space>
        </template>
    </t-head-menu>
</template>



<style lang="scss" scoped>
::v-deep .t-head-menu__inner {
    padding-right: 20px;
}
</style>