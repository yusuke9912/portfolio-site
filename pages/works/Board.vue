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
      title:"土木工学科掲示板の更新を通知するLINEbot",
      description:"自分が在籍する土木工学科の掲示板が更新されると通知を送るLINEbotです。掲示板の確認の手間をなくして、見落としを防止するために作成しました。現在土木工学科80人のうち、52人に使用してもらっています。",
      design:"Flex Message Simulatorというサービスを利用してデザインを作成しました。「掲示板を開く」というボタンを押すことで、見出しのページを開くことができるようにしました。",
      coding:"自作のRSSフィードを作成できるFeed43というサービスから掲示板の情報を取得し、更新があった場合はLINEに通知する処理をGASで定期実行するようにしています。",
      hasGithubURL:true,
      githubURL: "https://github.com/yusuke9912/board-notification-linebot",
      hasServiceURL:false,
      serviceURL: "",
      screenshots: [
        {
          imgUrl: require("@/assets/img/works/board_bot/board_bot.png"),
        },
        {
          imgUrl: require("@/assets/img/works/board_bot/board_bot2.png"),
        },      ],
      skills:[
        {
          name: "GAS",
          imgUrl:require("@/assets/img/skill_icon/gas.svg"),
        },
        {
          name: "LINE",
          imgUrl:require("@/assets/img/skill_icon/line.svg"),
        },      ]
    };
   },
  components: {
    sharedWork,
  }
}
</script>

<style>

</style>