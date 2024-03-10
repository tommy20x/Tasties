<template>
  <div id="leaderboard">
    <div class="leaderboard-bg">
      <img src="@/assets/images/dashboard/leaderboard-bg.png" />
    </div>
    <MainNav />
    <DashboardMenu :selected="'leaderboard'" />
    <div class="leaderboard-wrap">
      <div
        class="leaderboard-item"
        v-for="(item, index) of data"
        :key="item.id"
      >
        <div class="order candy" v-if="index + 1 <= 3">
          <img :src="`/images/candy${index + 1}.svg`" />
        </div>
        <div class="order" v-else>#{{ index + 1 }}</div>
        <div class="name">{{ item.name }}</div>
        <div class="score">{{ item.score }} Score</div>
      </div>
    </div>
    <footer>
      <FooterContent />
    </footer>
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import DashboardMenu from "@/components/DashboardMenu.vue";
import FooterContent from "@/components/FooterContent.vue";
export default {
  components: { MainNav, DashboardMenu, FooterContent },
  data() {
    return {
      data: [
        {
          id: 1,
          name: "Kek 1",
          score: 200,
        },
        {
          id: 2,
          name: "Kek 2",
          score: 450,
        },
        {
          id: 3,
          name: "Kek 3",
          score: 320,
        },
        {
          id: 4,
          name: "Kek 4",
          score: 600,
        },
        {
          id: 5,
          name: "Kek 5",
          score: 500,
        },
        {
          id: 6,
          name: "Kek 6",
          score: 1235,
        },
        {
          id: 7,
          name: "Kek 7",
          score: 746,
        },
        {
          id: 8,
          name: "Kek 8",
          score: 314,
        },
        {
          id: 9,
          name: "Kek 9",
          score: 450,
        },
        {
          id: 10,
          name: "Kek 10",
          score: 515,
        },
        {
          id: 11,
          name: "Kek 11",
          score: 278,
        },
        {
          id: 12,
          name: "Kek 12",
          score: 450,
        },
        {
          id: 13,
          name: "Kek 13",
          score: 390,
        },
        {
          id: 14,
          name: "Kek 14",
          score: 100,
        },
        {
          id: 15,
          name: "Kek 15",
          score: 540,
        },
        {
          id: 16,
          name: "Kek 16",
          score: 235,
        },
        {
          id: 17,
          name: "Kek 17",
          score: 76,
        },
        {
          id: 18,
          name: "Kek 18",
          score: 31,
        },
        {
          id: 19,
          name: "Kek 19",
          score: 212,
        },
        {
          id: 20,
          name: "Kek 20",
          score: 789,
        },
      ],
    };
  },
  mounted() {
    this.data.sort((a, b) => {
      return b.score - a.score;
    });
  },
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";

#leaderboard {
  position: relative;
  height: 100%;
  .leaderboard-bg {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100vh;
    // height: calc(100vh - 180px);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .leaderboard-wrap {
    background: url("/src/assets/images/dashboard/leaderboard-table.png");
    max-width: 97%;
    width: 1240px;
    height: 569px;
    margin: 0 auto;
    background-position: center;
    background-size: 100% 100%;
    overflow: hidden;
    padding: 80px 70px;
    column-count: 2;

    @media only screen and (max-width:768px) {
      column-count: 1;
      padding: 80px 0px;
    }

    .leaderboard-item {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-evenly;

      padding: 0.5rem;

      div {
        color: #46248a;
        font-size: 1.2rem;
        font-weight: 600;
      }

      .order {
        &.candy {
          position: relative;
          width: 24px;
          img {
            position: absolute;
            top: -10px;
            left: -10px;
            width: 40px;
            height: 40px;
          }
        }
      }
    }

    // background-size: auto;
    // background-repeat: no-repeat;
  }

  footer {
    position: absolute;
    margin-top: 100px;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);

    @media only screen and (max-width:768px) {
      position: relative;
    }
  }
}
</style>
