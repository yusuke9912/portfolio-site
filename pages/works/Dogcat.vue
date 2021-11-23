<template>
    <div class="wrapper">

      <!-- header -->
      <shared-header></shared-header>
      <!-- /header -->

<main class="content">

      <article class="article">
        <div class="article-container">
          <h2 class="article-title">犬と猫を判別するLINEbot</h2>
          <div class="article-body">
            <p class="article-image small">
              <carousel :per-page="1">
                <slide><img src="@/assets/img/works/dog-cat_ai/dog-cat_ai.png" alt=""></slide>
              </carousel>
            </p>
            <p>
              送信された画像の中に写っているものが犬か猫かをAIを用いて判別するLINEbotです。<a href="https://aimaker.io/">AIメーカー</a>という面白いサービスを見つけたので作成しました。
            </p>
            <h3>使用技術/使用サービス</h3>
            <p class="skill-img">
              <img src="@/assets/img/skill_icon/gas.svg" alt="">
              <img src="@/assets/img/skill_icon/line.svg" alt="">
            </p>
            <h3>担当</h3>
            <p>デザイン・コーディング</p>
            <h3>デザインについて</h3>
            <p>
              Flex Message Simulatorというサービスを利用してデザインを作成しました。犬か猫かを判別するだけでなく、判別結果がどれほど確証できるのかをパーセント表示で表すようにしました。
            </p>
            <h3>コーディングについて</h3>
            <p>
              犬と猫を判別するモデルはAIメーカーで作成しました。GASからAIメーカーのAPIを呼び出した後、画像が犬か猫かの判別結果をLINEに送信するようにしました。
            </p>
          </div>
          <div class="connection-link">
            <a href="https://lin.ee/eTmCXzP" target="_blank" rel="noopener">URL</a>
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
  name: 'dogcat',
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