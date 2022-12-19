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
        <div class="container" :class="{fadeIn_left:visible_about}">
          <h2 class="title">About</h2>
          <div class="profile">
            <p class="profile-img">
              <img src="@/assets/img/profile.jpg" alt="プロフィール画像" />
            </p>
            <div class="profile-body">
              <p>
                はじめまして。<br>九州大学工学部土木工学科4年の中川雄介と申します。
              </p>
              <p>
                大学1年生の春に授業でプログラミングに出会い、これまでインターンやハッカソン、個人開発を通してスキルを磨いてきました。<br />
                そうした中でモノづくりの楽しさ、作ったものを他の人に使ってもらえる喜びを知り、この道に進むことを決めました。
              </p>
              <p>自分や世の中にあるアイデアをしっかりと形にすることができる、多くの技術の引き出しを持ったエンジニアになれるよう努力し続けます。</p>
            </div>
          </div>
        </div>
      </section>
      <!-- /about -->

      <!-- works -->
      <section class="works section" id="works">
        <div class="container" :class="{fadeIn_right:visible_works }">
          <h2 class="title">Works</h2>
          <!-- web application -->
          <h3>Web Application</h3>
          <div class="works-list row">
            <div class="works-item col-lg-4 col-sm-6" v-for="work in web_works" :key="work.name">
              <a :href="work.link" class="work-hover">
                <div class="figure">
                  <img :src="work.imgUrl" :alt="work.alt" />
                  <div class="caption">
                      <p class="hover-text" v-html="work.description"></p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- /web application -->
          <!-- native application -->
          <h3>Native Application</h3>
          <div class="works-list row">
            <div class="works-item col-lg-4 col-sm-6" v-for="work in native_works" :key="work.name">
              <a :href="work.link" class="work-hover">
                <div class="figure">
                  <img :src="work.imgUrl" :alt="work.alt" />
                  <div class="caption">
                      <p class="hover-text" v-html="work.description"></p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- /native application -->
          <!-- line bot -->
          <h3>LINE Bot</h3>
          <div class="works-list row">
            <div class="works-item col-lg-4 col-sm-6" v-for="work in bot_works" :key="work.name">
              <a :href="work.link" class="work-hover">
                <div class="figure">
                  <img :src="work.imgUrl" :alt="work.alt" />
                  <div class="caption">
                      <p class="hover-text" v-html="work.description"></p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!-- /line bot -->
      </section>
      <!-- /works -->

      <!-- skill -->
      <section class="skill section" id="skill">
        <v-container :class="{fadeIn_left: visible_skills }">
          <h2>Skill</h2>
          <v-row class="skill-list">
            <v-col cols="12" sm="6" md="4" lg="3" v-for="skill in skills" :key="skill.name"> 
              <v-card class="mx-auto py-6" elevation="3" @click="skill.show = !skill.show">
                <v-layout justify-center style="height:150px">
                  <v-img :src="skill.imgUrl" :alt="skill.alt" contain max-width="100"></v-img>
                </v-layout>
                
                <v-layout justify="space-between" class="mx-auto">
                  <v-card-title>{{ skill.name }}</v-card-title>
                  <v-spacer></v-spacer>
                  <v-card-actions>
                    <v-btn icon>
                      <v-icon>{{ skill.show ? "mdi-chevron-up" : "mdi-chevron-down"}}</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-layout>
                <v-expand-transition>
                  <div v-show="skill.show">
                    <v-divider></v-divider>
                    <v-card-text>{{ skill.text }}</v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <!-- /skill -->

      <!-- contact -->
      <section class="contact section" id="contact">
        <v-container>
          <h2>Contact</h2>
          <p class="py-1">
            お問い合わせは、<br class="sp-only" />SNSまたはメールからお願いいたします。
          </p>
          <v-layout justify-center>
            <a href="https://twitter.com/uke_9912" target="_blank" rel="noopener" class="px-3">
              <img src="@/assets/img/twitter.svg" width="40" alt="twitterのアイコン" />
            </a>
            <a href="https://github.com/yusuke9912" target="_blank" rel="noopener" class="px-3">
              <img src="@/assets/img/github.svg" width="40" alt="githubのアイコン" />
            </a>
            <a href="mailto:nakagawa.1202.y@gmail.com" class="px-3">
              <img src="@/assets/img/mail.svg" width="40" alt="メールのアイコン" />
            </a>
          </v-layout>
        </v-container>
      </section>
      <!-- /contact -->
    </main>

    <!-- footer -->
    <shared-footer></shared-footer>
    <!-- /footer -->
  </div>
</template>


<script>
import sharedHeader from "@/components/shared/Header";
import sharedFooter from "@/components/shared/Footer";

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
          imgUrl: require("@/assets/img/works/portfolio/portfolio_thumbnail.png"),
          alt:"ポートフォリオサイトのサムネイル",
          name: "ポートフォリオサイト",
          description:"作品を紹介するための<br>ポートフォリオサイト"
        },
        {
          link: "/works/daredemojob",
          imgUrl: require("@/assets/img/works/daredemojob/daredemojob_thumbnail.png"),
          alt:"だれでもjobのサムネイル",
          name: "だれでもjob",
          description:"人とのつながりを持ちつつ<br>仕事を依頼、受注できるような<br>高齢者向け求人サイト"
        },
        {
          link: "/works/chat",
          imgUrl: require("@/assets/img/works/chat/chat_thumbnail.png"),
          alt:"らくらくチャットのサムネイル",
          name: "らくらくチャット",
          description:"インターン生の日報共有ツール"
        },
        {
          link: "/works/typing",
          imgUrl: require("@/assets/img/works/typing/typing_thumbnail.png"),
          alt:"タイピングゲームのサムネイル",
          name: "タイピングゲーム",
          description:"ランキングで競えるタイピングゲーム"
        },
        {
          link: "/works/question",
          imgUrl: require("@/assets/img/works/questions/questions_thumbnail.png"),
          alt:"過去問演習サイトのサムネイル",
          name: "情報処理技術者試験の過去問演習サイト",
          description:"基本情報技術者試験の<br>過去問を解けるサイト"
        },
        {
          link: "/works/todo",
          imgUrl: require("@/assets/img/works/todo/todo_thumbnail.png"),
          alt:"TODO管理ツールのサムネイル",
          name: "TODO管理ツール",
          description:"TODOリストを管理できるサイト"
        },
        {
          link: "/works/news",
          imgUrl: require("@/assets/img/works/news/news_thumbnail.png"),
          alt:"まとめサイトのサムネイル",
          name: "コロナウイルスのニュースまとめサイト",
          description:"コロナウイルス関連のニュースを<br>まとめて確認できるサイト"
        },
      ],
      native_works:[
        {
          link: "/works/bond",
          imgUrl: require("@/assets/img/works/bond/bond_thumbnail.png"),
          alt:"BONDのサムネイル",
          name: 'BOND',
          description:"「自分」ではなく、「誰か」をよく見せるSNS"
        },
      ],
      bot_works: [
        {
          link: "/works/board",
          imgUrl: require("@/assets/img/works/board_bot/board_bot_thumbnail.png"),
          alt:"掲示板通知LINEbotのサムネイル",
          name: "学科掲示板の更新を通知するLINEbot",
          description:"九州大学工学部土木工学科の掲示板が更新されると通知が来るLINEbot"
        },
        {
          link: "/works/corona",
          imgUrl: require("@/assets/img/works/corona_bot/corona_bot_thumbnail.png"),
          alt:"感染者数通知LINEbotのサムネイル",
          name: "福岡県のコロナ感染者数を通知するLINEbot",
          description:"福岡県の日々の感染者数を通知するLINEbot"
        },
        {
          link: "/works/dogcat",
          imgUrl: require("@/assets/img/works/dog-cat_ai/dog-cat_ai_thumbnail.png"),
          alt:"犬猫判別LINEbotのサムネイル",
          name: "犬と猫を判別するLINEbot",
          description:"送った画像が「犬」か「猫」かを判別するLINEbot"
        },
      ],
      skills: [
        {
          imgUrl: require("@/assets/img/skill_icon/html5.svg"),
          alt:"HTML5のアイコン",
          name: "HTML5",
          text: "Webアプリケーションの作成に使用しています。デザインカンプをもとにLPを作成した経験があり、SEO対策のためのmetaタグの記入やGoogleアナリティクスの導入も可能です。",
          show: false,
        },
        {
          imgUrl: require("@/assets/img/skill_icon/css3.svg"),
          alt:"CSS3のアイコン",
          name: "CSS3",
          text: "Webアプリケーションの作成に使用しています。デザインカンプをもとにしたCSSの実装の経験があり、アニメーションの実装やレスポンシブデザインへの対応も可能です。",
          show: false,
        },
        {
          imgUrl: require("@/assets/img/skill_icon/javascript.svg"),
          alt:"JacaScriptのアイコン",
          name: "JavaScript",
          text: "スライダーやハンバーガーメニューなどWebサイトの動的な処理の実装に使用しています。ライブラリとしてはjQuery,フレームワークとしてはVueの使用経験があります。 Ajaxを用いた非同期通信の実装経験もあります。",
          show: false,
        },
        {
          imgUrl: require("@/assets/img/skill_icon/php.svg"),
          alt:"PHPのアイコン",
          name: "PHP",
          text: "Webアプリのバックエンドの実装に使用しています。PHPを使って過去問演習アプリやコロナに関するニュースをスクレイピングするアプリを作ったことがあります。また、フレームワークであるLaravelでのAPIの実装経験があります。",
          show: false,
        },
        {
          imgUrl: require("@/assets/img/skill_icon/ruby.svg"),
          alt:"Rubyのアイコン",
          name: "Ruby",
          text: "Webアプリのバックエンドの実装に使用しています。フレームワークであるRuby on Railsを使用して、タイピングゲームを作ったことがあります。",
          show: false,
        },
        {
          imgUrl: require("@/assets/img/skill_icon/python.svg"),
          alt:"Pythonのアイコン",
          name: "Python",
          text: "主にWebスクレイピングに使用しています。BeautifulSoupやSeleniumといったライブラリを使用して、twitterや情報処理技術者試験の過去問をスクレイピングしたことがあります。",
          show: false,
        },
        {
          imgUrl: require("@/assets/img/skill_icon/swift.svg"),
          alt:"Swiftのアイコン",
          name: "Swift",
          text: "iOSアプリの開発に使用しています。YoutubeKitなどのライブラリの使用やFirebaseとの連携の経験があります。また実際にAppleに申請を出し、App Storeにアプリを公開したことがあります。",
          show: false,
        },
        {
          imgUrl: require("@/assets/img/skill_icon/wordpress.svg"),
          alt:"WordPressのアイコン",
          name: "WordPress",
          text: "Webサイトの作成に使用しています。インターンにおいて社内HPをWordPressを使って作成・修正しました。プラグインの導入、バックアップ、環境の移行の経験があります。",
          show: false,
        },
        {
          imgUrl: require("@/assets/img/skill_icon/firebase.svg"),
          alt:"Firebaseのアイコン",
          name: "Firebase",
          text: "Webアプリのバックエンドの実装に使用しています。Firebaseを用いたwebサイトの公開、ユーザー認証の実装、メール送信機能、DBの導入の経験があります。リアルタイムチャットアプリを作成する際に使用しました。",
          show: false,
        },
        {
          imgUrl: require("@/assets/img/skill_icon/aws.svg"),
          alt:"AWSのアイコン",
          name: "AWS",
          text: "Webアプリのインフラの実装に使用しています。AWSを用いて、Webサーバーを立ち上げサイトを公開したことがあります。その際は独自ドメインを取得し、ロードバランサーの導入やSSL化なども行いました。",
          show: false,
        },
        {
          imgUrl: require("@/assets/img/skill_icon/mysql.svg"),
          alt:"MySQLのアイコン",
          name: "MySQL",
          text: "Webアプリケーション開発時のデータベースに使用しています。LaravelやRuby on Rails での開発時にデータベースとしてMySQLを選択しました。",
          show: false,
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