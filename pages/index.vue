<template>
<div class="wrapper">
      <!-- header -->
      <shared-header></shared-header>
      <!-- /header -->

      <main class="content">
        <!-- mv -->
        <div class="mv">
          <div class="mv-container">
            <p class="mv-title">Yusuke Nakagawa's Portfolio</p>
            <p class="mv-subtitle">Web Engineer</p>
          </div>
        </div>
        <!-- /mv -->

        <!-- about -->
        <section class="about section" id="about">
          <div class="container" v-bind:class="{show:visible_about}">
            <h2 class="title">About</h2>
            <div class="profile">
              <p class="profile-img">
                <img src="@/assets/img/profile.jpg" alt="" />
              </p>
              <div class="profile-body">
                <p>はじめまして！九州大学工学部土木工学科3年の中川雄介と申します。</p>
                <p>
                  大学1年の頃からプログラミングを始めて、これまでwebアプリやbotの作成、定型的な作業の自動化を行ってきました。<br />
                  将来はITの道に進みたいと考えており、自分のアイデアを形にできるエンジニアになれるように日々努力を積み重ねています！
                </p>
              </div>
            </div>
          </div>
        </section>
        <!-- /about -->

                <!-- works -->
        <section class="works section" id="works">
          <div class="container" v-bind:class="{show:visible_works}">
            <h2 class="title">Works</h2>
            <h3>Web Application</h3>
              <div class="works-list">
                <a class="works-item" v-bind:href="work.link" v-for="work in web_works" v-bind:key="work.name">
                  <div class="works-img">
                    <img v-bind:src="work.imgUrl" alt="" />
                  </div>
                  <p class="works-name">{{ work.name }}</p>
                </a>
              </div>
             <h3>LINE Bot</h3>
             <div class="works-list">
              <router-link class="works-item" v-bind:to="work.link" v-for="work in bot_works" v-bind:key="work.name">
                <div class="works-img">
                  <img v-bind:src="work.imgUrl" alt="" />
                </div>
                <p class="works-name">{{ work.name }}</p>
              </router-link>
             </div>
          </div>   
        </section>
        <!-- /works -->

        <!-- skill -->
        <section class="skill section" id="skill">
          <div class="container" v-bind:class="{show:visible_skills}">
            <h2 class="title">Skill</h2>
            <div class="skill-list">
              <div class="skill-item" v-for="skill in skills"  v-bind:key="skill.name">
                <p class="skill-img">
                  <img v-bind:src="skill.imgUrl" alt="" />
                </p>
                <div class="skill-body">
                  <h3 class="skill-name">{{ skill.name }}</h3>
                  <p class="skill-text">
                    {{ skill.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- /skill -->

        <!-- contact -->
        <section class="contact section" id="contact">
          <div class="container" v-bind:class="{show:visible_contact}">
            <h2 class="title">Contact</h2>
            <p class="lead">
              お問い合わせは、<br class="sp-only"/>メールにてお願いいたします。
            </p>
            <div class="contact-list">
              <a class="contact-item" href="https://twitter.com/uke_9912" target="_blank" rel="noopener">
                <img src="@/assets/img/twitter.svg" alt="twitterのアイコン" />
              </a>
              <a class="contact-item" href="https://github.com/yusuke9912" target="_blank" rel="noopener">
                <img src="@/assets/img/github.svg" alt="githubのアイコン"/>
              </a>
              <p class="mail-adress">nakagawa.1202.n@gmail.com</p>
            </div>
          </div>
        </section>
        <!-- /contact -->
      </main>

      <!-- footer -->
      <shared-footer></shared-footer>
      <!-- /footer -->
    </div>
</template>


<script>
import sharedHeader from "../components/shared/Header.vue"
import sharedFooter from "../components/shared/Footer.vue"

export default {
  name: 'home',
  data: function() {
    return {
      visible_about: true,
      visible_works: true,
      visible_skills: true,
      visible_contact: true,
    web_works:[
      {
        link:"/works/portfolio",
        imgUrl:"img/works/portfolio/portfolio.png",
        name:"ポートフォリオサイト"
      },
      {
        link:"/works/ehon",
        imgUrl:"img/works/ehon/ehon.png",
        name:"保育用絵本アプリ"
      },
      {
        link:"/works/chat",
        imgUrl:"img/works/chat/chat.png",
        name:"チャットアプリ"
      },
      {
        link:"/works/typing",
        imgUrl:"img/works/typing/typing.png",
        name:"タイピングゲーム"
      },
      {
        link:"/works/question",
        imgUrl:"img/works/questions/questions.png",
        name:"情報処理技術者試験の過去問演習アプリ"
        },
      {
        link:"/works/todo",
        imgUrl:"img/works/todo/todo.png",
        name:"TODOリスト管理アプリ"
      },
      {
        link:"/works/news",
        imgUrl:"img/works/news/news.png",
        name:"コロナウイルスに関するニュースをまとめたサイト"
      },
    ],
    bot_works:[
      {
        link:"/works/board",
        imgUrl:"img/works/board_bot/board_bot.png",
        name:"土木工学科掲示板の更新を通知するLINEbot"
      },
      {
        link:"/works/corona",
        imgUrl:"img/works/corona_bot/corona_bot.png",
        name:"福岡県のコロナウイルス感染者数を通知するLINEbot"
      },
      {
        link:"/works/dogcat",
        imgUrl:"img/works/dog-cat_ai/dog-cat_ai.png",
        name:"犬と猫を判別するLINEbot"
      },
    ],
    skills:[
      {
        imgUrl:"/img/skill_icon/html5.svg",
        name:"HTML5",
        text:"Webサイトの作成に使用しています。metaタグの記入や、ファビコンの設定も可能です。"
      },
      {
        imgUrl:"/img/skill_icon/css3.svg",
        name:"CSS3",
        text:"Webサイトの作成に使用しています。レスポンシブデザインへの対応も可能です。"
      },
      {
        imgUrl:"/img/skill_icon/javascript.svg",
        name:"JavaScript",
        text:"スライダーやハンバーガーメニューなどWebサイトの動的な処理の実装に使用しています。ライブラリとしてはjQuery,フレームワークとしてはVueの使用経験があります。 Ajaxを用いた非同期通信の実装経験もあります。"
      },
      {
        imgUrl:"/img/skill_icon/php.svg",
        name:"PHP",
        text:"Webアプリのバックエンドの実装に使用しています。PHPを使って過去問演習アプリやコロナに関するニュースをスクレイピングするアプリを作ったことがあります。"
      },
      {
        imgUrl:"/img/skill_icon/ruby.svg",
        name:"Ruby",text:"Webアプリのバックエンドの実装に使用しています。フレームワークであるRuby on Railsを使用して、タイピングゲームを作ったことがあります。"
      },
      {
        imgUrl:"/img/skill_icon/python.svg",
        name:"Python",
        text:"主にWebスクレイピングに使用しています。BeautifulSoupやSeleniumといったライブラリを使用して、twitterや情報処理技術者試験の過去問をスクレイピングしたことがあります。"
      },
      {
        imgUrl:"/img/skill_icon/wordpress.svg",
        name:"WordPress",
        text:"Webサイトの作成に使用しています。インターンにおいて社内HPをWordPressを使って作成・修正しました。プラグインの導入、バックアップ、環境の移行の経験があります。"
      },
      {
        imgUrl:"/img/skill_icon/firebase.svg",
        name:"Firebase",
        text:"Webアプリのバックエンドの実装に使用しています。Firebaseを用いたwebサイトの公開、ユーザー認証の実装、メール送信機能、DBの導入の経験があります。リアルタイムチャットアプリを作成する際に使用しました。"
      },
      {
        imgUrl:"/img/skill_icon/aws.svg",
        name:"AWS",
        text:"Webアプリのインフラの実装に使用しています。AWSを用いて、Webサーバーを立ち上げサイトを公開したことがあります。その際は独自ドメインを取得し、プロキシサーバの導入やSSL化なども行いました。"
      },
    ]
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    if(window.pageYOffset == 0){
      this.visible_about = false;
      this.visible_works = false;
      this.visible_skills = false;
      this.visible_contact = false;
    }
  },
  methods:{
    handleScroll() {
      let top;
      if (!this.visible_about) {
        top = document.getElementById("about").getBoundingClientRect().top;
        this.visible_about = top < window.innerHeight -400;
      }
      if (!this.visible_works) {
        top = document.getElementById("works").getBoundingClientRect().top;
        this.visible_works = top < window.innerHeight -400;
      }
      if (!this.visible_skills) {
        top = document.getElementById("skill").getBoundingClientRect().top;
        this.visible_skills = top < window.innerHeight -400;
      }
      if (!this.visible_contact) {
        top = document.getElementById("contact").getBoundingClientRect().top;
        this.visible_contact = top < window.innerHeight -100;
      }
    }
  },
  components: {
    sharedHeader,
    sharedFooter
  }
}
</script>