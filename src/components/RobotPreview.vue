<template>
  <div class="c-robot-preview" :class="{ 'c-robot-preview--small': isSmall }">
    <div class="c-robot-preview__top-row">
      <img class="c-robot-preview__image" :src="robotData.head.src" />
    </div>
    <div class="c-robot-preview__middle-row">
      <img
        class="c-robot-preview__image c-robot-preview__image--left"
        :src="robotData.leftArm.src"
      />
      <img class="c-robot-preview__image" :src="robotData.torso.src" />
      <img
        class="c-robot-preview__image c-robot-preview__image--right"
        :src="robotData.rightArm.src"
      />
    </div>
    <div class="c-robot-preview__bottom-row">
      <img class="c-robot-preview__image" :src="robotData.base.src" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RobotPreview",
  props: {
    "robot-data": {
      type: Object,
      required: true,
      default: () => {}
    },
    "is-small": {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.c-robot-preview {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: auto;
  max-width: 600px;

  &.c-robot-preview--small {
    width: 210px;
    height: 210px;
  }

  .c-robot-preview__top-row,
  .c-robot-preview__middle-row,
  .c-robot-preview__bottom-row {
    display: flex;
  }

  .c-robot-preview__top-row,
  .c-robot-preview__bottom-row {
    justify-content: space-around;
  }
  .c-robot-preview__middle-row {
    justify-content: center;
  }

  .c-robot-preview__image {
    width: 25%;
  }
  .c-robot-preview__image--left {
    transform: rotate(-90deg);
  }
  .c-robot-preview__image--right {
    transform: rotate(90deg);
  }
}
</style>
