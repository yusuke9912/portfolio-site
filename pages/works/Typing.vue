<template>
    <div class="wrapper">

      <!-- header -->
      <shared-header></shared-header>
      <!-- /header -->

<main class="content">

      <article class="article">
        <div class="article-container">
          <h2 class="article-title">タイピングゲーム</h2>
          <div class="article-body">
            <p class="article-image"> 
              <carousel :per-page="1">
                <slide><img src="@/assets/img/works/typing/typing.png" alt="タイピングゲームのスクリーンショット"></slide>
                <slide><img src="@/assets/img/works/typing/typing2.png" alt="タイピングゲームのスクリーンショット"></slide>
                <slide><img src="@/assets/img/works/typing/typing3.png" alt="タイピングゲームのスクリーンショット"></slide>
                <slide><img src="@/assets/img/works/typing/typing4.png" alt="タイピングゲームのスクリーンショット"></slide>
              </carousel>
            </p>
            <p>
              寿司打というタイピングゲームにハマっていた時、自分で一から同じものを作ってみたいと思い立ったため作成しました。家族や知り合いにも遊んでもらい、ランキングでスコアを競いました。
            </p>
            <h3>使用言語/ツール</h3>
            <ul class="skill-img">
              <li><img src="@/assets/img/skill_icon/html5.svg" alt="HTML5のアイコン"><span class="tooltip">HTML5</span></li>
              <li><img src="@/assets/img/skill_icon/css3.svg" alt="CSS3のアイコン"><span class="tooltip">CSS3</span></li>
              <li><img src="@/assets/img/skill_icon/javascript.svg" alt="JavaScriptのアイコン"><span class="tooltip">JacaScript</span></li>
              <li><img src="@/assets/img/skill_icon/rails.svg" style="width:90px" alt="Ruby on Railsのアイコン"><span class="tooltip" style="width:110px">Ruby on Rails</span></li>
              <li><img src="@/assets/img/skill_icon/heroku.svg" alt="Herokuのアイコン"><span class="tooltip">Heroku</span></li>
            </ul>
            <h3>担当</h3>
            <p>デザイン・コーディング</p>
            <h3>デザインについて</h3>
            <p>
              残り3秒を切るとタイマーが赤くなるようにしたのがこだわりポイントです。
            </p>
            <h3>コーディングについて</h3>
            <p>
              バックエンドにRuby on Railsを利用しました。ランキング機能の実装において、ユーザーごとの自己ベストを比較する処理を実装するのが大変でした。
            </p>
          </div>
          <div class="connection-link">
            <a href="https://type9912.herokuapp.com/" target="_blank" rel="noopener">URL</a>
            <a href="https://github.com/yusuke9912/typing" target="_blank" rel="noopener">GitHub</a>
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
  name: 'typing',
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