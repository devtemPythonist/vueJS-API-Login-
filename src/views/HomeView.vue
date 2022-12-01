<script setup>
</script>

<template>
  <main>

    <nav class="p-2">
        <RouterLink
          class="
            px-4
            py-2
            mr-4
            bg-indigo-600
            hover:bg-indigo-800
            rounded
            text-white
          "          
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          to="/skills"
          class="
            px-4
            py-2
            mr-4
            bg-indigo-600
            hover:bg-indigo-800
            rounded
            text-white
          "
          >Skills</RouterLink
        >
        <div class="flex justify-end m-2 p-2">
      <button @click="logout" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Logout</button>
    </div>
      </nav>

    <div class="mt-12">
    <strong><h1>Home page</h1></strong>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, aspernatur asperiores! Saepe ipsam neque praesentium voluptatum, velit quam porro incidunt pariatur repudiandae, dolorem mollitia voluptates, laboriosam quisquam quibusdam commodi ab ea? Ducimus delectus animi iure at obcaecati consequuntur rem facere.</p>
  </div>
</main>
</template>

<script>
export default {
  methods: {
    logout() {
          localStorage.removeItem("token");
          this.$router.push('/login');
    }
  },
};
</script>