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
      title:'「自分」ではなく、「誰か」を<br class="sp-only">よく見せるSNS "BOND"',
      description:"Twitterで知り合った<a href='https://twitter.com/BOND_SOW_CEO' target='_blank' rel='noopener'>中丸与志哉</a>さん率いるチーム「想」において、大切な人にメッセージ動画を送りあうアプリの開発を行いました。<br>このアプリを通して大切な人へのメッセージを送りあってもらい、リアルな世界でのコミュニケーションを変えていきたいと思っています。",
      design:"チーム内で話し合いながらアプリのフレームワークを作成しました。シンプルで使いやすいデザインを心掛けました。またApp Storeに載せるスクリーンショットやアイコンもチーム内でお互いに案を出し合い、作成しました。",
      coding:"ユーザーの認証や動画データの保存はFirebaseを使用しました。またYoutubeの動画をアプリ内で再生できるようにYoutubeKitというライブラリを使用しました。初めてのネイティブアプリ開発ということもあり、試行錯誤しながら少しずつ開発を進めていきました。",
      hasGithubURL:false,
      githubURL: "",
      hasServiceURL:true,
      serviceURL: "https://apps.apple.com/jp/app/bond-%E3%83%9C%E3%83%B3%E3%83%89/id1614269869?itsct=apps_box_link&itscg=30200",
      screenshots: [
        {
          imgUrl: require("@/assets/img/works/bond/bond.png"),
        },
        {
          imgUrl: require("@/assets/img/works/bond/bond2.png"),
        },      ],
      skills:[
        {
          name: "swift",
          imgUrl:require("@/assets/img/skill_icon/swift.svg"),
        },
        {
          name: "firebase",
          imgUrl:require("@/assets/img/skill_icon/firebase.svg"),
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