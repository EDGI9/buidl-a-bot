<template>
  <v-container text-xs-center>
    <div class="d-flex flex-row justify-center">
      <PartSelector
        :parts="PARTS.heads"
        orientation="horizontal"
        @partSelected="part => UPDATE_HEAD(part)"
      />
    </div>
    <div class="d-flex flex-row justify-center">
      <PartSelector
        :parts="PARTS.arms"
        orientation="vertical"
        position="left"
        @partSelected="part => UPDATE_LEFT_ARM(part)"
      />
      <PartSelector
        :parts="PARTS.torsos"
        orientation="vertical"
        @partSelected="part => UPDATE_TORSO(part)"
      />
      <PartSelector
        :parts="PARTS.arms"
        orientation="vertical"
        position="right"
        @partSelected="part => UPDATE_RIGHT_ARM(part)"
      />
    </div>
    <div class="d-flex flex-row justify-center">
      <PartSelector
        :parts="PARTS.bases"
        orientation="horizontal"
        @partSelected="part => UPDATE_BASE(part)"
      />
    </div>
  </v-container>
</template>

<script>
import PartSelector from "./PartSelector.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "RobotBuilder",
  computed: {
    ...mapGetters("robotParts/", ["PARTS"])
  },
  methods: {
    ...mapActions("robotParts/", [
      "UPDATE_HEAD",
      "UPDATE_TORSO",
      "UPDATE_LEFT_ARM",
      "UPDATE_RIGHT_ARM",
      "UPDATE_BASE"
    ])
  },
  components: {
    PartSelector
  }
};
</script>
