<template>
    <div>

      <!-- header -->
      <shared-work-header></shared-work-header>
      <!-- /header -->

<main class="content pt-5">
      <article class="py-5">
        <div class="px-3 row justify-content-center">
          <h2 class="text-center mb-3">だれでもjob</h2>
          
          <div class="col-lg-6 article-body">
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
            <ul class="d-flex skill-list">
              <li class="position-relative"><img src="@/assets/img/skill_icon/laravel.svg" alt="Laravelのアイコン" v-b-tooltip.hover.bottom.v-info title="Laravel"></li>
              <li><img src="@/assets/img/skill_icon/vue.svg" alt="Vueのアイコン" v-b-tooltip.hover.bottom.v-info title="Vue"></li>
              <li><img src="@/assets/img/skill_icon/mysql.svg" alt="MySQLのアイコン" v-b-tooltip.hover.bottom.v-info title="MySQL"></li>
              <li><img src="@/assets/img/skill_icon/pusher.svg" alt="Pusherのアイコン" v-b-tooltip.hover.bottom.v-info title="Pusher"></li>
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
          <div class="text-center mt-5">
            <a href="https://job.yusuke-engineer.com" target="_blank" rel="noopener" class="btn btn-success">サイトを開く</a>
            <a href="https://github.com/yusuke9912/hack-u-nho" target="_blank" rel="noopener" class="btn btn-success">GitHub</a>
            <router-link to="/#works" class="btn btn-success">作品一覧へ戻る</router-link>
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
import sharedHeader from "../../components/shared/WorkHeader.vue"
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