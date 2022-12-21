<template>
    <div>
      <shared-work 
        :title="title"
        :description="description"
        :design="design"
        :coding="coding"
        :hasGithubURL="hasGithubURL"
        :githubURL="githubURL"
        :hasServiceURL="hasServiceURL"
        :serviceURL="serviceURL"
        :screenshots="screenshots"
        :skills="skills"
      ></shared-work>
    </div>
</template>

<script>
import sharedWork from "@/components/shared/Work"

export default {
   data: function () {
    return {
      title:"ポートフォリオサイト",
      description:"自分がこれまで作ってきた作品を紹介するために作成しました。",
      design:"VuetifyというVueのUIフレームワークを利用しました。",
      coding:"フレームワークにVueを使用することにより、保守性の向上とサイトのSPA化を行いました。また、ハンバーガーメニューやスライドショー、スクロール時のアニメーションなどの画面の動きの実装も行いました。",
      hasGithubURL:true,
      githubURL: "https://github.com/yusuke9912/portfolio-site",
      hasServiceURL:true,
      serviceURL: "https://yusukesportfolio.web.app",
      screenshots: [
        {
          imgUrl: require("@/assets/img/works/portfolio/portfolio.png"),
        },
        {
          imgUrl: require("@/assets/img/works/portfolio/portfolio2.png"),
        },
        {
          imgUrl: require("@/assets/img/works/portfolio/portfolio3.png"),
        },
        {
          imgUrl: require("@/assets/img/works/portfolio/portfolio4.png"),
        },
        ],
      skills:[
        {
          name: "HTML5",
          imgUrl:require("@/assets/img/skill_icon/html5.svg"),
        },
        {
          name: "CSS3",
          imgUrl:require("@/assets/img/skill_icon/css3.svg"),
        },        
        {
          name: "Vue",
          imgUrl:require("@/assets/img/skill_icon/vue.svg"),
        },   
        {
          name: "Nuxt.js",
          imgUrl:require("@/assets/img/skill_icon/nuxt.svg"),
        }, 
        {
          name: "Vuetify",
          imgUrl:require("@/assets/img/skill_icon/vuetify.svg"),
        },    
        {
          name: "Firebase",
          imgUrl:require("@/assets/img/skill_icon/firebase.svg"),
        }, 
      ]
    };
   },
  components: {
    sharedWork,
  }
}
</script>

<style>

</style>