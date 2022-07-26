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
      title:"らくらくチャット",
      description:"株式会社SICでのインターン中に作成しました。インターンの日報を共有するツールとして利用してもらいました。",
      design:"LINEをモデルとしてチャットの画面をデザインしました。",
      coding:"ユーザー認証、画像データなどの保管場所及びデータベースにFirebaseを利用しました。Firebaseが提供するリアルタイムDBであるCloud Firestoreを利用することによってリアルタイムにメッセージが反映されるチャットを実現しました。",
      screenshots: [
        {
          imgUrl: require("@/assets/img/works/chat/chat.png"),
        },
        {
          imgUrl: require("@/assets/img/works/chat/chat2.png"),
        },        
        {
          imgUrl: require("@/assets/img/works/chat/chat3.png"),
        },        
        {
          imgUrl: require("@/assets/img/works/chat/chat4.png"),
        },        
        {
          imgUrl: require("@/assets/img/works/chat/chat5.png"),
        },        
        {
          imgUrl: require("@/assets/img/works/chat/chat6.png"),
        },        
        {
          imgUrl: require("@/assets/img/works/chat/chat7.png"),
        },        
        {
          imgUrl: require("@/assets/img/works/chat/chat8.png"),
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