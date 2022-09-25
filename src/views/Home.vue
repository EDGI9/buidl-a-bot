<template>
  <div>
    <v-container text-xs-center pt-5 mt-5>
      <v-layout column align-center justify-center fill-height>
        <v-flex display-1 mt-4>
          <RobotPreview v-if="ROBOT_UPDATED" :robot-data="SELECTED_PARTS" />
          <v-img
            v-else
            alt="Buildbot Logo"
            contain
            src="@/assets/images/head-friendly.webp"
            lazy-src="@/assets/images/head-friendly.webp"
            max-width="300"
            transition="scale-transition"
          />
        </v-flex>

        <v-spacer class="my-4"></v-spacer>

        <v-flex mt-4>
          <h1 v-if="ROBOT_UPDATED">Congratulations, here is your bot!</h1>
          <h1 v-else>Hi, let's build your bot</h1>
        </v-flex>

        <v-spacer class="my-4"></v-spacer>

        <v-flex display-1 mt-4>
          <v-btn to="BuildBot" elevation="1" color="primary">
            <span v-if="ROBOT_UPDATED" class="mr-2">Rebuild your bot</span>
            <span v-else class="mr-2">Get Started</span>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import RobotPreview from "@/components/RobotPreview.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    RobotPreview
  },
  computed: {
    ...mapGetters("robotParts/", ["ROBOT_UPDATED", "SELECTED_PARTS"])
  }
};
</script>
