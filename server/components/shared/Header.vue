<template>
  <header class="header" :class="{ show: visible_header }" >
  <v-container>
    <h1 class="text-subtitle-1 text-sm-h6 font-weight-black">
      <router-link to="/" class="white--text">Yusuke Nakagawa's Portfolio</router-link>
    </h1>
    <nav class="d-none d-sm-block">
      <v-layout>
        <span class="gnav-item mx-5"><router-link to="/#about" class="white--text">About</router-link></span>
        <span class="gnav-item mx-5"><router-link to="/#works" class="white--text">Works</router-link></span>
        <span class="gnav-item mx-5"><router-link to="/#skill" class="white--text">Skill</router-link></span>
        <span class="gnav-item mx-5"><router-link to="/#contact" class="white--text">Contact</router-link></span>
      </v-layout>
    </nav>

    <!-- ハンバーガーメニュー -->
    <button class="menu-open d-block d-sm-none" v-on:click="flag = !flag">
      <span :class="{open:flag}"></span>
      <span :class="{open:flag}"></span>
      <span :class="{open:flag}"></span>
    </button>
    <nav class="menu-body" :class="{open:flag}">
      <ul>
        <li class="gnav-item"><router-link to="/#about" class="white--text" v-on:click="flag = false">About</router-link></li>
        <li class="gnav-item"><router-link to="/#works" class="white--text" v-on:click="flag = false">Works</router-link></li>
        <li class="gnav-item"><router-link to="/#skill" class="white--text" v-on:click="flag = false">Skill</router-link></li>
        <li class="gnav-item"><router-link to="/#contact" class="white--text" v-on:click="flag = false">Contact</router-link></li>
      </ul>
    </nav>
    <div class="menu-bg" :class="{open:flag}" v-on:click="flag = false"></div>
    </v-container>
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
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom:40px;
  transition: .3s;
  opacity:1;
}

.header.show .container{
  padding-top: 15px;
  padding-bottom: 15px;
}

.gnav-item a {
  position: relative;
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  padding: 5px 0;
  transition: 0.3s;
  letter-spacing: 0.05em;
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
</style>