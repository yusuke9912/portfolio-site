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
      title:"犬と猫を判別するLINEbot",
      description:"送信された画像の中に写っているものが犬か猫かをAIを用いて判別するLINEbotです。<a href='https://aimaker.io/' target='_blank' rel='noopener'>AIメーカー</a>という面白いサービスを見つけたので作成しました。",
      design:"Flex Message Simulatorというサービスを利用してデザインを作成しました。犬か猫かを判別するだけでなく、判別結果がどれほど確証できるのかをパーセント表示で表すようにしました。",
      coding:"犬と猫を判別するモデルはAIメーカーで作成しました。GASからAIメーカーのAPIを呼び出した後、画像が犬か猫かの判別結果をLINEに送信するようにしました。",
      hasGithubURL:true,
      githubURL: "https://github.com/yusuke9912/dogs-cats-recognition-linebot",
      hasServiceURL:false,
      serviceURL: "",
      screenshots: [
        {
          imgUrl: require("@/assets/img/works/dog-cat_ai/dog-cat_ai.png"),
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