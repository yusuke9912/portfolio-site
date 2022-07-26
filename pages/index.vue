<template>
  <div>
    <!-- header -->
    <shared-header></shared-header>
    <!-- /header -->

    <main class="content">
      <!-- mv -->
      <div class="mv text-white d-flex justify-content-center align-items-center text-center">
        <div class="mv-container">
          <p class="mv-title">Yusuke Nakagawa's Portfolio</p>
          <p class="mv-subtitle">Web Engineer</p>
        </div>
      </div>
      <!-- /mv -->

      <!-- about -->
      <section class="about section" id="about">
        <div class="container" :class="{fadeIn_left:visible_about}">
          <h2 class="text-center">About</h2>
          <div class="row justify-content-center">
            <div class="col-8">
              <div class="row justify-content-center">
                <div class="col-lg-3 py-3 align-self-center">
                  <img class="rounded-circle text-center" src="@/assets/img/profile.jpg" alt="プロフィール画像" />
                </div>
                <div class="col-lg-9">
                  <p>
                    はじめまして。九州大学工学部土木工学科4年の中川雄介と申します。
                  </p>
                  <p>
                    大学1年生の夏にプログラミングを始め、これまでエンジニアインターンやプライベートでの開発を通してスキルを磨いてきました。<br />
                    そうした中で自分のプログラミングへの適性を感じため、将来はITの道に進みたいと考えています。
                  </p>
                  <p>自分や世の中にあるアイデアを形にすることができる、多くの技術の引き出しを持ったエンジニアになれるよう努力し続けます。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /about -->

      <!-- works -->
      <section class="works section" id="works">
        <div class="container fadeIn" :class="{fadeIn_right:visible_works }">
          <h2 class="h2">Works</h2>
          <h3 class="h3">Web Application</h3>
          <div class="row">
            <div class="col-md-4 mb-4" v-for="work in web_works" v-bind:key="work.name">
              <a v-bind:href="work.link">
                <img class="rounded shadow-sm mb-3" v-bind:src="work.imgUrl" v-bind:alt="work.alt" />
                <p class="text-dark text-center">{{ work.name }}</p>
              </a>
            </div>
          </div>
          <h3 class="h3">Native Application</h3>
          <div class="row">
            <div class="col-md-4 mb-4" v-for="work in native_works" v-bind:key="work.name">
              <a v-bind:href="work.link">
                <img class="rounded shadow-sm mb-3" v-bind:src="work.imgUrl" v-bind:alt="work.alt" />
                <p class="text-dark text-center">{{ work.name }}</p>
              </a>
            </div>
          </div>
          <h3 class="h3">LINE bot</h3>
          <div class="row">
            <div class="col-md-4 mb-4" v-for="work in bot_works" v-bind:key="work.name">
              <a v-bind:href="work.link">
                <img class="rounded shadow-sm mb-3" v-bind:src="work.imgUrl" v-bind:alt="work.alt" />
                <p class="text-dark text-center">{{ work.name }}</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <!-- /works -->

      <!-- skill -->
      <section class="skill section" id="skill">
        <div class="container" :class="{fadeIn_left: visible_skills }">
          <h2 class="h2">Skill</h2>
          <div class="row">
            <div class="col-md-4 mb-4" v-for="skill in skills" v-bind:key="skill.name">
              <div class="card">
                <div class="card-body">
                  <div style="height:300px">
                  <div class="h-25">
                    <img class="h-100" v-bind:src="skill.imgUrl" v-bind:alt="skill.alt" />
                  </div>
                    <h3 class="card-title">{{ skill.name }}</h3>
                    <p class="card-text">{{ skill.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /skill -->

      <!-- contact -->
      <section class="contact section text-center" id="contact">
        <div class="container" :class="{fadeIn_up: visible_contact }">
          <h2>Contact</h2>
          <p>
            お問い合わせは、<br class="sp-only" />SNSまたはメールからお願いいたします。
          </p>
          <div>
            <a href="https://twitter.com/uke_9912" target="_blank" rel="noopener">
              <img src="@/assets/img/twitter.svg" alt="twitterのアイコン" />
            </a>
            <a href="https://github.com/yusuke9912" target="_blank" rel="noopener">
              <img src="@/assets/img/github.svg" alt="githubのアイコン" />
            </a>
            <a href="mailto:nakagawa.1202.y@gmail.com">
              <img src="@/assets/img/mail.svg" alt="メールのアイコン" />
            </a>
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
import sharedHeader from "../components/shared/Header.vue";
import sharedFooter from "../components/shared/Footer.vue";

export default {
  name: "home",
  data: function () {
    return {
      visible_about: true,
      visible_works: true,
      visible_skills: true,
      visible_contact: true,
      web_works: [
        {
          link: "/works/portfolio",
          imgUrl: require("@/assets/img/works/portfolio/portfolio.png"),
          alt:"ポートフォリオサイトのサムネイル",
          name: "ポートフォリオサイト",
        },
        {
          link: "/works/daredemojob",
          imgUrl: require("@/assets/img/works/daredemojob/daredemojob.png"),
          alt:"だれでもjobのサムネイル",
          name: "だれでもjob",
        },
        {
          link: "/works/chat",
          imgUrl: require("@/assets/img/works/chat/chat.png"),
          alt:"らくらくチャットのサムネイル",
          name: "らくらくチャット",
        },
        {
          link: "/works/typing",
          imgUrl: require("@/assets/img/works/typing/typing.png"),
          alt:"タイピングゲームのサムネイル",
          name: "タイピングゲーム",
        },
        {
          link: "/works/question",
          imgUrl: require("@/assets/img/works/questions/questions.png"),
          alt:"過去問演習サイトのサムネイル",
          name: "情報処理技術者試験の過去問演習サイト",
        },
        {
          link: "/works/todo",
          imgUrl: require("@/assets/img/works/todo/todo.png"),
          alt:"TODO管理ツールのサムネイル",
          name: "TODO管理ツール",
        },
        {
          link: "/works/news",
          imgUrl: require("@/assets/img/works/news/news.png"),
          alt:"まとめサイトのサムネイル",
          name: "コロナウイルスに関するニュースをまとめたサイト",
        },
      ],
      native_works:[
        {
          link: "/works/bond",
          imgUrl: require("@/assets/img/works/bond/bond.png"),
          alt:"BONDのサムネイル",
          name: '「自分」ではなく、「誰か」をよく見せるSNS "BOND"',
        },
      ],
      bot_works: [
        {
          link: "/works/board",
          imgUrl: require("@/assets/img/works/board_bot/board_bot.png"),
          alt:"掲示板通知LINEbotのサムネイル",
          name: "土木工学科掲示板の更新を通知するLINEbot",
        },
        {
          link: "/works/corona",
          imgUrl: require("@/assets/img/works/corona_bot/corona_bot.png"),
          alt:"感染者数通知LINEbotのサムネイル",
          name: "福岡県のコロナウイルス感染者数を通知するLINEbot",
        },
        {
          link: "/works/dogcat",
          imgUrl: require("@/assets/img/works/dog-cat_ai/dog-cat_ai.png"),
          alt:"犬猫判別LINEbotのサムネイル",
          name: "犬と猫を判別するLINEbot",
        },
      ],
      skills: [
        {
          imgUrl: require("@/assets/img/skill_icon/html5.svg"),
          alt:"HTML5のアイコン",
          name: "HTML5",
          text: "Webアプリケーションの作成に使用しています。デザインカンプをもとにLPを作成した経験があり、SEO対策のためのmetaタグの記入やGoogleアナリティクスの導入も可能です。",
        },
        {
          imgUrl: require("@/assets/img/skill_icon/css3.svg"),
          alt:"CSS3のアイコン",
          name: "CSS3",
          text: "Webアプリケーションの作成に使用しています。デザインカンプをもとにしたCSSの実装の経験があり、アニメーションの実装やレスポンシブデザインへの対応も可能です。",
        },
        {
          imgUrl: require("@/assets/img/skill_icon/javascript.svg"),
          alt:"JacaScriptのアイコン",
          name: "JavaScript",
          text: "スライダーやハンバーガーメニューなどWebサイトの動的な処理の実装に使用しています。ライブラリとしてはjQuery,フレームワークとしてはVueの使用経験があります。 Ajaxを用いた非同期通信の実装経験もあります。",
        },
        {
          imgUrl: require("@/assets/img/skill_icon/php.svg"),
          alt:"PHPのアイコン",
          name: "PHP",
          text: "Webアプリのバックエンドの実装に使用しています。PHPを使って過去問演習アプリやコロナに関するニュースをスクレイピングするアプリを作ったことがあります。また、フレームワークであるLaravelでのAPIの実装経験があります。",
        },
        {
          imgUrl: require("@/assets/img/skill_icon/ruby.svg"),
          alt:"Rubyのアイコン",
          name: "Ruby",
          text: "Webアプリのバックエンドの実装に使用しています。フレームワークであるRuby on Railsを使用して、タイピングゲームを作ったことがあります。",
        },
        {
          imgUrl: require("@/assets/img/skill_icon/python.svg"),
          alt:"Pythonのアイコン",
          name: "Python",
          text: "主にWebスクレイピングに使用しています。BeautifulSoupやSeleniumといったライブラリを使用して、twitterや情報処理技術者試験の過去問をスクレイピングしたことがあります。",
        },
        {
          imgUrl: require("@/assets/img/skill_icon/swift.svg"),
          alt:"Swiftのアイコン",
          name: "Swift",
          text: "iOSアプリの開発に使用しています。YoutubeKitなどのライブラリの使用やFirebaseとの連携の経験があります。また実際にAppleに申請を出し、App Storeにアプリを公開したことがあります。",
        },
        {
          imgUrl: require("@/assets/img/skill_icon/wordpress.svg"),
          alt:"WordPressのアイコン",
          name: "WordPress",
          text: "Webサイトの作成に使用しています。インターンにおいて社内HPをWordPressを使って作成・修正しました。プラグインの導入、バックアップ、環境の移行の経験があります。",
        },
        {
          imgUrl: require("@/assets/img/skill_icon/firebase.svg"),
          alt:"Firebaseのアイコン",
          name: "Firebase",
          text: "Webアプリのバックエンドの実装に使用しています。Firebaseを用いたwebサイトの公開、ユーザー認証の実装、メール送信機能、DBの導入の経験があります。リアルタイムチャットアプリを作成する際に使用しました。",
        },
        {
          imgUrl: require("@/assets/img/skill_icon/aws.svg"),
          alt:"AWSのアイコン",
          name: "AWS",
          text: "Webアプリのインフラの実装に使用しています。AWSを用いて、Webサーバーを立ち上げサイトを公開したことがあります。その際は独自ドメインを取得し、ロードバランサーの導入やSSL化なども行いました。",
        },
        {
          imgUrl: require("@/assets/img/skill_icon/mysql.svg"),
          alt:"MySQLのアイコン",
          name: "MySQL",
          text: "Webアプリケーション開発時のデータベースに使用しています。LaravelやRuby on Rails での開発時にデータベースとしてMySQLを選択しました。",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    if (window.pageYOffset == 0) {
      this.visible_about = false;
      this.visible_works = false;
      this.visible_skills = false;
      this.visible_contact = false;
    }
  },
  methods: {
    handleScroll() {
      let top;
      if (!this.visible_about) {
        top = document.getElementById("about").getBoundingClientRect().top;
        this.visible_about = top < window.innerHeight - 400;
      }
      if (!this.visible_works) {
        top = document.getElementById("works").getBoundingClientRect().top;
        this.visible_works = top < window.innerHeight - 400;
      }
      if (!this.visible_skills) {
        top = document.getElementById("skill").getBoundingClientRect().top;
        this.visible_skills = top < window.innerHeight - 400;
      }
      if (!this.visible_contact) {
        top = document.getElementById("contact").getBoundingClientRect().top;
        this.visible_contact = top < window.innerHeight - 100;
      }
    },
  },
  components: {
    sharedHeader,
    sharedFooter,
  },
};
</script>

<style>
.jumbotron {
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 0;
  background-color: #fff;
}
@media (min-width: 768px) {
  .jumbotron {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

.jumbotron p:last-child {
  margin-bottom: 0;
}

.jumbotron h1 {
  font-weight: 300;
}

.jumbotron .container {
  max-width: 40rem;
}

.card{
  border-radius: 0.5rem;
}
</style>