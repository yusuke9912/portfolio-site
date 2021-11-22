<template>
    <div class="wrapper">

      <!-- header -->
      <shared-header></shared-header>
      <!-- /header -->
      <main class="content">
        <article class="article">
          <div class="article-container">
            <h2 class="article-title">
              コロナウイルスに関するニュースをまとめたサイト
            </h2>
            <div class="article-body">
              <p class="article-image">
                <carousel :per-page="1">
                  <slide><img src="@/assets/img/works/news/news.png" alt=""></slide>
                </carousel>
              </p>
              <p>
                コロナウイルスに関する情報を効率よく集めるため、コロナウイルスに関する記事をまとめたサイトを作成しました。
              </p>
              <h3>使用技術/使用サービス</h3>
            <p class="skill-img">
              <img src="@/assets/img/skill_icon/html5.svg" alt="">
              <img src="@/assets/img/skill_icon/css3.svg" alt="">
              <img src="@/assets/img/skill_icon/javascript.svg" alt="">
              <img src="@/assets/img/skill_icon/php.svg" alt="">
              <img src="@/assets/img/skill_icon/heroku.svg" alt="">
            </p>
              <h3>担当</h3>
              <p>デザイン・コーディング</p>
              <h3>デザインについて</h3>
              <p>
                スマホ画面ではヘッダーがハンバーガーメニューになるようにしました。
              </p>
              <h3>コーディングについて</h3>
              <p>
                phpQueryというPHPのライブラリを用いて<a href="https://news.yahoo.co.jp/" target="_blank" rel="noopener">Yahoo!ニュース</a>から「コロナ」「マスク」「感染」というワードをタイトルに含む記事をスクレピングしました。
              </p>
            </div>
            <div class="connection-link">
              <a href="https://news9912.herokuapp.com/" target="_blank" rel="noopener">URL</a>
              <a href="https://github.com/yusuke9912/news" target="_blank" rel="noopener">GitHub</a>
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
import sharedHeader from "../../components/shared/Header.vue"
import sharedFooter from "../../components/shared/Footer.vue"
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'

export default {
  name: 'news',
  components: {
    sharedHeader,
    sharedFooter,
    Carousel,
    Slide
    
  }
}
</script>

<style>

</style>