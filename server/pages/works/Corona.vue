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
      title:"福岡県のコロナ感染者数を通知するLINEbot",
      description:"福岡県のコロナウイルスの感染者数を毎日自動で通知するLINEbotです。最初は感染者数を通知するだけのものでしたが、ユーザーからの意見を取り入れ直近1週間平均と７日前1週間平均を出すようにしました。",
      design:"Flex Message Simulatorというサービスを利用してデザインを作成しました。感染者数が一番目立つように、感染者数だけ赤色にしました。",
      coding:"<a href='https://www.pref.fukuoka.lg.jp/contents/covid19-hassei.html' target='_blank' rel='noopener'>福岡県のHP</a>からデータを参照し、そのデータが更新されているとLINEに通知を送る処理をGASで定期実行しています。",
      hasGithubURL:true,
      githubURL: "https://github.com/yusuke9912/fukuoka-corona-linebot",
      hasServiceURL:true,
      serviceURL: "https://lin.ee/nX0uWov",
      screenshots: [
        {
          imgUrl: require("@/assets/img/works/corona_bot/corona_bot.png"),
        },
      ],
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