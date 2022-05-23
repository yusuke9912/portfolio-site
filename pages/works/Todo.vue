<template>
    <div class="wrapper">

      <!-- header -->
      <shared-header></shared-header>
      <!-- /header -->

    <main class="content">

      <article class="article">
        <div class="article-container">
          <h2 class="article-title">TODO管理ツール</h2>
          <div class="article-body">
            <p class="article-image">
              <carousel :per-page="1">
                <slide><img src="@/assets/img/works/todo/todo.png" alt="TODO管理ツールのスクリーンショット"></slide>
                <slide><img src="@/assets/img/works/todo/todo2.png" alt="TODO管理ツールのスクリーンショット"></slide>
              </carousel>
            </p>
            <p>
              業務でAngularを利用することになったため、Angularの勉強の一環として作成しました。
            </p>
            <h3>使用言語/ツール</h3>
            <p class="skill-img">
              <img src="@/assets/img/skill_icon/html5.svg" alt="HTML5のアイコン">
              <img src="@/assets/img/skill_icon/css3.svg" alt="CSS3のアイコン">
              <img src="@/assets/img/skill_icon/typescript.svg" alt="TypeScriptのアイコン">
              <img src="@/assets/img/skill_icon/angular.svg" alt="Angularのアイコン">
              <img src="@/assets/img/skill_icon/firebase.svg" alt="Firebaseのアイコン">
            </p>
            <h3>担当</h3>
            <p>デザイン・コーディング</p>
            <h3>デザインについて</h3>
            <p>
              余計な機能は付けずに、シンプルなデザインにしました。
            </p>
            <h3>コーディングについて</h3>
            <p>
              ブラウザのローカルストレージにタスクを保存し、再読み込みしてもタスクが消えないようにしました。また他の人のフィードバックを元に、完了済みにしたタスクをすぐに削除するのではなく、ゴミ箱に入れるようにしました。
            </p>
          </div>
          <div class="connection-link">
            <a href="https://todoapp-6f8a8.web.app/" target="_blank" rel="noopener">URL</a>
            <a href="https://github.com/yusuke9912/todo" target="_blank" rel="noopener">GitHub</a>
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
  name: 'todo',
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