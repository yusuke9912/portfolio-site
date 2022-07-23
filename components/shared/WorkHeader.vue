<template>
  <header class="work-header" >
  <div class="container">
    <h1 class="header-logo">
      <router-link to="/">Yusuke Nakagawa's Portfolio</router-link>
    </h1>
    <nav class="gnav">
      <ul class="gnav-list">
        <li class="gnav-item"><a href="/#about">About</a></li>
        <li class="gnav-item"><a href="/#works">Works</a></li>
        <li class="gnav-item"><a href="/#skill">Skill</a></li>
        <li class="gnav-item"><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  <button class="menu-open" v-on:click="flag = !flag">
    <span :class="{open:flag}"></span>
    <span :class="{open:flag}"></span>
    <span :class="{open:flag}"></span>
  </button>
  <nav class="menu-body" :class="{open:flag}">
      <ul>
        <li class="gnav-item"><a href="/#about" v-on:click="flag = false">About</a></li>
        <li class="gnav-item"><a href="/#works" v-on:click="flag = false">Works</a></li>
        <li class="gnav-item"><a href="/#skill" v-on:click="flag = false">Skill</a></li>
        <li class="gnav-item"><a href="/#contact" v-on:click="flag = false">Contact</a></li>
      </ul>
      </nav>
  <div class="menu-bg" :class="{open:flag}" v-on:click="flag = false"></div>
  </div>
</header>
</template>


<script>
export default {
  name: 'shared-work-header',
}
</script>

<style>
/*--------------------------------
作品ページヘッダー
---------------------------------*/
.work-header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background: rgba(0,0,0,.7);
}

.work-header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
  opacity:1;
}

@media screen and (max-width: 767px) {
  .work-header .container {
    padding: 15px;
  }
}
</style>