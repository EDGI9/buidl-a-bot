<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Buildbot Logo"
          class="shrink mr-2"
          contain
          src="@/assets/images/head-friendly.webp"
          lazy-src="@/assets/images/head-friendly.webp"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn to="Home" text>
        <span class="mr-2">Home</span>
      </v-btn>

      <v-btn to="BuildBot" text>
        <span class="mr-2">Build a Bot</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer>
      <v-container>
        <v-layout column align-center justify-center>
          <v-flex>&copy; Edgar Dias - 2019</v-flex>
        </v-layout>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
