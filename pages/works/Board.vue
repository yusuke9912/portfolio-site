<template>
    <div class="wrapper">

      <!-- header -->
      <shared-header></shared-header>
      <!-- /header -->

<main class="content">

      <article class="article">
        <div class="article-container">
          <h2 class="article-title">土木工学科掲示板の更新を通知するLINEbot</h2>
          <div class="article-body">
            <p class="article-image small">
              <carousel :per-page="1">
                <slide><img src="@/assets/img/works/board_bot/board_bot.png" alt="LINEbotのスクリーンショット"></slide>
                <slide><img src="@/assets/img/works/board_bot/board_bot2.png" alt="LINEbotのスクリーンショット"></slide>
              </carousel>
            </p>
            <p>
              自分が在籍する土木工学科の掲示板が更新されると通知を送るLINEbotです。掲示板の確認の手間をなくして、見落としを防止するために作成しました。現在土木工学科80人のうち、52人に使用してもらっています。
            </p>
            <h3>使用言語/ツール</h3>
            <p class="skill-img">
              <img src="@/assets/img/skill_icon/gas.svg" alt="GASのアイコン">
              <img src="@/assets/img/skill_icon/line.svg" alt="LINEのアイコン">
            </p>
            <h3>担当</h3>
            <p>デザイン・コーディング</p>
            <h3>デザインについて</h3>
            <p>
              Flex Message Simulatorというサービスを利用してデザインを作成しました。「掲示板を開く」というボタンを押すことで、見出しのページを開くことができるようにしました。
            </p>
            <h3>コーディングについて</h3>
            <p>
              自作のRSSフィードを作成できるFeed43というサービスから掲示板の情報を取得し、更新があった場合はLINEに通知する処理をGASで定期実行するようにしています。
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
import sharedHeader from "../../components/shared/Header.vue"
import sharedFooter from "../../components/shared/Footer.vue"
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'

export default {
  name: 'board',
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