<template>
    <div>
        <shared-header></shared-header>

        <main class="content">
            <article class="article">
                <div class="article-container">
                <h2 class="article-title">{{ title }}</h2>
                <div class="article-body">
                    <p class="article-image small">
                    <carousel :per-page="1">
                        <slide v-for="screenshot in screenshots" :key="screenshot.imgUrl">
                        <img :src="screenshot.imgUrl" :alt="title + 'のスクリーンショット'">
                        </slide>
                    </carousel>
                    </p>
                    <h3>開発の経緯</h3>
                    <p v-html="description"></p>
                    <h3>使用言語/ツール</h3>
                    <ul class="used-skill-list">
                    <li v-for="skill in skills" :key="skill.name">
                      <img :src="skill.imgUrl" :alt="skill.name + 'のアイコン'" v-b-tooltip.hover.bottom.v-dark :title="skill.name">
                    </li>
                    </ul>
                    <h3>デザインについて</h3>
                    <p v-html="design"></p>
                    <h3>コーディングについて</h3>
                    <p v-html="coding"></p>
                </div>
                <div class="work-links">
                    <router-link to="/#works">作品一覧へ戻る</router-link>
                    <a :href="githubURL" target="_blank" rel="noopener" v-if="hasGithubURL">github.comで詳しく</a>
                    <a :href="serviceURL" target="_blank" rel="noopener" v-if="hasServiceURL">実際に触ってみる</a>
                </div>
                </div>
            </article>
        </main>

        <!-- footer -->
        <shared-footer></shared-footer>
        <!-- /footer -->
    </div>
</template>


<script scoped>
import sharedHeader from "@/components/shared/Header"
import sharedFooter from "@/components/shared/Footer"
import Carousel from "vue-carousel/src/Carousel"
import Slide from "vue-carousel/src/Slide"

export default {
  name: "shared-work",
  data: function () {
    return {
    flag: false,
    };
  },
  props: ["title", "description","design","coding","hasGithubURL","githubURL","hasServiceURL","serviceURL","screenshots","skills"],
    sharedHeader,
    sharedFooter,
    Carousel,
    Slide,
  }
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background: rgba(0,0,0,.7);
}

.header >>> .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
  opacity:1;
}
.article {
  padding: 140px 0 120px;
}

.article-container {
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;
}

.article-title {
  margin-bottom: 30px;
  text-align: center;
}

.article-body {
  max-width: 720px;
  margin: 0 auto;
  margin-bottom: 80px;
}

h3 {
  font-size: 18px;
  position: relative;
  padding: 0.5em;
  background: #a6d3c8;
  color: white;
  margin-bottom: 20px;
}
h3:not(:first-child) {
  margin-top: 50px;
}

h3::before {
  position: absolute;
  content: '';
  top: 100%;
  left: 0;
  border: none;
  border-bottom: solid 15px transparent;
  border-right: solid 20px rgb(149, 158, 155);
}
.article-body p {
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 30px;
}


.article-image{
  margin: 0 auto 50px;
}

.article-image.small{
  width: 500px;
  max-width: 100%;
}

.VueCarousel >>> .VueCarousel-wrapper{
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.used-skill-list{
  display: flex;
  align-items: center;
  padding: 10px 0;
}

.used-skill-list img{
  width:60px;
  margin-right: 10px;
}

.work-links{
  text-align: center;
  margin-top: 100px;
}

.work-links a{
  padding: 15px 30px;
  margin-bottom: 10px;
  border-radius: 30px;
}

.work-links a:nth-of-type(1) {
  color: #fff;
  background-color: #4c4c4c;
}

.work-links a:nth-of-type(2),.work-links a:nth-of-type(3) {
  color: #999999;
  background-color: #fff;
  border: 1px solid #999999;
}

@media screen and (max-width: 767px) {
  /* 下層ページ */
  .header >>> .container {
    padding: 15px;
  }

  .article {
    padding: 100px 0 30px;
  }

  .article-body h3 {
    font-size: 16px;
    padding-left: 0.8em;
  }

  .article-body h3:not(:first-child) {
    margin-top: 30px;
  }

  .article-body p {
    font-size: 14px;
    line-height: 1.7;
    margin-bottom: 20px;
  }

  .work-links{
    display: flex;
    flex-direction: column-reverse;
  }

}
</style>