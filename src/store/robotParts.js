const images = require.context("@/assets/images", true, /\.webp$/);

export default {
  namespaced: true,
  state: () => ({
    parts: {
      heads: [
        {
          id: 1,
          description:
            "A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",
          title: "Large Cyclops",
          src: images("./head-big-eye.webp"),
          type: "heads",
          cost: 1225.5
        },
        {
          id: 2,
          description:
            "A friendly robot head with two eyes and a smile -- great for domestic use.",
          title: "Friendly Bot",
          src: images("./head-friendly.webp"),
          cost: 945.0,
          type: "heads",
          onSale: true
        },
        {
          id: 3,
          description:
            "A large three-eyed head with a shredder for a mouth -- great for crushing light medals or shredding documents.",
          title: "Shredder",
          src: images("./head-shredder.webp"),
          type: "heads",
          cost: 1275.5
        },
        {
          id: 4,
          description: "A simple single-eyed head -- simple and inexpensive.",
          title: "Small Cyclops",
          src: images("./head-single-eye.webp"),
          type: "heads",
          cost: 750.0
        },
        {
          id: 5,
          description:
            "A robot head with three oscillating eyes -- excellent for surveillance.",
          title: "Surveillance Bot",
          src: images("./head-surveillance.webp"),
          type: "heads",
          cost: 1255.5
        }
      ],
      arms: [
        {
          id: 1,
          description:
            "An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",
          title: "Articulated",
          src: images("./arm-articulated-claw.webp"),
          type: "arms",
          cost: 275
        },
        {
          id: 2,
          description:
            "An arm with two independent claws -- great when you need an extra hand. Need four hands? Equip your bot with two of these arms.",
          title: "Two Clawed",
          src: images("./arm-dual-claw.webp"),
          type: "arms",
          cost: 285
        },
        {
          id: 3,
          description: "A telescoping arm with a grabber.",
          title: "Grabber",
          src: images("./arm-grabber.webp"),
          type: "arms",
          cost: 205.5
        },
        {
          id: 4,
          description:
            "An arm with a propeller -- good for propulsion or as a cooling fan.",
          title: "Propeller",
          src: images("./arm-propeller.webp"),
          type: "arms",
          cost: 230,
          onSale: true
        },
        {
          id: 5,
          description:
            "A short and stubby arm with a claw -- simple, but cheap.",
          title: "Stubby Claw",
          src: images("./arm-stubby-claw.webp"),
          type: "arms",
          cost: 125
        }
      ],
      torsos: [
        {
          id: 1,
          description:
            "A torso that can bend slightly at the waist and equiped with a heat guage.",
          title: "Flexible Gauged",
          src: images("./torso-flexible-gauged.webp"),
          type: "torsos",
          cost: 1575
        },
        {
          id: 2,
          description: "A less flexible torso with a battery gauge.",
          title: "Gauged",
          src: images("./torso-gauged.webp"),
          type: "torsos",
          cost: 1385
        },
        {
          id: 2,
          description: "A simple torso with a pouch for carrying items.",
          title: "Gauged",
          src: images("./torso-pouch.webp"),
          type: "torsos",
          cost: 785,
          onSale: true
        }
      ],
      bases: [
        {
          id: 1,
          description:
            "A two wheeled base with an accelerometer for stability.",
          title: "Double Wheeled",
          src: images("./base-double-wheel.webp"),
          type: "bases",
          cost: 895
        },
        {
          id: 2,
          description:
            "A rocket base capable of high speed, controlled flight.",
          title: "Rocket",
          src: images("./base-rocket.webp"),
          type: "bases",
          cost: 1520.5
        },
        {
          id: 3,
          description:
            "A single-wheeled base with an accelerometer capable of higher speeds and navigating rougher terrain than the two-wheeled variety.",
          title: "Single Wheeled",
          src: images("./base-single-wheel.webp"),
          type: "bases",
          cost: 1190.5
        },
        {
          id: 4,
          description: "A spring base - great for reaching high places.",
          title: "Spring",
          src: images("./base-spring.webp"),
          type: "bases",
          cost: 1190.5
        },
        {
          id: 5,
          description:
            "An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.",
          title: "Triple Wheeled",
          src: images("./base-triple-wheel.webp"),
          type: "bases",
          cost: 700.5
        }
      ]
    },
    selectedParts: {
      head: {
        id: 1,
        description:
          "A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.",
        title: "Large Cyclops",
        src: images("./head-big-eye.webp"),
        type: "heads",
        cost: 1225.5
      },
      leftArm: {
        id: 1,
        description:
          "An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",
        title: "Articulated",
        src: images("./arm-articulated-claw.webp"),
        type: "arms",
        cost: 275
      },
      torso: {
        id: 1,
        description:
          "A torso that can bend slightly at the waist and equiped with a heat guage.",
        title: "Flexible Gauged",
        src: images("./torso-flexible-gauged.webp"),
        type: "torsos",
        cost: 1575
      },
      rightArm: {
        id: 1,
        description:
          "An articulated arm with a claw -- great for reaching around corners or working in tight spaces.",
        title: "Articulated",
        src: images("./arm-articulated-claw.webp"),
        type: "arms",
        cost: 275
      },
      base: {
        id: 1,
        description: "A two wheeled base with an accelerometer for stability.",
        title: "Double Wheeled",
        src: images("./base-double-wheel.webp"),
        type: "bases",
        cost: 895
      }
    },
    robotUpdated: false
  }),
  mutations: {
    UPDATE_HEAD(state, payload) {
      state.selectedParts.head = payload;
      state.robotUpdated = true;
    },
    UPDATE_TORSO(state, payload) {
      state.selectedParts.torso = payload;
      state.robotUpdated = true;
    },
    UPDATE_LEFT_ARM(state, payload) {
      state.selectedParts.leftArm = payload;
      state.robotUpdated = true;
    },
    UPDATE_RIGHT_ARM(state, payload) {
      state.selectedParts.rightArm = payload;
      state.robotUpdated = true;
    },
    UPDATE_BASE(state, payload) {
      state.selectedParts.base = payload;
      state.robotUpdated = true;
    }
  },
  actions: {
    UPDATE_HEAD({ commit }, payload) {
      commit("UPDATE_HEAD", payload);
    },
    UPDATE_TORSO({ commit }, payload) {
      commit("UPDATE_TORSO", payload);
    },
    UPDATE_LEFT_ARM({ commit }, payload) {
      commit("UPDATE_LEFT_ARM", payload);
    },
    UPDATE_RIGHT_ARM({ commit }, payload) {
      commit("UPDATE_RIGHT_ARM", payload);
    },
    UPDATE_BASE({ commit }, payload) {
      commit("UPDATE_BASE", payload);
    }
  },
  getters: {
    PARTS(state) {
      return state.parts;
    },
    SELECTED_PARTS(state) {
      return state.selectedParts;
    },
    ROBOT_UPDATED(state) {
      return state.robotUpdated;
    }
  }
};
