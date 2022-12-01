<script setup></script>

<template>
  <div class="mt-12">
    <form
      class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
      @submit.prevent=""
    >
      <div class="space-y-6">
        <div class="mb-6">
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Username</label
          >
          <input
            type="text"
            id="default-input"
            v-model="username"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Password</label
          >
          <input
            type="text"
            id="default-input"
            v-model="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mt-4">
          <button
            type="submit"
            @click="login"
            class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// const axios = require('axios').default;
import axios from "axios";
export default {
  data() {
    return { username: this.username, password: this.password };
  },
  methods: {
    login() {
      axios
        .post("http://127.0.0.1:8000/api/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.data);
          this.$router.push('/');

        })
        .catch((err) => {
          console.err(res);
        });
    },
  },
};
</script>
