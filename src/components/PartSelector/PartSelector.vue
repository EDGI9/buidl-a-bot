<template>
  <div class="c-part-selector d-flex" :class="flexDirection">
    <v-btn
      @click="selectPreviousPart()"
      class="c-part-selector__button primary"
      :height="buttonHeight"
    >
      <v-icon v-if="orientation == 'vertical'">mdi-chevron-up</v-icon>
      <v-icon v-else>mdi-chevron-left</v-icon>
    </v-btn>
    <div class="c-part-selector__image-container">
      <v-img
        contain
        class="c-part-selector__image mb-auto mt-auto"
        transition="scale-transition"
        :class="position"
        :src="selectedPart.src"
        :lazy-src="selectedPart.src"
        :alt="selectedPart.title"
        :title="selectedPart.title"
      />
      <span class="c-part-selector__label" v-show="selectedPart.onSale">
        Sale!
      </span>
    </div>
    <v-btn
      @click="selectNextPart()"
      class="c-part-selector__button primary"
      :height="buttonHeight"
    >
      <v-icon v-if="orientation == 'vertical'">mdi-chevron-down</v-icon>
      <v-icon v-else>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPartIndex: 0
    };
  },
  props: {
    parts: {
      type: Array,
      default: () => [],
      required: true
    },
    position: {
      type: String,
      validator(value) {
        return ["left", "right", "top", "center", "bottom"].includes(value);
      }
    },
    orientation: {
      type: String,
      default: "horizontal"
    }
  },
  computed: {
    selectedPart() {
      return this.parts[this.selectedPartIndex];
    },
    flexDirection() {
      return this.orientation == "vertical" ? "flex-column" : "c-part-selector--horizontal flex-row";
    },
    buttonHeight() {
      return this.orientation == "horizontal" ? "100%" : "";
    }
  },
  methods: {
    emitUpdatedPart() {
      this.$emit("partSelected", this.selectedPart);
    },
    selectNextPart() {
      let incrementedIndex = this.selectedPartIndex + 1;
      this.selectedPartIndex =
        incrementedIndex > this.parts.length - 1 ? 0 : incrementedIndex;
    },
    selectPreviousPart() {
      let deprecatedIndex = this.selectedPartIndex - 1;
      this.selectedPartIndex =
        deprecatedIndex < 0 ? this.parts.length - 1 : deprecatedIndex;
    }
  },
  watch: {
    selectedPartIndex() {
      this.emitUpdatedPart();
    }
  }
};
</script>

<style lang="scss" scoped>
.c-part-selector {
  border-radius: 5px;
  &.c-part-selector--horizontal {
    .c-part-selector__button {
      min-width: 40px;
      padding: 0;
    }
  }

  .c-part-selector__image-container {
    position: relative;
    border: 1px solid rgb(166, 183, 230);
  }

  .c-part-selector__image {
    @media only screen and (max-width: 600px) {
      max-width: 110px;
    }
    max-width: 165px;

    &.left {
      transform: rotate(-90deg);
    }
    &.right {
      transform: rotate(90deg);
    }
  }

  .c-part-selector__label {
    background-color: red;
    color: white;
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 0 20px;
    font-size: 18px;
  }
}
</style>
