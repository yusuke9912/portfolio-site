<template>
    <div class="wrapper">

      <!-- header -->
      <shared-header></shared-header>
      <!-- /header -->

    <main class="content">

      <article class="article">
        <div class="article-container">
          <h2 class="article-title">保育用絵本アプリ</h2>
          <div class="article-body">
            <p class="article-image">
              <carousel :per-page="1">
                <slide><img src="@/assets/img/works/portfolio/portfolio.png" alt=""></slide>
              </carousel>
            </p>
            <p>
              自分がこれまで作ってきた作品を紹介するために作成しました。
            </p>
            <h3>使用技術/使用サービス</h3>
            <p class="skill-img">
              <img src="@/assets/img/skill_icon/html5.svg" alt="">
              <img src="@/assets/img/skill_icon/css3.svg" alt="">
              <img src="@/assets/img/skill_icon/javascript.svg" alt="">
              <img src="@/assets/img/skill_icon/vue.svg" alt="">
              <img src="@/assets/img/skill_icon/nuxt.svg" alt="">
              <img src="@/assets/img/skill_icon/firebase.svg" alt="">
            </p>
            <h3>担当</h3>
            <p>デザイン・コーディング</p>
            <h3>デザインについて</h3>
            <p>
              デザインは<a href="https://webdesigner-go.com/portfolio-template-basic/">HTMLテンプレート</a>をカスタマイズして作りました。
            </p>
            <h3>コーディングについて</h3>
            <p>
              Nuxt.jsを使ってSSR化しました。また、プラグインを利用したスライドショーやスクロール時のアニメーションの実装なども行いました。
            </p>
          </div>
          <div class="connection-link">
              <a href="https://github.com/yusuke9912/portfolio_vue" target="_blank" rel="noopener">GitHub</a>
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

export default {
  name: 'portfolio',
  components: {
    sharedHeader,
    sharedFooter,
  }
}
</script>

<style>

</style>