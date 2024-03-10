<template>
  <!--<loading
    v-model:active="isLoading"
    :can-cancel="true"
    :is-full-page="false"
    color="#FFEE08"
  >
    <div class="loading-content" @click="stopLoading">
      <div class="loading-icon">
        <img src="@/assets/coming-soon.svg" alt="Coming Soon" />
      </div>
    </div>
  </loading>  -->
  <router-view />
</template>

<script>
import { mapState } from "vuex";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  data() {
    return {
      // isLoading: true,
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.Modals.loadingOverlay,
    }),
  },
  methods: {
    stopLoading() {
      this.$store.commit("SET_LOADING_OVERLAY", false);
    },
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
