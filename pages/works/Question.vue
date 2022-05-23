<template>
    <div class="wrapper">

      <!-- header -->
      <shared-header></shared-header>
      <!-- /header -->

    <main class="content">

      <article class="article">
        <div class="article-container">
          <h2 class="article-title">情報処理技術者試験の過去問演習サイト</h2>
          <div class="article-body">
            <p class="article-image">
              <carousel :per-page="1">
                <slide><img src="@/assets/img/works/questions/questions.png" alt="サイトのスクリーンショット"></slide>
                <slide><img src="@/assets/img/works/questions/questions2.png" alt="サイトのスクリーンショット"></slide>
                <slide><img src="@/assets/img/works/questions/questions3.png" alt="サイトのスクリーンショット"></slide>
              </carousel>
            </p>
            <p>
              基本情報技術者試験を受ける際、自分で過去問演習アプリを作って勉強しようと思い立ったため作成しました。インターン先の社員さんがITパスポートの試験を受けるため、ITパスポートの過去問も解けるようにしました。
            </p>
            <h3>使用言語/ツール</h3>
            <p class="skill-img">
              <img src="@/assets/img/skill_icon/html5.svg" alt="HTML5のアイコン">
              <img src="@/assets/img/skill_icon/css3.svg" alt="CSS3のアイコン">
              <img src="@/assets/img/skill_icon/javascript.svg" alt="JavaScriptのアイコン">
              <img src="@/assets/img/skill_icon/php.svg" alt="PHPのアイコン">
              <img src="@/assets/img/skill_icon/aws.svg" alt="AWSのアイコン">
            </p>
            <h3>担当</h3>
            <p>デザイン・コーディング</p>
            <h3>デザインについて</h3>
            <p>
              電車の中でも過去問を演習できるように、スマホで使うことを前提にデザインを考えました。問題に正解した場合は画面に大きく丸印が出るようにしたのがこだわりポイントです。
            </p>
            <h3>コーディングについて</h3>
            <p>
              過去問は<a href="https://www.fe-siken.com/" target="_blank" rel="noopener">https://www.fe-siken.com/</a>からpythonを使用してスクレイピングしました。間違えた問題を最後に復習できる機能をセッションを使って実装しました。
            </p>
          </div>
          <div class="connection-link">
            <a href="https://questions.yusuke122.com/" target="_blank" rel="noopener">URL</a>
            <a href="https://github.com/yusuke9912/past_questions" target="_blank" rel="noopener">GitHub</a>
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
  name: 'question',
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