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
                <slide><img src="@/assets/img/works/ehon/ehon.png" alt="絵本アプリのスナップショット"></slide>
                <slide><img src="@/assets/img/works/ehon/ehon4.png" alt="絵本アプリのスナップショット"></slide>
                <slide><img src="@/assets/img/works/ehon/ehon2.png" alt="絵本アプリのスナップショット"></slide>
                <slide><img src="@/assets/img/works/ehon/ehon5.png" alt="絵本アプリのスナップショット"></slide>
              </carousel>
            </p>
            <p>
              株式会社SICでのインターンにおいて、会社が運営する保育園の園児の知育を目的として作成しました。作成後実際にアプリを保育園で使用してもらい、知育効果の測定とフィードバックを頂きました。
            </p>
            <h3>使用技術/使用サービス</h3>
            <p class="skill-img">
              <img src="@/assets/img/skill_icon/html5.svg" alt="">
              <img src="@/assets/img/skill_icon/css3.svg" alt="">
              <img src="@/assets/img/skill_icon/javascript.svg" alt="">
              <img src="@/assets/img/skill_icon/aws.svg" alt="">
            </p>
            <h3>担当</h3>
            <p>デザイン・コーディング</p>
            <h3>デザインについて</h3>
            <p>
              園児が見やすいように原色を中心とした配色にしました。また、ボタンを大きめに作成し、園児が操作しやすいようにしました。
            </p>
            <h3>コーディングについて</h3>
            <p>
              園児が楽しんで操作できるように、ボタンを押した際に音が鳴るようにしました。また絵本の最後のページに次の絵本に飛べるボタンをつけることで、園児が長時間飽きずに遊べるように工夫をしました。
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

export default {
  name: 'ehon',
  components: {
    sharedHeader,
    sharedFooter,
  }
}
</script>

<style>

</style>