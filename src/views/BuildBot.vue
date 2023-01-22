<template>
  <v-container text-xs-center pt-5 mt-5>
    <v-layout column align-center justify-center>
      <v-flex mt-4>
        <h1>Customize your bot</h1>
      </v-flex>
    </v-layout>
    <v-layout column align-center justify-center>
      <v-spacer class="my-4"></v-spacer>
      <v-flex>
        <v-layout row align-stretch justify-center>
          <v-flex>
            <CollapsableSection>
              <RobotPreview :robot-data="SELECTED_PARTS" :is-small="true" />
            </CollapsableSection>
          </v-flex>
          <v-flex>
            <RobotBuilder />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RobotBuilder from "@/components/RobotBuilder/RobotBuilder.vue";
import CollapsableSection from "@/components/CollapsableSection/CollapsableSection.vue";
import RobotPreview from "@/components/RobotPreview/RobotPreview.vue";
import { mapGetters } from "vuex";

export default {
  name: "BuildBot",
  components: {
    RobotBuilder,
    CollapsableSection,
    RobotPreview
  },
  computed: {
    ...mapGetters("robotParts/", ["SELECTED_PARTS"])
  }
};
</script>
