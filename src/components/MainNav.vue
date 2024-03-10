<template>
  <nav
    :class="`nav-mobile ${menu ? 'expanded' : ''} ${menuBg ? 'menu-bg' : ''}`"
  >
    <div class="top">
      <a href="/">
        <img src="@/assets/images/nav/home.svg" alt="home" />
      </a>
      <i class="close" v-if="menu" @click="hideMenu()"></i>
      <i class="open" v-if="!menu" @click="showMenu()"></i>
    </div>
  </nav>
  <div class="expand" v-if="menu">
    <a href="#staking" class="nav-item" @click="hideMenu()">Staking</a>
    <a href="#rarities" class="nav-item" @click="hideMenu()">Rarities</a>
    <a href="#faq" class="nav-item" @click="hideMenu()">FAQ</a>
    <a class="nav-item-button" @click="hideMenu() || comingSoon()">GUIDE</a>
    <a class="nav-item-button" @click="hideMenu() || comingSoon()"
      >THE&nbsp;FACTORY</a
    >
    <div class="nav-social">
      <a href="https://twitter.com/tastiesnft" @click="hideMenu()">
        <img src="@/assets/images/general/twitter.svg" alt="Twitter" />
      </a>
      <a href="" @click="hideMenu()">
        <img src="@/assets/images/general/instagram.svg" alt="Instagram" />
      </a>
      <a href="https://t.co/Bwn2XTRe9m" @click="hideMenu()">
        <img src="@/assets/images/general/discord.svg" alt="Discord" />
      </a>
    </div>
  </div>
  <nav :class="`nav-pc ${menuBg ? 'menu-bg' : ''}`">
    <div class="nav-social">
      <a href="https://twitter.com/tastiesnft">
        <img src="@/assets/images/general/twitter.svg" alt="Twitter" />
      </a>
      <a href="">
        <img src="@/assets/images/general/instagram.svg" alt="Instagram" />
      </a>
      <a href="https://t.co/Bwn2XTRe9m">
        <img src="@/assets/images/general/discord.svg" alt="Discord" />
      </a>
    </div>
    <div class="nav-items">
      <a href="/" class="nav-item">Home</a>
      <a href="#staking" class="nav-item">Staking</a>
      <a href="#rarities" class="nav-item">Rarities</a>
      <a href="#faq" class="nav-item">FAQ</a>
      <a target="blank" class="nav-item-button" @click="comingSoon()">GUIDE</a>
      <a target="blank" class="nav-item-button" @click="comingSoon()"
        >THE&nbsp;FACTORY</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      menuBg: false,
    };
  },
  methods: {
    async comingSoon() {
      this.$store.commit("SET_LOADING_OVERLAY", true);
    },
    showMenu() {
      this.menu = true;
      document.body.classList.add("lock-scroll");
    },
    hideMenu() {
      this.menu = false;
      document.body.classList.remove("lock-scroll");
    },
    hideMenuComingSoon() {
      alert("Coming Soon!");
    },
  },
};
</script>

<style lang="scss">
nav {
  background-image: url(assets/img/nav-bg.svg);
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% 79px;
  height: 79px;
  width: 1176px;
  max-width: 100%;
  z-index: 70 !important;
  margin: 0 auto;
  margin-top: 20px;
  transition: all 0.3s ease;

  @media only screen and (max-width: 992px) {
    width: 335px;
    background-image: url(assets/img/nav-bg-mobile.svg);
  }
}

.menu-bg {
  background: hsla(0, 0%, 100%, 0.753);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}

.nav-pc {
  position: absolute;
  display: none;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  z-index: 50;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (min-width: 992px) {
    display: flex;
  }

  a {
    display: block;
    text-decoration: none;
    margin-right: 25px;
  }

  .nav-items,
  .nav-social {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .nav-items {
    margin-bottom: 8px;
    .nav-item {
      color: #46248a;
      font-size: 1.4rem;
      font-weight: 600;
    }

    .nav-item:hover {
      color: rgba(70, 36, 138, 0.9) !important;
    }

    .nav-item-button {
      padding: 10px 20px;
      height: -webkit-fit-content;
      height: -moz-fit-content;
      height: fit-content;
      line-height: 25px;
      background-color: #46248a;
      color: #fff;
      border-radius: 90px;
      font-size: 1.2rem;
      font-weight: 600;
      transition: all 0.1s ease-in-out;
    }

    .nav-item-button:hover {
      background-color: rgba(70, 36, 138, 0.9) !important;
    }
  }
}

.nav-mobile {
  position: absolute;
  display: block;
  padding: 1rem;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (min-width: 992px) {
    display: none;
  }

  a {
    display: block;
    text-decoration: none;
    margin-right: 25px;
  }

  .top {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 992px) {
      margin-top: 3px;
    }
  }

  .close {
    content: url(assets/img/nav-x.svg);
  }

  .open {
    content: url(assets/img/nav-burger.svg);
  }
}
</style>
