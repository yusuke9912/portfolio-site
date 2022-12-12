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
      title:"だれでもjob",
      description:"Yahooと九州大学が共同で行っている「<a href='https://sites.google.com/view/ideathon-hackathon/' target='_blank' rel='noopener'>Hack U 九州大学 2022</a>」において3人のチームで開発を行いました。高齢者が持つ悩みで多い「人とのつながりの少なさ」に着目し、人とのつながりを持ちつつ仕事を依頼、受注できるような求人サイトを作りました。",
      design:"3人の中でプログラミングができるものが自分だけということもあり、デザインに関しては残りの2人が中心となってやっていただきました。",
      coding:"バックエンドにLaravel、フロントエンドにVueを使っています。またインフラにはAWSを使用し、ロードバランサーの導入、SSL化まで行いました。<br>「人とのつながり」が大きなテーマであることから、リアルタイムでのチャット機能を実装しました。リアルタイムでメッセージを画面に反映させるにあたり<a href='https://pusher.com/' target='_blank' rel='noopener'>Pusher</a>というサービスを利用しました。",
      hasGithubURL:true,
      githubURL: "https://github.com/yusuke9912/hack-u-nho",
      hasServiceURL:false,
      serviceURL: "",
      screenshots: [
        {
          imgUrl: require("@/assets/img/works/daredemojob/daredemojob.png"),
        },
        {
          imgUrl: require("@/assets/img/works/daredemojob/daredemojob2.png"),
        },
        {
          imgUrl: require("@/assets/img/works/daredemojob/daredemojob3.png"),
        },
        {
          imgUrl: require("@/assets/img/works/daredemojob/daredemojob4.png"),
        },
        {
          imgUrl: require("@/assets/img/works/daredemojob/daredemojob5.png"),
        },
        {
          imgUrl: require("@/assets/img/works/daredemojob/daredemojob6.png"),
        },
        {
          imgUrl: require("@/assets/img/works/daredemojob/daredemojob7.png"),
        },
      ],
      skills:[
        {
          name: "Laravel",
          imgUrl:require("@/assets/img/skill_icon/laravel.svg"),
        },
        {
          name: "Vue",
          imgUrl:require("@/assets/img/skill_icon/vue.svg"),
        },
        {
          name: "MySQL",
          imgUrl:require("@/assets/img/skill_icon/mysql.svg"),
        },
        {
          name: "Pusher",
          imgUrl:require("@/assets/img/skill_icon/pusher.svg"),
        },
        {
          name: "AWS",
          imgUrl:require("@/assets/img/skill_icon/aws.svg"),
        }
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