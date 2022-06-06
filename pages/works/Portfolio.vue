<template>
    <div class="wrapper">

      <!-- header -->
      <!-- <shared-header></shared-header> -->
      <!-- /header -->

    <main class="content">

      <article class="article">
        <div class="article-container">
          <h2 class="article-title">ポートフォリオサイト</h2>
          <div class="article-body">
            <p class="article-image">
              <carousel :per-page="1">
                <slide><img src="@/assets/img/works/portfolio/portfolio.png" alt="ポートフォリオサイトのスクリーンショット"></slide>
                <slide><img src="@/assets/img/works/portfolio/portfolio2.png" alt="ポートフォリオサイトのスクリーンショット"></slide>
                <slide><img src="@/assets/img/works/portfolio/portfolio3.png" alt="ポートフォリオサイトのスクリーンショット"></slide>
                <slide><img src="@/assets/img/works/portfolio/portfolio4.png" alt="ポートフォリオサイトのスクリーンショット"></slide>
              </carousel>
            </p>
            <p>
              自分がこれまで作ってきた作品を紹介するために作成しました。
            </p>
            <h3>使用言語/ツール</h3>
            <ul class="skill-img">
              <li><img src="@/assets/img/skill_icon/html5.svg" alt="HTML5のアイコン"><span class="tooltip">HTML5</span></li>
              <li><img src="@/assets/img/skill_icon/css3.svg" alt="CSS3のアイコン"><span class="tooltip">CSS3</span></li>
              <li><img src="@/assets/img/skill_icon/javascript.svg" alt="JavaScriptのアイコン"><span class="tooltip">JavaScript</span></li>
              <li><img src="@/assets/img/skill_icon/vue.svg" alt="Vueのアイコン"><span class="tooltip">Vue</span></li>
              <li><img src="@/assets/img/skill_icon/nuxt.svg" alt="Nuxt.jsのアイコン"><span class="tooltip">Nuxt.js</span></li>
              <li><img src="@/assets/img/skill_icon/firebase.svg" alt="Firebaseのアイコン"><span class="tooltip">Firebase</span></li>
            </ul>
            <h3>担当</h3>
            <p>デザイン・コーディング</p>
            <h3>デザインについて</h3>
            <p>
              HTMLテンプレートのデザインを参考にして作成しました。デザインカンプを事前に作成することで、スムーズにコーディングに移れました。
            </p>
            <h3>コーディングについて</h3>
            <p>
              フレームワークにVueを使用することにより、コードの保守性の向上とSPA化を実現しました。また、ハンバーガーメニューやスライドショー、スクロール時のアニメーションなどの画面の動きの実装も行いました。
            </p>
          </div>
          <div class="connection-link">
              <a href="https://github.com/yusuke9912/portfolio_nuxt" target="_blank" rel="noopener">GitHub</a>
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