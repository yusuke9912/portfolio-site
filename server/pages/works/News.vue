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
      title:"コロナウイルスの<br class='sp-only'>ニュースまとめサイト",
      description:"コロナウイルスに関する情報を効率よく集めるため、コロナウイルスに関する記事をまとめたサイトを作成しました。",
      design:"スマホ画面ではヘッダーがハンバーガーメニューになるようにしました。",
      coding:"phpQueryというPHPのライブラリを用いて<a href='https://news.yahoo.co.jp/' target='_blank' rel='noopener'>Yahoo!ニュース</a>から「コロナ」「マスク」「感染」というワードをタイトルに含む記事をスクレピングしました。",
      hasGithubURL:true,
      githubURL: "https://github.com/yusuke9912/news",
      hasServiceURL:true,
      serviceURL: "https://news9912.herokuapp.com/",
      screenshots: [
        {
          imgUrl: require("@/assets/img/works/news/news.png"),
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
          name: "JavaScript",
          imgUrl:require("@/assets/img/skill_icon/javascript.svg"),
        },  
        {
          name: "PHP",
          imgUrl:require("@/assets/img/skill_icon/php.svg"),
        },  
        {
          name: "Heroku",
          imgUrl:require("@/assets/img/skill_icon/heroku.svg"),
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