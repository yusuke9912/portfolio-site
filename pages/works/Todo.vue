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
      title:"TODO管理ツール",
      description:"仕事でAngularを利用することになったため、Angularの勉強の一環として作成しました。",
      design:"余計な機能は付けずに、シンプルなデザインにしました。",
      coding:"ブラウザのローカルストレージにタスクを保存し、再読み込みしてもタスクが消えないようにしました。また他の人のフィードバックを元に、完了済みにしたタスクをすぐに削除するのではなく、ゴミ箱に入れるようにしました。",
      hasGithubURL:true,
      githubURL: "https://github.com/yusuke9912/todo",
      hasServiceURL:true,
      serviceURL: "https://todoapp-6f8a8.web.app/",
      screenshots: [
        {
          imgUrl: require("@/assets/img/works/todo/todo.png"),
        },
        {
          imgUrl: require("@/assets/img/works/todo/todo2.png"),
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
          name: "TypeScript",
          imgUrl:require("@/assets/img/skill_icon/typescript.svg"),
        },
        {
          name: "Angular",
          imgUrl:require("@/assets/img/skill_icon/angular.svg"),
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