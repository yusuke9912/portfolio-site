<template>
  <header class="header" :class="{ show: visible_header }" >
  <div class="container">
    <h1 class="header-logo">
      <router-link to="/">Yusuke Nakagawa's Portfolio</router-link>
    </h1>
    <nav class="gnav">
      <ul class="gnav-list">
        <li class="gnav-item"><router-link to="/#about">About</router-link></li>
        <li class="gnav-item"><router-link to="/#works">Works</router-link></li>
        <li class="gnav-item"><router-link to="/#skill">Skill</router-link></li>
        <li class="gnav-item"><router-link to="/#contact">Contact</router-link></li>
      </ul>
    </nav>

    <!-- ハンバーガーメニュー -->
  <button class="menu-open" v-on:click="flag = !flag">
    <span :class="{open:flag}"></span>
    <span :class="{open:flag}"></span>
    <span :class="{open:flag}"></span>
  </button>
  <nav class="menu-body" :class="{open:flag}">
      <ul>
        <li class="gnav-item"><router-link to="/#about" v-on:click="flag = false">About</router-link></li>
        <li class="gnav-item"><router-link to="/#works" v-on:click="flag = false">Works</router-link></li>
        <li class="gnav-item"><router-link to="/#skill" v-on:click="flag = false">Skill</router-link></li>
        <li class="gnav-item"><router-link to="/#contact" v-on:click="flag = false">Contact</router-link></li>
      </ul>
      </nav>
  <div class="menu-bg" :class="{open:flag}" v-on:click="flag = false"></div>
  </div>
</header>
</template>


<script>
export default {
  name: 'shared-header',
  data: function (){
    return {
      flag: false,
      visible_header: false,
    }
  },
    mounted() {
    window.addEventListener("scroll", this.calculateScrollY);
    if (window.pageYOffset == 0) {
      this.visible_header = false;
    }
  },
  methods: {
   calculateScrollY() {
    this.scrollY = window.scrollY;
    if (!this.visible_about) {
      this.visible_header = window.scrollY > 20
    }
   }
  }
}
</script>

<style>
/*--------------------------------
ヘッダー
---------------------------------*/
.header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background: rgba(0,0,0,0);
  transition: .3s;
}

.header.show{
  background: rgba(0,0,0,.7);
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 40px;
  transition: .3s;
  opacity:1;
}

.header.show .container{
  padding: 15px 40px;
}

.header-logo {
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2;
  margin-right: 20px;
  letter-spacing: 0.05em;
}

.header-logo a {
  color: #fff;
}

.gnav-list {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 0;
}

.gnav-item:not(:last-child) {
  margin-right: 30px;
}

.gnav-item a {
  position: relative;
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  padding: 5px 0;
  transition: 0.3s;
  letter-spacing: 0.05em;
  color: #fff;
}
.gnav-item a:after {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 3px;
  content: "";
  transition: 0.3s;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #fff;
}

.gnav-item a:hover:after {
  width: 100%;
}

/* ハンバーガーメニュー */

.menu-open{
  width: 40px;
  height: 40px;
  margin-left:auto; 
  display: none;
  position: relative;
  z-index:9999;
}

.menu-open span{
  display: block;
  width: 100%;
  height: 5px;
  background-color: #444;
  position: absolute;
  transition: all 0.5s ease;
  background-color: #fff;
  border-radius: 2px;
}

.menu-open span:nth-of-type(1){
  top: 10px;
}

.menu-open span:nth-of-type(2){
  top: 20px;
}

.menu-open span:nth-of-type(3){
  top: 30px
}

.menu-open span:nth-of-type(1).open{
  top: 20px;
  transform: rotate(45deg);
}

.menu-open span:nth-of-type(2).open{
  opacity: 0;
}

.menu-open span:nth-of-type(3).open{
  top: 20px;
  transform: rotate(-45deg);
}

.menu-bg {
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  z-index: 9997;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: .5;
}

.menu-bg.open {
  display: block;
}

.menu-body {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9998;
  width: 70%;
  height: 100%;
  background-color: #000;
  padding-top: 50px;
  padding-left: 50px;
  transform: translateX(100%);
  opacity: .8;
  transition: .3s ease-in-out;
}

.menu-body.open {
  transform: translateX(0%);
}

@media screen and (max-width: 767px) {
  .header .container {
    padding: 15px;
  }

  .header-logo {
    font-size: 15px;
    margin-right: 15px;
  }

  .gnav{
    display: none;
  }

  .gnav-item:not(:last-child) {
    margin-right: 10px;
  }

  .gnav-item a {
    font-size: 16px;
  }

  .gnav-item a:after {
    display: none;
  }

/* ハンバーガーメニュー */
  .menu-open{
    display: block;
  }
}
</style>