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
      </section>
      <!-- /about -->

      <!-- works -->
      <section class="works section" id="works">
        <div class="container" :class="{fadeIn_right:visible_works }">
          <h2 class="title">Works</h2>
          <!-- web application -->
          <h3>Web Application</h3>
          <div class="works-list">
            <a class="works-item" v-bind:href="work.link" v-for="work in web_works" v-bind:key="work.name">
              <div class="works-img">
                <img v-bind:src="work.imgUrl" v-bind:alt="work.alt" />
              </div>
              <p class="works-name">{{ work.name }}</p>
            </a>
          </div>
          <!-- /web application -->
          <!-- native application -->
          <h3>Native Application</h3>
          <div class="works-list">
            <a class="works-item" v-bind:href="work.link" v-for="work in native_works" v-bind:key="work.name">
              <div class="works-img">
                <img v-bind:src="work.imgUrl" v-bind:alt="work.alt" />
              </div>
              <p class="works-name">{{ work.name }}</p>
            </a>
          </div>
          <!-- /native application -->
          <!-- line bot -->
          <h3>LINE Bot</h3>
          <div class="works-list">
            <a class="works-item" v-bind:href="work.link" v-for="work in bot_works" v-bind:key="work.name">
              <div class="works-img">
                <img v-bind:src="work.imgUrl" v-bind:alt="work.alt" />
              </div>
              <p class="works-name">{{ work.name }}</p>
            </a>
          </div>
        </div>
        <!-- /line bot -->
      </section>
      <!-- /works -->

      <!-- skill -->
      <section class="skill section" id="skill">
        <div class="container" :class="{fadeIn_left: visible_skills }">
          <h2 class="title">Skill</h2>
          <div class="skill-list">
            <div
              class="skill-item"
              v-for="skill in skills"
              v-bind:key="skill.name"
            >
              <p class="skill-img">
                <img v-bind:src="skill.imgUrl" v-bind:alt="skill.alt" />
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
        <div class="container" :class="{fadeIn_up: visible_contact }">
          <h2 class="title">Contact</h2>
          <p class="lead">
            お問い合わせは、<br class="sp-only" />SNSまたはメールからお願いいたします。
          </p>
          <div class="contact-list">
            <a
              class="contact-item"
              href="https://twitter.com/uke_9912"
              target="_blank"
              rel="noopener"
            >
              <img src="@/assets/img/twitter.svg" alt="twitterのアイコン" />
            </a>
            <a
              class="contact-item"
              href="https://github.com/yusuke9912"
              target="_blank"
              rel="noopener"
            >
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
          imgUrl: "img/works/portfolio/portfolio.png",
          alt:"ポートフォリオサイトのサムネイル",
          name: "ポートフォリオサイト",
        },
        {
          link: "/works/chat",
          imgUrl: "img/works/chat/chat.png",
          alt:"チャットツールのサムネイル",
          name: "チャットツール",
        },
        {
          link: "/works/typing",
          imgUrl: "img/works/typing/typing.png",
          alt:"タイピングゲームのサムネイル",
          name: "タイピングゲーム",
        },
        {
          link: "/works/question",
          imgUrl: "img/works/questions/questions.png",
          alt:"過去問演習サイトのサムネイル",
          name: "情報処理技術者試験の過去問演習サイト",
        },
        {
          link: "/works/todo",
          imgUrl: "img/works/todo/todo.png",
          alt:"TODO管理ツールのサムネイル",
          name: "TODO管理ツール",
        },
        {
          link: "/works/news",
          imgUrl: "img/works/news/news.png",
          alt:"まとめサイトのサムネイル",
          name: "コロナウイルスに関するニュースをまとめたサイト",
        },
      ],
      native_works:[
        {
          link: "/works/bond",
          imgUrl: "img/works/bond/bond.png",
          alt:"BONDのサムネイル",
          name: '「自分」ではなく、「誰か」をよく見せるSNS "BOND"',
        },
      ],
      bot_works: [
        {
          link: "/works/board",
          imgUrl: "img/works/board_bot/board_bot.png",
          alt:"掲示板通知LINEbotのサムネイル",
          name: "土木工学科掲示板の更新を通知するLINEbot",
        },
        {
          link: "/works/corona",
          imgUrl: "img/works/corona_bot/corona_bot.png",
          alt:"感染者数通知LINEbotのサムネイル",
          name: "福岡県のコロナウイルス感染者数を通知するLINEbot",
        },
        {
          link: "/works/dogcat",
          imgUrl: "img/works/dog-cat_ai/dog-cat_ai.png",
          alt:"犬猫判別LINEbotのサムネイル",
          name: "犬と猫を判別するLINEbot",
        },
      ],
      skills: [
        {
          imgUrl: "/img/skill_icon/html5.svg",
          alt:"HTML5のアイコン",
          name: "HTML5",
          text: "Webアプリケーションの作成に使用しています。デザインカンプをもとにLPを作成した経験があり、SEO対策のためのmetaタグの記入やGoogleアナリティクスの導入も可能です。",
        },
        {
          imgUrl: "/img/skill_icon/css3.svg",
          alt:"CSS3のアイコン",
          name: "CSS3",
          text: "Webアプリケーションの作成に使用しています。デザインカンプをもとにしたCSSの実装の経験があり、アニメーションの実装やレスポンシブデザインへの対応も可能です。",
        },
        {
          imgUrl: "/img/skill_icon/javascript.svg",
          alt:"JacaScriptのアイコン",
          name: "JavaScript",
          text: "スライダーやハンバーガーメニューなどWebサイトの動的な処理の実装に使用しています。ライブラリとしてはjQuery,フレームワークとしてはVueの使用経験があります。 Ajaxを用いた非同期通信の実装経験もあります。",
        },
        {
          imgUrl: "/img/skill_icon/php.svg",
          alt:"PHPのアイコン",
          name: "PHP",
          text: "Webアプリのバックエンドの実装に使用しています。PHPを使って過去問演習アプリやコロナに関するニュースをスクレイピングするアプリを作ったことがあります。",
        },
        {
          imgUrl: "/img/skill_icon/ruby.svg",
          alt:"Rubyのアイコン",
          name: "Ruby",
          text: "Webアプリのバックエンドの実装に使用しています。フレームワークであるRuby on Railsを使用して、タイピングゲームを作ったことがあります。",
        },
        {
          imgUrl: "/img/skill_icon/python.svg",
          alt:"Pythonのアイコン",
          name: "Python",
          text: "主にWebスクレイピングに使用しています。BeautifulSoupやSeleniumといったライブラリを使用して、twitterや情報処理技術者試験の過去問をスクレイピングしたことがあります。",
        },
        {
          imgUrl: "/img/skill_icon/swift.svg",
          alt:"Swiftのアイコン",
          name: "Swift",
          text: "iOSアプリの開発に使用しています。YoutubeKitなどのライブラリの使用やFirebaseとの連携の経験があります。また実際にAppleに申請を出し、App Storeにアプリを公開したことがあります。",
        },
        {
          imgUrl: "/img/skill_icon/wordpress.svg",
          alt:"WordPressのアイコン",
          name: "WordPress",
          text: "Webサイトの作成に使用しています。インターンにおいて社内HPをWordPressを使って作成・修正しました。プラグインの導入、バックアップ、環境の移行の経験があります。",
        },
        {
          imgUrl: "/img/skill_icon/firebase.svg",
          alt:"Firebaseのアイコン",
          name: "Firebase",
          text: "Webアプリのバックエンドの実装に使用しています。Firebaseを用いたwebサイトの公開、ユーザー認証の実装、メール送信機能、DBの導入の経験があります。リアルタイムチャットアプリを作成する際に使用しました。",
        },
        {
          imgUrl: "/img/skill_icon/aws.svg",
          alt:"AWSのアイコン",
          name: "AWS",
          text: "Webアプリのインフラの実装に使用しています。AWSを用いて、Webサーバーを立ち上げサイトを公開したことがあります。その際は独自ドメインを取得し、プロキシサーバの導入やSSL化なども行いました。",
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