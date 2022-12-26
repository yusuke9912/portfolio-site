<template>
    <div>
        <shared-header></shared-header>

        <v-main>
          <v-container style="padding-top: 140px; padding-bottom: 120px;">
            <h2 class="text-center mb-5 font-weight-black" v-html="title"></h2>
            <div class="article-body">
                <p class="mx-5">
                <carousel :per-page="1">
                    <slide v-for="screenshot in screenshots" :key="screenshot.imgUrl">
                    <img :src="screenshot.imgUrl" :alt="title + 'のスクリーンショット'">
                    </slide>
                </carousel>
                </p>
                <h3>開発の経緯</h3>
                <p v-html="description"></p>
                <h3>使用言語/ツール</h3>
                <v-layout align-center overflow-x-auto>
                  <img v-for="skill in skills" :key="skill.name" :src="skill.imgUrl" :alt="skill.name + 'のアイコン'" v-b-tooltip.hover.bottom.v-dark :title="skill.name" width="60" class="mr-5">
                </v-layout>
                <h3>デザインについて</h3>
                <p v-html="design"></p>
                <h3>コーディングについて</h3>
                <p v-html="coding"></p>
            </div>
            <v-layout class="links" justify-center>
                <router-link to="/#works" class="works-link">作品一覧へ</router-link>
                <a :href="githubURL" target="_blank" rel="noopener" class="github-link" v-if="hasGithubURL">github.comで詳しく<fa :icon="['fas', 'arrow-up-right-from-square']" class="external-link-icon" /></a>
                <a :href="serviceURL" target="_blank" rel="noopener" class="service-link" v-if="hasServiceURL">実際に触ってみる<fa :icon="['fas', 'arrow-up-right-from-square']" class="external-link-icon" /></a>
            </v-layout>
          </v-container>
        </v-main>

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
.article-body {
  max-width: 720px;
  margin: 0 auto;
  margin-bottom: 80px;
}

h3 {
  font-size: 18px;
  position: relative;
  padding: 0.5em;
  background: var(--main-color);
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
  border-right: solid 20px #a3a3a3;
}
.article-body p {
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 30px;
}

.VueCarousel >>> .VueCarousel-wrapper{
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.links a{
  padding: 15px 30px;
  margin-bottom: 10px;
  border-radius: 30px;
  transition:all 0.15s ease-in-out;
}

.links .works-link {
  color: #fff;
  background-color: var(--main-color);
}

.links .works-link:hover {
  background-color: var(--main-color);
}

.links .github-link,.links .service-link {
  color: #777;
  background-color: #fff;
  border: 1px solid #777;
}

.links .github-link:hover,.links .service-link:hover {
  background-color: #f5f5f5;
}

.external-link-icon{
  margin-left: 5px;
  font-size: 17px;
}

@media screen and (max-width: 767px) {
  /* 下層ページ */
  .header >>> .container {
    padding: 15px;
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
}
</style>