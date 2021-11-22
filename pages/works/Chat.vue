<template>
    <div class="wrapper">

      <!-- header -->
      <shared-header></shared-header>
      <!-- /header -->

<main class="content">

      <article class="article">
        <div class="article-container">
          <h2 class="article-title">チャットアプリ</h2>
          <div class="article-body">
            <p class="article-image">
              <carousel :per-page="1">
                <slide><img src="@/assets/img/works/chat/chat.png" alt="絵本アプリのスナップショット"></slide>
                <slide><img src="@/assets/img/works/chat/chat2.png" alt="絵本アプリのスナップショット"></slide>
                <slide><img src="@/assets/img/works/chat/chat3.png" alt="絵本アプリのスナップショット"></slide>
                <slide><img src="@/assets/img/works/chat/chat4.png" alt="絵本アプリのスナップショット"></slide>
                <slide><img src="@/assets/img/works/chat/chat5.png" alt="絵本アプリのスナップショット"></slide>
                <slide><img src="@/assets/img/works/chat/chat6.png" alt="絵本アプリのスナップショット"></slide>
                <slide><img src="@/assets/img/works/chat/chat7.png" alt="絵本アプリのスナップショット"></slide>
                <slide><img src="@/assets/img/works/chat/chat8.png" alt="絵本アプリのスナップショット"></slide>
              </carousel>
            </p>
            <p>
              株式会社SICでのインターン中に作成しました。インターンの日報を共有するツールとして利用してもらっています。
            </p>
            <h3>使用技術/使用サービス</h3>
            <p class="skill-img">
              <img src="@/assets/img/skill_icon/html5.svg" alt="">
              <img src="@/assets/img/skill_icon/css3.svg" alt="">
              <img src="@/assets/img/skill_icon/javascript.svg" alt="">
              <img src="@/assets/img/skill_icon/firebase.svg" alt="">
            </p>
            <h3>担当</h3>
            <p>デザイン・コーディング</p>
            <h3>デザインについて</h3>
            <p>
              LINEをモデルとしてチャットの画面をデザインしました。
            </p>
            <h3>コーディングについて</h3>
            <p>
              ユーザー認証、画像データなどの保管場所及びデータベースにFirebaseを利用しました。Firebaseが提供するリアルタイムDBであるCloud Firestoreを利用することによってリアルタイムにメッセージが反映されるチャットを実現しました。
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
  name: 'chat',
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