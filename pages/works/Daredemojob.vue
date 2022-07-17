<template>
    <div class="wrapper">

      <!-- header -->
      <!-- <shared-header></shared-header> -->
      <!-- /header -->

<main class="content">

      <article class="article">
        <div class="article-container">
          <h2 class="article-title">だれでもjob</h2>
          <div class="article-body">
            <p class="article-image small">
              <carousel :per-page="1">
                <slide><img src="@/assets/img/works/daredemojob/daredemojob.png" alt="だれでもjobのスクリーンショット"></slide>
                <slide><img src="@/assets/img/works/daredemojob/daredemojob2.png" alt="だれでもjobのスクリーンショット"></slide>
                <slide><img src="@/assets/img/works/daredemojob/daredemojob3.png" alt="だれでもjobのスクリーンショット"></slide>
                <slide><img src="@/assets/img/works/daredemojob/daredemojob4.png" alt="だれでもjobのスクリーンショット"></slide>
                <slide><img src="@/assets/img/works/daredemojob/daredemojob5.png" alt="だれでもjobのスクリーンショット"></slide>
                <slide><img src="@/assets/img/works/daredemojob/daredemojob6.png" alt="だれでもjobのスクリーンショット"></slide>
                <slide><img src="@/assets/img/works/daredemojob/daredemojob7.png" alt="だれでもjobのスクリーンショット"></slide>
              </carousel>
            </p>
            <p>
             Yahooと九州大学が共同で行っている「<a href="https://sites.google.com/view/ideathon-hackathon/">Hack U 九州大学 2022</a>」において3人のチームで開発を行いました。高齢者が持つ悩みで多い「人とのつながりの少なさ」に着目し、人とのつながりを持ちつつ仕事を依頼、受注できるような求人サイトを作りました。
            </p>
            <h3>使用言語/ツール</h3>
            <ul class="skill-img">
              <li><img src="@/assets/img/skill_icon/laravel.svg" alt="Laravelのアイコン"><span class="tooltip">Laravel</span></li>
              <li><img src="@/assets/img/skill_icon/vue.svg" alt="Vueのアイコン"><span class="tooltip">Vue</span></li>
              <li><img src="@/assets/img/skill_icon/mysql.svg" alt="MySQLのアイコン"><span class="tooltip">MySQL</span></li>
              <li><img src="@/assets/img/skill_icon/pusher.svg" alt="Pusherのアイコン"><span class="tooltip">Pusher</span></li>
            </ul>
            <h3>担当</h3>
            <p>コーディング</p>
            <h3>デザインについて</h3>
            <p>
              3人の中でプログラミングができるものが自分だけということもあり、デザインに関しては残りの2人が中心となってやっていただきました。
            </p>
            <h3>コーディングについて</h3>
            <p>
              バックエンドにLaravel、フロントエンドにVueを使っています。またインフラにはAWSを使用し、ロードバランサーの導入、SSL化まで行いました。<br>「人とのつながり」が大きなテーマであることから、リアルタイムでのチャット機能を実装しました。リアルタイムでメッセージを画面に反映させるにあたり<a href="https://pusher.com/">Pusher</a>というサービスを利用しました。
            </p>
          </div>
          <div class="connection-link">
            <a href="https://job.yusuke-engineer.com" target="_blank" rel="noopener">サイトを開く</a>
            <a href="https://github.com/yusuke9912/hack-u-nho" target="_blank" rel="noopener">GitHub</a>
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