<template>
    <div>
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

        <main class="content">
            <article class="article">
                <div class="article-container">
                <h2 class="article-title">{{ title }}</h2>
                <div class="article-body">
                    <p class="article-image small">
                    <carousel :per-page="1">
                        <slide v-for="screenshot in screenshots" :key="screenshot.imgUrl">
                        <img :src="screenshot.imgUrl" :alt="title + 'のスクリーンショット'">
                        </slide>
                    </carousel>
                    </p>
                    <p>
                    {{ description }}
                    </p>
                    <h3>使用言語/ツール</h3>
                    <ul class="skill-img">
                    <li><img v-for="skill in skills" :key="skill.name" :src="skill.imgUrl" :alt="skill.name + 'のアイコン'" v-b-tooltip.hover.bottom.v-info :title="skill.name"></li>
                    </ul>
                    <h3>デザインについて</h3>
                    <p>
                    {{ design }}
                    </p>
                    <h3>コーディングについて</h3>
                    <p>
                    {{ coding }}
                    </p>
                </div>
                <div class="connection-link">
                    <a href="https://job.yusuke-engineer.com" target="_blank" rel="noopener">サイトを開く</a>
                    <a href="https://github.com/yusuke9912/hack-u-nho" target="_blank" rel="noopener">GitHub</a>
                </div>
                <div class="home-link">
                    <router-link to="/#works">作品一覧へ戻る</router-link>
                </div>
                </div>
            </article>
        </main>

        <!-- footer -->
        <shared-footer></shared-footer>
        <!-- /footer -->
    </div>
</template>


<script>
import sharedFooter from "../../components/shared/Footer.vue"
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'

export default {
  name: "shared-work",
  data: function () {
    return {
    flag: false,
    };
  },
  props: ["title", "description","design","coding","screenshots","skills"],
    sharedFooter,
    Carousel,
    Slide,
  }
</script>

<style>
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