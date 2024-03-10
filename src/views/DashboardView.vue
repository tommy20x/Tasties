<template>
  <div id="dashboard">
    <div class="dashboard-bg">
      <img src="@/assets/images/dashboard/dashboard-bg.png" />
    </div>
    <MainNav />
    <DashboardMenu />
    <div class="content-wrap">
      <div class="staking">
        <div class="stake-buttons">
          <a class="selected">Stake Tastie</a>
          <a class="">Unstake</a>
        </div>
        <div class="staking-inner">
          <div class="nft-stake staked" v-for="nft of nfts" :key="nft.id">
            <div class="img-wrap">
              <img :src="nft.path" :alt="`NFT:${nft.id}`" />
            </div>
            <div class="multi">1.4X</div>
            <div class="nft-name">#{{ nft.id }}</div>
          </div>
        </div>
      </div>
      <div class="staking-counter">
        <div class="count">12</div>
        <div class="tasties-staked">
          <img
            src="@/assets/images/dashboard/tasties-staked.svg"
            alt="Tasties Staked"
          />
        </div>
        <div class="treats-wrap">
          <div class="treats-pet-day">
            150 <img src="@/assets/images/dashboard/candy.svg" /> Treat Per Day
          </div>
          <div class="treats-count">
            11336 <img src="@/assets/images/dashboard/candy.svg" />
          </div>
        </div>
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
      nfts: [
        { id: 2947, path: "/nfts/2947.png" },
        { id: 2948, path: "/nfts/2948.png" },
        { id: 2949, path: "/nfts/2949.png" },
        { id: 2950, path: "/nfts/2947.png" },
        { id: 2951, path: "/nfts/2948.png" },
        { id: 2952, path: "/nfts/2949.png" },
        { id: 2953, path: "/nfts/2947.png" },
        { id: 2954, path: "/nfts/2948.png" },
        { id: 2955, path: "/nfts/2949.png" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
#dashboard {
  position: relative;
  height: 100%;
  .dashboard-bg {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: calc(100vh - 180px);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content-wrap {
    padding-top: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width:992px) {
      padding-top: 0px;
    }

    .staking {
      margin: 1rem;
      @media only screen and (max-width:576px) {
        margin: 0.5rem;
      }

      position: relative;
      width: 750px;
      height: 460px;
      background: #b0aeffb2;
      border-radius: 30px;
      overflow: hidden;

      .stake-buttons {
        position: absolute;
        width: calc(100% - 60px);
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        margin: 0 30px;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;

        z-index: 10;
        backdrop-filter: blur(5px);

        @media only screen and (max-width:576px) {
          justify-content: space-evenly;
          width: calc(100% - 40px);
          a {
            font-size: 1rem;
            margin: 0 0.2rem !important;
          }
        }

        a {
          display: block;
          color: #46248a;
          font-weight: 600;
          text-decoration: underline;
          font-size: 1.1rem;
          margin: 0 1rem;
          text-transform: uppercase;
          letter-spacing: 0.15rem;
          line-height: 140%;

          &.selected {
            color: white;
            background: #46248a;
            padding: 0.7rem 1.4rem;
            border-radius: 90px;
            text-decoration: none;
          }
        }
      }

      .staking-inner {
        margin: 1rem;
        @media only screen and (max-width:576px) {
          margin: 0.5rem;
        }

        direction: rtl;
        overflow-y: scroll;
        height: 100%;
        padding-top: 80px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;

        &::-webkit-scrollbar-track {
          -webkit-box-shadow: none;
          background-color: transparent;
        }

        &::-webkit-scrollbar {
          width: 10px;
          height: 50px;
          background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background-color: rgba(white, 0.6);
          border-radius: 5px;
        }

        .nft-stake {
          border-radius: 20px;
          margin: 1rem;
          @media only screen and (max-width:576px) {
            margin: 0.5rem;
          }
          position: relative;

          &.staked {
            background: rgba(#46248a, 0.3);

            &::after {
              position: absolute;
              top: 0;
              right: 0;
              text-transform: uppercase;
              font-size: 0.9rem;
              font-weight: 600;

              content: "Staked";
              background: #9bf2ff;
              color: #46248a;
              padding: 0.5rem 1rem;
              border-radius: 90px;
              width: fit-content;
            }
          }
          .img-wrap {
            margin: 1rem;
            width: 160px;
            height: 160px;
            @media only screen and (max-width:576px) {
              width: 130px;
              height: 130px;
            }

            img {
              width: 100%;
              height: 100%;
            }
          }
          .nft-name {
            text-align: center;
            color: #46248a;
            background: #e1e0ff;
            padding: 0.5rem 1rem;
            border-radius: 90px;
            width: fit-content;
            margin: 0 auto;
            font-weight: 600;
          }
          .multi {
            position: absolute;
            top: 0;
            left: 0;

            background: #46248a;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 90px;
          }
        }
      }
    }

    .staking-counter {
      margin: 1rem;
      width: 400px;
      .count {
        text-align: center;
        font-size: 110px;
        font-weight: 800;
        text-shadow: 6.49189px 6.49189px 2.43446px #46248a,
          1.50936px 3.77341px 17.1142px rgba(70, 36, 138, 0.8);
      }

      .tasties-staked {
        margin-top: 1.8rem;

        margin: 0 auto;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .treats-wrap {
        margin-top: 1.5rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        div {
          border-radius: 90px;
          padding: 0.8rem 1.2rem;
          font-weight: 600;
          width: fit-content;
          font-size: 1.3rem;
          text-transform: uppercase;
        }

        .treats-pet-day {
          color: #46248a;
          background: rgba(#e1e0ff, $alpha: 0.9);
        }

        .treats-count {
          color: white;
          background: #46248a;
        }
      }
    }
  }

  footer {
    position: absolute;
    margin-top: 50px;
    bottom: 90px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
