<template>
  <div class="dashboard-menu-wrap">
    <div class="dashboard-menu">
      <router-link
        to="/staking"
        :class="`${selected === 'staking' ? 'active' : ''}`"
        >Staking</router-link
      >
      <router-link
        to="/leaderboard"
        :class="`${selected === 'leaderboard' ? 'active' : ''}`"
        >Leaderboard</router-link
      >
      <a :class="`soon`">Shop</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selected"],
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";
.dashboard-menu-wrap {
  padding-top: 120px;
  .dashboard-menu {
    width: 520px;
    height: 80px;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 2rem;

    background: rgba(#e1e0ff, 0.8);
    border-radius: 80px;

    @media only screen and (max-width:768px) {
      width: 100%;
      border-radius: 0;
      padding: 0 0.7rem;
    }

    a {
      position: relative;
      text-decoration: none;
      color: #46248a;
      border: 3px solid #46248a;
      border-radius: 90px;
      padding: 0.5rem 1rem;
      font-weight: 600;
      font-size: 1.1rem;
      text-transform: uppercase;

      transition: all ease-in-out 0.2s;

      &:hover,
      &.active {
        background: #46248a;
        color: white;
      }

      &.soon {
        width: 113px;
        position: relative;
        &::after {
          position: absolute;
          top: -10px;
          right: -20px;
          content: "soon";
          background: #46248a;
          color: white;
          font-size: 1rem;
          padding: 0.3rem 0.7rem;
          border-radius: 40px;
        }
      }
    }
  }
}
</style>
