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
import sharedWork from "@/components/shared/Work"

export default {
   data: function () {
    return {
      title:"情報処理技術者試験の過去問演習サイト",
      description:"基本情報技術者試験を受ける際、自分で過去問演習アプリを作って勉強しようと思い立ったため作成しました。インターン先の社員さんがITパスポートの試験を受けるため、ITパスポートの過去問も解けるようにしました。",
      design:"電車の中でも過去問を演習できるように、スマホで使うことを前提にデザインを考えました。問題に正解した場合は画面に大きく丸印が出るようにしたのがこだわりポイントです。",
      coding:"過去問は<a href='https://www.fe-siken.com/' target='_blank' rel='noopener'>基本情報技術者試験ドットコム</a>からpythonを使用してスクレイピングしました。間違えた問題を最後に復習できる機能をセッションを使って実装しました。",
      screenshots: [
        {
          imgUrl: require("@/assets/img/works/questions/questions.png"),
        },
        {
          imgUrl: require("@/assets/img/works/questions/questions2.png"),
        },
        {
          imgUrl: require("@/assets/img/works/questions/questions3.png"),
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