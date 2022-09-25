<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header color="primary"
        >Preview</v-expansion-panel-header
      >
      <v-expansion-panel-content>
        <slot>
          <div>Default content</div>
        </slot>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "CollapsableSection"
};
</script>
