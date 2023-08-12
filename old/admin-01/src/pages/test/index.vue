<template>
  <div>
    <button @click="queryAllUser">查询所有用户</button>
  </div>
</template>

<script>
import { doGet } from "@/utils/ajax-util";
import axios from "axios";

export default {
  methods: {
    async queryAllUser() {
      console.log("查询所有用户");
      //   let res = await doGet("http://127.0.0.1:8181/user/all");
      let res = await axios.get("http://127.0.0.1:8181/user/all");
      console.log("请求结果:", res.data);

      // XMLHttpRequest
      //   const xhr = new XMLHttpRequest();

      //   xhr.onreadystatechange = function (event) {
      //     if (xhr.readyState == 0) {
      //       console.log("xhr.readyState == 0 请求初始化");
      //     }
      //     if (xhr.readyState == 1) {
      //       console.log("xhr.readyState == 1 服务器已建立连接");
      //     }
      //     if (xhr.readyState == 2) {
      //       console.log("xhr.readyState == 2 请求已接收");
      //     }
      //     if (xhr.readyState == 3) {
      //       console.log("xhr.readyState == 3 请求已完成，且响应已就绪");
      //     }
      //     if (xhr.readyState == 4) {
      //       console.log("xhr.readyState == 4 响应已接收");
      //       if (xhr.status == 200) {
      //         console.log("响应的内容: ", JSON.parse(xhr.responseText));
      //       }
      //     }
      //   };

      //   xhr.open("GET", "http://127.0.0.1:8181/user/all", true);
      //   xhr.send();
    },
  },
};
</script>

<style>
</style>