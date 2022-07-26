<template>
    <div>
      <shared-work 
        :title="title"
        :description="description"
        :design="design"
        :coding="coding"
        :screenshots="screenshots"
        :skills="skills"
      ></shared-work>
    </div>
</template>

<script>
import sharedWork from "../../components/shared/Work.vue"

export default {
   data: function () {
    return {
      title:"タイピングゲーム",
      description:"寿司打というタイピングゲームにハマっていた時、自分で一から同じものを作ってみたいと思い立ったため作成しました。家族や知り合いにも遊んでもらい、ランキングでスコアを競いました。",
      design:"残り3秒を切るとタイマーが赤くなるようにしたのがこだわりポイントです。",
      coding:"バックエンドにRuby on Railsを利用しました。ランキング機能の実装において、ユーザーごとの自己ベストを比較する処理を実装するのが大変でした。",
      screenshots: [
        {
          imgUrl: require("@/assets/img/works/typing/typing.png"),
        },
        {
          imgUrl: require("@/assets/img/works/typing/typing2.png"),
        },
        {
          imgUrl: require("@/assets/img/works/typing/typing3.png"),
        },
              {
          imgUrl: require("@/assets/img/works/typing/typing4.png"),
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
          name: "Ruby on Rails",
          imgUrl:require("@/assets/img/skill_icon/rails.svg"),
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