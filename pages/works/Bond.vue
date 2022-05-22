<template>
    <div class="wrapper">

      <!-- header -->
      <shared-header></shared-header>
      <!-- /header -->

<main class="content">

      <article class="article">
        <div class="article-container">
          <h2 class="article-title">「自分」ではなく、「誰か」をよく見せるSNS "BOND"</h2>
          <div class="article-body">
            <p class="article-image"> 
              <carousel :per-page="1">
                <slide><img src="@/assets/img/works/bond/bond.png" alt=""></slide>
              </carousel>
            </p>
            <p>
              Twitterで知り合った<a href="https://www.kyusan-u.ac.jp/news/social_business_plan_contest-6th/">中丸与志哉さん</a>率いるチーム「想」において、アプリの開発を行いました。<br>このアプリを通して大切な人へのメッセージを送りあってもらい、リアルな世界でのコミュニケーションを変えていきたいと思っています。
            </p>
            <h3>使用技術/ツール</h3>
            <p class="skill-img">
              <img src="@/assets/img/skill_icon/swift.svg" alt="">
              <img src="@/assets/img/skill_icon/firebase.svg" alt="">
            </p>
            <h3>担当</h3>
            <p>コーディング</p>
            <h3>コーディングについて</h3>
            <p>
              ユーザー認証やデータの保存はFirebaseを使用しました。またYoutubeの動画をアプリ内で再生できるようにYoutubeKitというライブラリを使用しました。
            </p>
          </div>
          <div class="connection-link">
            <a href="https://apps.apple.com/jp/app/bond-%E3%83%9C%E3%83%B3%E3%83%89/id1614269869?itsct=apps_box_link&itscg=30200" target="_blank" rel="noopener">URL</a>
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