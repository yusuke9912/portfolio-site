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
import sharedFooter from "@/components/shared/Footer"
import Carousel from "vue-carousel/src/Carousel"
import Slide from "vue-carousel/src/Slide"

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
/*--------------------------------
 下層：Worksページ
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

.article {
  padding: 140px 0 80px;
}

.article-container {
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;
}

.article-title {
  margin-bottom: 30px;
  text-align: center;
}

.article-body {
  max-width: 720px;
  margin: 0 auto;
  margin-bottom: 80px;
}

.article-body h3 {
  position: relative;
  font-size: 18px;
  margin-bottom: 5px;
  padding-left: 1em;
}

.article-body h3:not(:first-child) {
  margin-top: 50px;
}

.article-body h3::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  content: "";
  border-radius: 3px;
  background-color: var(--main-color);
}

.article-body p {
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 30px;
}


.article-image{
  margin: 0 auto 50px;
}

.article-image.small{
  width: 500px;
  max-width: 100%;
}

.VueCarousel-wrapper{
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.connection-link{
  text-align: center;
}

.connection-link a:nth-of-type(2){
  margin-left: 40px;
}


.home-link{
  text-align: center;
  margin-top: 100px;
}

.home-link a {
  padding: 20px 40px;
  color: #fff;
  background-color: #4c4c4c;
  border-radius: 30px;
}

@media screen and (max-width: 767px) {
  /* 下層ページ */
  .work-header .container {
    padding: 15px;
  }

  .article {
    padding: 50px 0;
  }

  .article-body h3 {
    font-size: 16px;
    padding-left: 0.8em;
  }

  .article-body h3:not(:first-child) {
    margin-top: 30px;
  }

  .article-body p {
    font-size: 14px;
    line-height: 1.7;
    margin-bottom: 20px;
  }

}
</style>