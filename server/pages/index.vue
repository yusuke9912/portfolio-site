<template>
  <div>
    <!-- header -->
    <shared-header></shared-header>
    <!-- /header -->

    <v-main>
      <!-- mv -->
      <div class="mv">
        <div>
          <p class="text-h5 text-sm-h2 font-weight-black" style="animation: fadeIn_up 2s;">Yusuke Nakagawa's Portfolio</p>
          <p class="text-h6 text-sm-h3 font-weight-black" style="animation: fadeIn_up 2s;">Web Engineer</p>
        </div>
      </div>
      <!-- /mv -->

      <!-- about -->
      <section class="py-16" id="about">
        <v-container>
          <h2 class="text-h4 text-sm-h3 text-center font-weight-black">About</h2>
          <v-row justify="center">
            <v-col cols="10" md="3" class="text-center about_fedeIn1" :class="{fadeIn:visible_about}">
                <img src="@/assets/img/profile.jpg" alt="プロフィール画像" style="width:90%;border-radius:50%;max-width:200px"/>
            </v-col>
            <v-col cols="10" md="7" class="about_fedeIn2" :class="{fadeIn:visible_about}">
              <p>
                はじめまして。<br>九州大学工学部土木工学科4年の中川雄介と申します。
              </p>
              <p>
                大学1年生の春に授業でプログラミングに出会い、これまでインターンやハッカソン、個人開発を通してスキルを磨いてきました。<br />
                そうした中でモノづくりの楽しさ、作ったものを他の人に使ってもらえる喜びを知り、この道に進むことを決めました。
              </p>
              <p>自分や世の中にあるアイデアをしっかりと形にすることができる、多くの技術の引き出しを持ったエンジニアになれるよう努力し続けます。</p>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <!-- /about -->

      <!-- works -->
      <section class="py-16" id="works">
        <v-container>
          <h2 class="text-h4 text-sm-h3 font-weight-black">Works</h2>
          <!-- web application -->
          <h3 class="mt-8">Web Application</h3>
          <v-row>
            <v-col cols="12" sm="6" md="4" v-for="work in web_works" :key="work.name" class="work_web_fedeIn" :class="{fadeIn:work.visible}">
              <a :href="work.link" class="work-hover">
                <div class="figure">
                  <img :src="work.imgUrl" :alt="work.alt" />
                  <div class="caption">
                      <p class="text-body-1 hover-text" v-html="work.description"></p>
                  </div>
                </div>
              </a>
              <p class="text-center d-block d-sm-none px-4 text-subtitle-2" v-html="work.description"></p>
            </v-col>
          </v-row>
          <!-- /web application -->
          <!-- native application -->
          <h3 class="mt-8">Native Application</h3>
          <v-row>
            <v-col cols="12" sm="6" md="4" v-for="work in native_works" :key="work.name" class="work_native_fedeIn" :class="{fadeIn:work.visible}">
              <a :href="work.link" class="work-hover">
                <div class="figure">
                  <img :src="work.imgUrl" :alt="work.alt" />
                  <div class="caption">
                      <p class="text-body-1 hover-text" v-html="work.description"></p>
                  </div>
                </div>
              </a>
              <p class="text-center d-block d-sm-none px-4 text-subtitle-2" v-html="work.description"></p>
            </v-col>
          </v-row>
          <!-- /native application -->
          <!-- line bot -->
          <h3 class="mt-8">LINE Bot</h3>
          <v-row>
            <v-col cols="12" sm="6" md="4" v-for="work in bot_works" :key="work.name" class="work_bot_fedeIn" :class="{fadeIn:work.visible}">
              <a :href="work.link" class="work-hover">
                <div class="figure">
                  <img :src="work.imgUrl" :alt="work.alt" />
                  <div class="caption">
                      <p class="text-body-1 hover-text" v-html="work.description"></p>
                  </div>
                </div>
              </a>
              <p class="text-center d-block d-sm-none px-4 text-subtitle-2" v-html="work.description"></p>
            </v-col>
          </v-row>
        </v-container>
        <!-- /line bot -->
      </section>
      <!-- /works -->

      <!-- skill -->
      <section class="py-16" id="skill">
        <v-container>
          <h2 class="text-h4 text-sm-h3 font-weight-black">Skill</h2>
          <v-row class="skill-list">
            <v-col cols="12" sm="6" md="4" lg="3" v-for="skill in skills" :key="skill.name" class="skill_fedeIn" :class="{fadeIn:skill.visible}"> 
              <v-card class="mx-auto py-6" elevation="3" @click="skill.show = !skill.show">
                  <v-img :src="skill.imgUrl" :alt="skill.alt" contain max-width="80" height="150" class="my-0 mx-auto"></v-img>
                
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
      <section class="py-16" id="contact">
        <v-container>
          <h2 class="text-h4 text-sm-h3 text-center font-weight-black">Contact</h2>
          <p class="py-1 text-center contact_fedeIn1" :class="{fadeIn:visible_contact}">
            お問い合わせは、<br class="sp-only" />SNSまたはメールからお願いいたします。
          </p>
          <v-layout justify-center class="contact_fedeIn2" :class="{fadeIn:visible_contact}">
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
    </v-main>

    <!-- footer -->
    <shared-footer></shared-footer>
    <!-- /footer -->
  </div>
</template>


<script>
document.documentElement.className = 'no-fouc';
import sharedHeader from "@/components/shared/Header";
import sharedFooter from "@/components/shared/Footer";

export default {
  name: "home",
  data: function () {
    return {
      visible_about: false,
      visible_contact: false,
      web_works: [
        {
          link: "/works/portfolio",
          imgUrl: require("@/assets/img/works/portfolio/portfolio_thumbnail.png"),
          alt:"ポートフォリオサイトのサムネイル",
          name: "ポートフォリオサイト",
          description:"作品を紹介するための<br>ポートフォリオサイト",
          visible:false
        },
        {
          link: "/works/daredemojob",
          imgUrl: require("@/assets/img/works/daredemojob/daredemojob_thumbnail.png"),
          alt:"だれでもjobのサムネイル",
          name: "だれでもjob",
          description:"人とのつながりを持ちつつ<br>仕事を依頼、受注できるような<br>高齢者向け求人サイト",
          visible:false
        },
        {
          link: "/works/chat",
          imgUrl: require("@/assets/img/works/chat/chat_thumbnail.png"),
          alt:"らくらくチャットのサムネイル",
          name: "らくらくチャット",
          description:"インターン生の日報共有ツール",
          visible:false
        },
        {
          link: "/works/typing",
          imgUrl: require("@/assets/img/works/typing/typing_thumbnail.png"),
          alt:"タイピングゲームのサムネイル",
          name: "タイピングゲーム",
          description:"ランキングで競えるタイピングゲーム",
          visible:false
        },
        {
          link: "/works/question",
          imgUrl: require("@/assets/img/works/questions/questions_thumbnail.png"),
          alt:"過去問演習サイトのサムネイル",
          name: "情報処理技術者試験の過去問演習サイト",
          description:"基本情報技術者試験の<br>過去問を解けるサイト",
          visible:false
        },
        {
          link: "/works/todo",
          imgUrl: require("@/assets/img/works/todo/todo_thumbnail.png"),
          alt:"TODO管理ツールのサムネイル",
          name: "TODO管理ツール",
          description:"TODOリストを管理できるサイト",
          visible:false
        },
        {
          link: "/works/news",
          imgUrl: require("@/assets/img/works/news/news_thumbnail.png"),
          alt:"まとめサイトのサムネイル",
          name: "コロナウイルスのニュースまとめサイト",
          description:"コロナウイルス関連のニュースを<br>まとめて確認できるサイト",
          visible:false
        },
      ],
      native_works:[
        {
          link: "/works/bond",
          imgUrl: require("@/assets/img/works/bond/bond_thumbnail.png"),
          alt:"BONDのサムネイル",
          name: 'BOND',
          description:"「自分」ではなく、「誰か」をよく見せるSNS",
          visible:false
        },
      ],
      bot_works: [
        {
          link: "/works/board",
          imgUrl: require("@/assets/img/works/board_bot/board_bot_thumbnail.png"),
          alt:"掲示板通知LINEbotのサムネイル",
          name: "学科掲示板の更新を通知するLINEbot",
          description:"九州大学工学部土木工学科の掲示板が更新されると通知が来るLINEbot",
          visible:false
        },
        {
          link: "/works/corona",
          imgUrl: require("@/assets/img/works/corona_bot/corona_bot_thumbnail.png"),
          alt:"感染者数通知LINEbotのサムネイル",
          name: "福岡県のコロナ感染者数を通知するLINEbot",
          description:"福岡県の日々の感染者数を通知するLINEbot",
          visible:false
        },
        {
          link: "/works/dogcat",
          imgUrl: require("@/assets/img/works/dog-cat_ai/dog-cat_ai_thumbnail.png"),
          alt:"犬猫判別LINEbotのサムネイル",
          name: "犬と猫を判別するLINEbot",
          description:"送った画像が「犬」か「猫」かを判別するLINEbot",
          visible:false
        },
      ],
      skills: [
        {
          imgUrl: require("@/assets/img/skill_icon/html5.svg"),
          alt:"HTML5のアイコン",
          name: "HTML5",
          text: "Webアプリケーションの作成に使用しています。デザインカンプをもとにLPを作成した経験があり、SEO対策のためのmetaタグの記入やGoogleアナリティクスの導入も可能です。",
          show: false,
          visible:false
        },
        {
          imgUrl: require("@/assets/img/skill_icon/css3.svg"),
          alt:"CSS3のアイコン",
          name: "CSS3",
          text: "Webアプリケーションの作成に使用しています。デザインカンプをもとにしたCSSの実装の経験があり、アニメーションの実装やレスポンシブデザインへの対応も可能です。",
          show: false,
          visible:false
        },
        {
          imgUrl: require("@/assets/img/skill_icon/javascript.svg"),
          alt:"JacaScriptのアイコン",
          name: "JavaScript",
          text: "スライダーやハンバーガーメニューなどWebサイトの動的な処理の実装に使用しています。ライブラリとしてはjQuery,フレームワークとしてはVueの使用経験があります。 Ajaxを用いた非同期通信の実装経験もあります。",
          show: false,
          visible:false
        },
        {
          imgUrl: require("@/assets/img/skill_icon/php.svg"),
          alt:"PHPのアイコン",
          name: "PHP",
          text: "Webアプリのバックエンドの実装に使用しています。PHPを使って過去問演習アプリやコロナに関するニュースをスクレイピングするアプリを作ったことがあります。また、フレームワークであるLaravelでのAPIの実装経験があります。",
          show: false,
          visible:false
        },
        {
          imgUrl: require("@/assets/img/skill_icon/ruby.svg"),
          alt:"Rubyのアイコン",
          name: "Ruby",
          text: "Webアプリのバックエンドの実装に使用しています。フレームワークであるRuby on Railsを使用して、タイピングゲームを作ったことがあります。",
          show: false,
          visible:false
        },
        {
          imgUrl: require("@/assets/img/skill_icon/python.svg"),
          alt:"Pythonのアイコン",
          name: "Python",
          text: "主にWebスクレイピングに使用しています。BeautifulSoupやSeleniumといったライブラリを使用して、twitterや情報処理技術者試験の過去問をスクレイピングしたことがあります。",
          show: false,
          visible:false
        },
        {
          imgUrl: require("@/assets/img/skill_icon/swift.svg"),
          alt:"Swiftのアイコン",
          name: "Swift",
          text: "iOSアプリの開発に使用しています。YoutubeKitなどのライブラリの使用やFirebaseとの連携の経験があります。また実際にAppleに申請を出し、App Storeにアプリを公開したことがあります。",
          show: false,
          visible:false
        },
        {
          imgUrl: require("@/assets/img/skill_icon/wordpress.svg"),
          alt:"WordPressのアイコン",
          name: "WordPress",
          text: "Webサイトの作成に使用しています。インターンにおいて社内HPをWordPressを使って作成・修正しました。プラグインの導入、バックアップ、環境の移行の経験があります。",
          show: false,
          visible:false
        },
        {
          imgUrl: require("@/assets/img/skill_icon/firebase.svg"),
          alt:"Firebaseのアイコン",
          name: "Firebase",
          text: "Webアプリのバックエンドの実装に使用しています。Firebaseを用いたwebサイトの公開、ユーザー認証の実装、メール送信機能、DBの導入の経験があります。リアルタイムチャットアプリを作成する際に使用しました。",
          show: false,
          visible:false
        },
        {
          imgUrl: require("@/assets/img/skill_icon/aws.svg"),
          alt:"AWSのアイコン",
          name: "AWS",
          text: "Webアプリのインフラの実装に使用しています。AWSを用いて、Webサーバーを立ち上げサイトを公開したことがあります。その際は独自ドメインを取得し、ロードバランサーの導入やSSL化なども行いました。",
          show: false,
          visible:false
        },
        {
          imgUrl: require("@/assets/img/skill_icon/mysql.svg"),
          alt:"MySQLのアイコン",
          name: "MySQL",
          text: "Webアプリケーション開発時のデータベースに使用しています。LaravelやRuby on Rails での開発時にデータベースとしてMySQLを選択しました。",
          show: false,
          visible:false
        },
      ],
    };
  },
  mounted() {
    document.querySelector('.no-fouc').classList.remove('no-fouc');
    window.addEventListener("scroll", this.handleScroll);
    if (window.pageYOffset == 0) {
      this.visible_about = false;
      this.visible_contact = false;
    }
  },
  methods: {
    handleScroll() {
      if (!this.visible_about) {
        let top = document.getElementById("about").getBoundingClientRect().top;
        this.visible_about = top < window.innerHeight - 300;
      }
      let work_web_fedeIn_elements = document.getElementsByClassName("work_web_fedeIn");
      for( let i = 0 ; i < work_web_fedeIn_elements.length ; i ++ ) {
        if(!this.web_works[i].visible){
          let top = work_web_fedeIn_elements[i].getBoundingClientRect().top;
          this.web_works[i].visible = top < window.innerHeight - 200;
        }
      }
      let work_native_fedeIn_elements = document.getElementsByClassName("work_native_fedeIn");
      for( let i = 0 ; i < work_native_fedeIn_elements.length ; i ++ ) {
        if(!this.native_works[i].visible){
          let top = work_native_fedeIn_elements[i].getBoundingClientRect().top;
          this.native_works[i].visible = top < window.innerHeight - 200;
        }
      }
      let work_bot_fedeIn_elements = document.getElementsByClassName("work_bot_fedeIn");
      for( let i = 0 ; i < work_bot_fedeIn_elements.length ; i ++ ) {
        if(!this.bot_works[i].visible){
          let top = work_bot_fedeIn_elements[i].getBoundingClientRect().top;
          this.bot_works[i].visible = top < window.innerHeight - 200;
        }
      }
      let skill_fedeIn_elements = document.getElementsByClassName("skill_fedeIn");
      for( let i = 0 ; i < skill_fedeIn_elements.length ; i ++ ) {
        if(!this.skills[i].visible){
          let top = skill_fedeIn_elements[i].getBoundingClientRect().top;
          this.skills[i].visible = top < window.innerHeight - 200;
        }
      }
      if (!this.visible_contact) {
        let top = document.getElementById("contact").getBoundingClientRect().top;
        this.visible_contact = top < window.innerHeight - 300;
      }
    },
  },
  components: {
    sharedHeader,
    sharedFooter,
  },
};
</script>