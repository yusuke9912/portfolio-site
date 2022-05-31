<template>
    <div class="wrapper">

      <!-- header -->
      <!-- <shared-header></shared-header> -->
      <!-- /header -->

<main class="content">

      <article class="article">
        <div class="article-container">
          <h2 class="article-title">福岡県のコロナウイルス感染者数を通知するLINEbot</h2>
          <div class="article-body">
            <p class="article-image small">
              <carousel :per-page="1">
                <slide><img src="@/assets/img/works/corona_bot/corona_bot.png" alt="LINEbotのスクリーンショット"></slide>
              </carousel>
            </p>
            <p>
              福岡県のコロナウイルスの感染者数を毎日自動で通知するLINEbotです。最初は感染者数を通知するだけのものでしたが、ユーザーからの意見を取り入れ直近1週間平均と７日前1週間平均を出すようにしました。
            </p>
            <h3>使用言語/ツール</h3>
            <ul class="skill-img">
              <li><img src="@/assets/img/skill_icon/gas.svg" alt="GASのアイコン"><span class="tooltip">GAS</span></li>
              <li><img src="@/assets/img/skill_icon/line.svg" alt="LINEのアイコン"><span class="tooltip">LINE</span></li>
            </ul>
            <h3>担当</h3>
            <p>デザイン・コーディング</p>
            <h3>デザインについて</h3>
            <p>
              Flex Message Simulatorというサービスを利用してデザインを作成しました。感染者数が一番目立つように、感染者数だけ赤色にしました。
            </p>
            <h3>コーディングについて</h3>
            <p>
              <a href="https://www.pref.fukuoka.lg.jp/contents/covid19-hassei.html" target="_blank" rel="noopener">福岡県のHP</a>からデータを参照し、そのデータが更新されているとLINEに通知を送る処理をGASで定期実行しています。
            </p>
          </div>
          <div class="connection-link">
            <a href="https://lin.ee/nX0uWov" target="_blank" rel="noopener">URL</a>
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
  name: 'corona',
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