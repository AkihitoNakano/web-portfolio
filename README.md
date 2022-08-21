# 俳句や川柳を投稿して交流できる SNSweb アプリケーション　【Node.js / MongoDB / Docker / Cloud Storage / Cloud Run】

## はじめに

---

### 記事の目的

**趣味と勉学目的で作成した Twitter ライクな 575 投稿アプリケーションを解説した記事になります**。

#### 注意点

<u>この Github リポジトリで公開しているソースコードはポートフォリオサイトのソースコードであり、web アプリのものと内容が異なります。 紹介しているアプリケーションは現在も運営中のためソースコード公開することができません、あらかじめご容赦下さい。</u>

![picture 2](images/b93282656e57164a7f39f2db778d5c1778aadd34009532b229495b7fd63889f1.png)

主な使用技術はフロントエンドに Vanilla の **JacaScript**、バックエンドに **Node.js**
データベースに **MongoDB**、ストレージに GCP の **Cloud Storage**、デプロイのためのイメージ作成とそのパイプラインに **Docker** と gcloud CLI、デプロイサービスは GCP の**Cloud Run** を使用しています。

## 目次

1. アプリの概要
2. 企画
3. アプリの機能
4. 使用した技術スタック
5. システム構成図
6. 使用ツール
7. 頑張った点、難しかったところ
8. 実装予定の機能
9. どのように学習したか
10. 今後の学習

## 開発者について

---

- 12 年間 CG/VFX 業界で映画や TV,CM などの映像の仕事に従事していた
- 趣味で UNREAL ENGINE を使ったゲーム開発を行い、iOS に公開した経験あり
- 独学でプログラミング学習を始めてプログラミングの面白さに気づき転職を考える
- 一児の父 💪
- 趣味はプログラミングで食事と寝る以外はコードを書いているかチュートリアルをみている
- 台湾に住んでいたことがあり中国語が少し話せる

## 1.アプリの概要

---

(1). アプリに登録する
(2). 動画でチェック
(3). 句の投稿
(4). カードの機能
(5). ランキングと話題のタグ

# Paiku

👉 [paiku575.com](https://paiku５７５.com)

**このアプリは俳句や川柳、575 を投稿し、いいねや返信をすることで他のユーザーと交流できる SNS Web アプリケーションです。**
twitter からインスパイアを受けたアプリになるので多くの機能の面で参考にしています

### (1). アプリに登録する

1.  **Sign Up(新規登録)** ボタンからログイン画面に飛んでフォームに必要な情報を入力します

![picture 5](images/2efab30cecc2ea7217407b701010ff41a58ee08718742d2d8a1c6ef23f61b49e.png)

2. 登録が終わると登録したメールアドレス宛に有効化のメールが届くのボタンをクリックします
   ![picture 6](images/9472286a80758cab9640c57ab1f30b413c0da5ab602a8b33c73a6e30e61b3f86.png)

3. 自動的にサイトに飛びログインして手続き完了となります 👏👏👏👏👏🎉

- 現状まだスマホへのレスポンシブは未対応（今後作業予定）ですので PC のブラウザから閲覧していただけると幸いです
- Google Chrome 推奨ですが Safari でもほとんど問題なく見れるはずです

### (2). <u>動画でチェック!🖥</u>

**youtube** に簡単に全体を紹介した動画をアップしていますのでそちらを閲覧して頂けるとよりわかりやすいかと思います
動画は 4 分程度の内容になります

**【Youtube】575 アプリケーション - アプリの解説**
👉 https://www.youtube.com/watch?v=I-VUspfA1WA

### (3). 句の投稿

- 575 を投稿する際**上、中、下句**それぞれ**最大 10 文字**まで記入することができ、**読点またはコンマ**を打つことで <u>句を自動で分割することができます</u>
- 句の最後に半角スペースを追加して#を打てば**タグ**を記入できます
- 画像も投稿することができますがサイズ変更や位置調整は実装していません

![picture 7](images/28ce9e3f50e8adce020297bd17d4c8e63f84c6e2717a919ae3438bd87b8b07bd.png)

### (4). カードの機能

- カードの下部にはオプションがあり左からそれぞれ
  - ❤︎ お気に入り登録
  - ↑ **投票する**
  - コメント 返信
  - ⭐️ **マイセレクトに登録（自分の代表句に登録する）**
  - 三 その他（削除と Twitter への共有）

![picture 9](images/792e662998842276f76eb28b41732f34a76f6398e0ee134f410a7244804524ee.png)

### (5). 投票とマイセレクトボタンについて

**投票**と**マイセレクト**とは何か？

- 投票はお気に入りと違い、1 日に 10 回好きな句カードに投票できる機能です
  - 現在の実装ではランキングの順位に影響を及ぼします
  - 投票が多いほどカードの見た目が変わる実装を入れようと検討中です
- マイセレクトはフォローユーザーのページで表示される自分の名刺カードに載る一句です
  - 自己紹介もありますが、自己紹介とは別に自分の一句を選択することができる機能です

![picture 11](images/04f97a2947fc6a699d1c3451d6e44f4309ee8b382e3fdcc5179e686d4a96a250.png)

### (6). ランキングとタグ検索

**ランキング**のページや、**タグ**の一覧を表示するページがありそこから話題の句などを見つけることができるようになっています
ランキングもタグ検索も期間ごと（**1 日、週間、月間、年間、総合**）に分けて表示されるようになっています

![picture 13](images/fd6b72a0922b27c44ce311b8a18c9c8d5db68775e066ac20b735777e31aee0db.png)

## 2. 企画

---

(1). きっかけ
(2). コンセプト
(3). 初期段階での構想
(4). カラー
(5). デザイン案

### (1). きっかけ

MBS テレビで放映されている[プレバト](https://www.mbs.jp/p-battle/)が好きでよく見ているのですが、この TV 番組は 2012 年から放送されているかなりの長寿番組ということを知って、そんなに日本人は俳句が好きだったら俳句のアプリで何かおもしろいものを作りたいなと考えたのがきっかけです

### (2). コンセプト　

- 俳句を作って投稿し交流できる SNS
- 子どもから老人まで楽しめるサイトにしたい

### (3). 初期段階での構想

- 句を投稿できる、または句のような短い文章
- アバターや画像も投稿できる
- 他のユーザーをフォローできる
- 句にコメントを付けることができる

機能面では色々な部分で**Twitter**を参考にさせていただきました。

主な機能は参考にするアプリがあるので早々とデザインへと進めていきます

基本的に作業は<u>**機能の実装とデザインを並行して進めていきました**</u>
その理由は、過去のゲーム制作でも経験したことで、**画作りとアプリの動作がリンクしないまま作業を進めていくとモチベーションに影響が出てくるから**です
個人制作ではモチベーションの維持が非常に大事になってくるので継続しやすい方法をとって進めます

### (4). カラー

**カラースキーマ**は google の**Material UI**を参考にして決め、 配色が決まったら web ページのデザイン作業に入っていきました。
個人的に**グリーン**を使った色が好きなのでグリーンをベースにしています。

- **落ち着いた色合い** -> 色数を抑え、彩度は低め、 **目が疲れないように**

#### ベースカラー

<u>**初期段階の選定なので実際のものとは多少異なります**</u>
![picture 20](images/af01d6e277e6516ec5f9ec9d61e309514e7d8462af9d4aebc3eecc30faf5b699.png)

### (5). 初期デザイン案

#### デザインツールは**Adobe XD**を使用しています

一番時間がかかったところは句をどのように表示するかという部分で、最終的にはカード上に句を載せて表示するという形になりました
![picture 14](images/45497a146db2fee486473e112ed5b9f348b79c51dfc356c4447d2ae80da807cb.png)  
![picture 17](images/82a4ebeb94924a5295f2bf02bf7aec365817dfbd54e34d533917b80c66e3454b.png)
![picture 15](images/15edb3795afbf578a4ab37def97c0cd71b5092305411cab1ed1433278034d417.png)

## 3. アプリの開発

---

(1). 主な実装内容
(2). 作業の進め方
(3). スケジュール
(4). ページ遷移図
(5). データベース設計

### (1). 主な実装内容

- 句の投稿
- 画像の投稿
- タグの挿入と検索
- 最新カード句の表示
- ユーザー検索
- プロフィールの更新
- アバター画像の投稿
- お気に入り登録
- ユーザーフォロー
- 投票
- 投票回数のリセット
- 返信
- カードの削除と共有
- アカウント情報の更新と削除
- ランキング機能
- タグ一覧表示
- DB スキーマ設定
- メール認証
- 外部クラウドストレージに画像を保存
- パスワードの hash 化
- パスワード忘れた際の対応、メール自動送信
- JWT トークンによる自動ログイン
- 問い合わせ内容をを Discord に転送
- メンテナンスページ
- テスト、ユーザーの作成と句の投稿自動化
- レスポンシブ対応

### (2). 作業の進め方

**仕様書や TODO リストなどは作業時にすぐに確認できるように vs code 内でチェックができるマークダウン + mermaid を使用しています**

今は TODO 系などのタスク管理サービスは沢山ありますが、個人制作で作業時以外はドキュメントを確認しないため、今回はシンプルでアクセスが速いツールを選択しました

#### TODO リスト例

# TODO list

---

# Operation

- [x] カードの共有 URL の修正
- [x] ドメインの修正

# Progress

- [ ] アカウント確認で時間制限を追加
- [x] no-name の時カードに displya name が表示されない
- [ ] プロフィールで場所の追加
- [x] ~~アカウント確認で回数制限を追加~~
- [x] パスワードを忘れた手続きで、パスワードを変更する部分を作る
- [ ] スマートフォン向けのレスポンシブデザインを作る
- [ ] 説明ページを作る
- [ ] client 側 profile スクリプトはもう少し分割できるはず

### 3. スケジュール

- アプリケーションのメイン機能の開発に２ヶ月程度
- デバッグを含めて全ての作業を同時並行で進めていたため細かいことは記録していません...
- デプロイ後も機能の追加やデバッグをおこなっているので開発は現在も続けています

```mermaid
gantt
title schedule 2022/06/01 - 2022/08/19
dateFormat YYYY-MM-DD
section main dev
frontend & backend         : active, dev, 2022-06-01, 60d
operation      : active, op, 2022-07-31, 20d

section database
total        : 2022-06-01, 30d
```

企画を決めた際のスケジュールは大体 1-2 ヶ月、長くても 2 ヶ月で終わらせられるとよいなと考えておりましたが、考えが甘く、当初よりも多数の機能を追加してしまった為予定をオーバーしてしまいました

実際の業務では要件定義を行い予め必要な機能を洗い出し、リスト化してエンジニアに割り当てると考えますが、実装に関しては未知の部分が多く手探りで開発してい故スケジュールを正確に割り出すことができませんでした。反省点は今後に活かしたいと考えます

### 4. ページ遷移図

### 全体像

```mermaid
flowchart TD
index[ページ名, url, file name] --- root
root[root, / ,home.hbs ] -.-> auth((authorization with token))
auth -->|not match tokens| land[Landing, /index ,index.hbs]
land --> | have no account|signup[Sing up, GET/user/signup, singUp.hbs]
land --> |have account| login[Login, GET/user/login, login.hbs]
auth --> |if already logined|home[home, /home, home.hbs]
signup -->|create user account | login
login --> home

home -->|user profile| profile[profile, GET/home/profile,]
home --> |ranking|ranking[ranking, GET/home/ranking, ]
home --> |tag|theme[theme,  GET/home/theme,]
```

#### ページ遷移一部 例

## user Router('/user')

**新規登録、ログイン、ログアウト、Email,パスワード変更、アカウント削除などのユーザーの基本部分**

```mermaid
flowchart LR
/login --> |get|ログイン --> |rendering|login.hbs
/signup --> |get|サインアップ --> |rendering|signup.hbs
/signup --> |post|ユーザーの新規作成
/login --> |post|ユーザのログイン
/upload-profile --> |patch|アバター画像の登録
/logout --> |post|ログアウト
/logoutAll --> |post|全ての端末からログアウト

```

### 5. データベース設計

**これまで規模の大きな web サービスを作ったことがないため手探りでスクラップ&ビルドを繰り返しながら今の形に落ち着きました**

### ① 使用した DB

#### Mongo DB Atlas

- ドキュメント型の NoSQL DB で Node.js との組み合わせでよく使われるためこちらを使用
- web hosting サービスである Atlas は 500MB の無料枠があり小規模から始めやすい
- Node.js 用の Mongoose という OR ラッパーライブラリが用意されている

### ② 概念図

**シンプルな 3 つのコアモデル＋ 2 で構成されています**

```mermaid
erDiagram
User ||--|{ Content: uses
Profile ||--|| User: contains
Content }|--|{ Tag: uses
State ||--|| User: contains

```

| コレクション名 | 内容                                                                         |
| -------------- | ---------------------------------------------------------------------------- |
| **User**       | ユーザのアカウント情報                                                       |
| **Profile**    | ユーザーのプロフィール情報                                                   |
| **Content**    | 句カード情報　　　　　　　                                                   |
| Tag            | Content のタグの内容を保存する　　　　　　　                                 |
| State          | アカウントの状態を保持する　例：新規登録中、パスワード再設定中　　　　　　　 |

### ③ スキーマ：サンプル

Content モデルのスキーマは以下のように作成しています
コードは少し長いので一部省略しています

```javascript
const contentsSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contents',
      },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    fans: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        date: {
          type: Date,
          default: () => new Date(),
        },
      },
    ],
    tags: [String],
  },
  { timestamps: true }
)
```

## 4. 使用した技術スタック

---

### フロントエンド

| 名前                | 種類           | 使用箇所                   | 内容                               |
| ------------------- | -------------- | -------------------------- | ---------------------------------- |
| JavaScript(Vanilla) | 言語           | クライアント側の js は全て | form バリデーションや fetch API 等 |
| HTML/CSS            | 言語(?)        | Web ページ制作             | デザインやレスポンシブ対応         |
| moment.js           | cdn モジュール | クライアント側の js        | 日時の変換、表示                   |
| cookieConsent.js    | cdn モジュール | クライアント側の js        | Cookie の同意                      |

### バックエンド

| 名前                  | 種類                | 使用箇所           | 内容                               |
| --------------------- | ------------------- | ------------------ | ---------------------------------- |
| Node.js               | JavaScript 開発環境 | サーバーサイド     | CRUD 操作、認証、テスト、DB 接続等 |
| express               | npm ライブラリ      | Node.js            | web フレームワーク                 |
| hbs                   | npm ライブラリ      | レンダリングページ | テンプレートエンジン               |
| mongoose              | npm ライブラリ      | Node.js            | mongoDB object modeling            |
| jsonwebtoken          | npm ライブラリ      | Node.js            | トークン生成                       |
| bcryptjs              | npm ライブラリ      | Node.js            | パスワードの hash 化               |
| @google-cloud/storage | npm ライブラリ      | Node.js            | cloud storage との接続             |
| @sendgrid/mail        | npm ライブラリ      | Node.js            | メール送信サービス                 |

### インフラ

| 名前               | 種類          | 使用箇所         | 内容                            |
| ------------------ | ------------- | ---------------- | ------------------------------- |
| Docker             | 開発環境      | アプリのビルド時 | デプロイする前に image へビルド |
| GCP/ Cloud Storage | cloud storage | サーバーサイド   | 画像の保管先                    |
| GCP/ Cloud Run     | サーバーレス  | デプロイ         | コンテナアプリのデプロイ        |

### その他

| 名前        | 種類           | 使用箇所    | 内容               |
| ----------- | -------------- | ----------- | ------------------ |
| git/ github | バージョン管理 | ローカル PC | 作業ファイルの管理 |

## 5. システム構成図

---

ローカルの開発環境からデプロイまでのシステム構成図
![picture 2](images/ff415dbf04e2f1a8855b3409eadd3935e41366086bb836d6239e35219a7ea16c.png)

## 6. 使用したスキルとツール

---

**今回のプロジェクト以外でも使用経験のあるスキルとツールが含まれています**

![picture 3](images/755eaca653ae072cbfbabdc5d38cd0bb50fbe08ed6db95474b546c7a42952257.png)

### Skills

JavaScript/ TypeScript / Python / Node.js / Express / Flask / HTML-CSS / MongoDB / MySQL / Git / Webpack / Docker / GCP-Cloud Storage / GCP-Cloud Run /

### Tools

vs code / postman / adobe XD / Ai

## 7. 頑張ったところ、難しかった実装

---

1. 努力した点

   1. セキュリティ周り
   2. エラーハンドリング
   3. API 作成

2. 難しかったところ
   1. レスポンシブ対応
   2. DB の設計
   3. メール認証
   4. アカウント削除

### 1. 努力した点

#### 1-1. セキュリティ周り

- サインアップ、ログインのアカウント認証はクライアント側とサーバー側両方でチェックするよう実装している
- パスワードの hash 化、アカウント情報を変更した際、hook として hash 化に使用している salt を変更して hash 化を行なっている
- middleware を使って root ディレクトリ以降のページには認証を挟んでチェック、認証には JWT のトークンを使用
- アカウント情報で重要な内容は response で返さない、またはマスク化。

**セキュリティに関しては未熟な部分があり、完璧ではないところもまだまだある。特にバックエンドでは重要な情報をやりとりするため今後も力を入れて勉強していきたい分野です。**

#### 1-2. エラーハンドリング

エラーに対するレスポンス表示はクライアント側ではもちろん、サーバー側でもエラーの種類によってステータスコードを変えてクライアント側に送信し知らせるということを可能な限り実装しています。ただし、まだ一部に対しては window.alert を使用していたり、エラー内容が詳細ではないところもありますが少しずつ修正していく予定です。

#### 1-3. API の作成

url をどのように決めるかというのは参考になるチュートリアルや教材がなかったため独自に考えて決めることが多かったです
Twitter の url は非常に参考になるところがあり、似たように作っているところもあります、特に url から特定のアカウントのプロフィール情報にアクセスするにはシンプルで無駄がない構成で感動しました

ユーザーのプロフィールページへアクセスするには

```javascript
/<アカウント名>
```

API の作成はセキュリティの部分と大きく関わってくるため、また fetch で取得する url が非常に多いため重点的にチェックする必要がありました

外部からのアクセスに関しては認証のミドルウェアがある為、ある程度は拒否できるようにし（突破する方法を私が知らないだけかもしれませんが）、ログインした後のアクセスに関しては、そのアカウント当事者以外の重要な情報はレスポンスで返さない、インジェクション対策を取るなど。

### 2. 悩ませた実装

#### 2-1. レスポンシブ対応

web ページのレイアウトは左カラム、中央カラム、右カラムと三分割レイアウトを基本としており、ページを広げると中央に均等配置されるようになっています

当初は句カードの表示数をブラウザの広げた幅まで柔軟に増やしたり減らすようなことを考えておりましたが、実際に作ってみるとレイアウトが崩て見た目が悪くなる（大きな空白が出る場所が発生する）、読み込みや fetch 処理で条件式を追加する必要があり複雑になるため制限を加えました

![picture 2](images/75e01914b05f19cd52b5df1a743e982962f5a88dbec838ff6b896958db9c58aa.png)

参考に Twitter や Youtube、Netflix などのサイトを調べたところブラウザの解像度を上げればその分データが挿入されるというわけではなく、一定範囲を超えるとデザインがスケールアップするような構成になっていました（Youtube, Netflix)
おそらくサーバー側でデータを読み込む数の制限があるため、簡単には拡張できないのだろうと予想しております

また３つのカラムページが常に中央に配置されるようにするために最初は JavaScript 側で制御構文を書いていましたが、どうしても気になる挙動が出たため最終的には CSS 側で調整しました（意外にあっさりできたので最初から CSS で書いておけばよかったと後悔しています）

![picture 1](images/3a115b95d0ac0c0302a6ed4c9c4145aac1eec826b2879aacca2994a27e002f9b.png)

#### 2-2. DB の設計

DB の設計は試行錯誤を何度も繰り返して今の形になりました
悩ませた点は、どのような情報を DB に保存する必要があるかということが最初に決まっていなかったため、また開発途中で機能がどんどん増えていったため、当該のスキーマを更新、削除をすることでサーバーサイドのプログラムもその都度修正する必要がありました

特に開発後半、ある程度規模が大きくなった後のスキーマの変更作業は作業前から気分が重たくなった覚えがあります

ただスキーマ変更により影響が出てくるコードの修正作業自体はそこまで大変ではありませんでした（コード内のコメント、影響が出るコードが限定されていたため）

#### 2-3. メール認証

メール認証は全て独自で考えて実装した箇所になります

メール認証が必要な状況は

1. **新規登録後のメールアドレス確認**
2. **パスワードを忘れた際の再発行手続き**

各処理の大まかな流れは

#### 新規登録

```mermaid
flowchart  TD
 signup([新規登録]) --> addState[/ユーザーの状態をStateに追加/] --> checkMail[/確認メール送信/] --> メール内のリンクをクリックして有効化 --> delState[/Stateからユーザーを削除/] --> token[/トークン発行/] --> ogin([ログイン])

```

#### パスワード再設定

```mermaid
flowchart TD
start([パスワードを忘れましたか]) --> checkMail{メールアドレスを入力}
checkMail --> |登録したメールアドレスがない|再入力 --> limit{回数制限以内かどうか} --> |yes| checkMail
limit --> |no|updateState[/Stateを更新/] -->resendMail[/メールアドレスを再送/] --> checkMail
 -->|メールアドレスがある| addState[/Stateにユーザーの状態を追加/] --> メール内のリンクをクリック --> パスワード再設定画面 --> パスワードを入力 --> token[/トークン発行/] -->　delState[/Stateのユーザー情報を削除/] --> login([ログイン])

```

パスワード再設定の手続き処理で当初はメールアドレスに記載された 6 桁の数字を入力して適合していればパスワード再設定へという流れで作っていましたが、6 桁の数字入力はユーザーにとって手続き処理が増えるだけで利便性が損なわれるという理由とメールが届いた時点で数字もわかってしまうためあまり意味がないと考え削除しました
それよりもメールアドレスに記載されたリンクからどのようにしてユーザーを判別するのかということを工夫しました

#### 2-4. アカウント削除

アカウント削除することでユーザーの情報を DB から削除する必要ができてきますが、削除したユーザーの情報を DB から一度に全て消すことは非常に難しいということがわかり、いくつか方法を検討しました。

**一度に削除できるデータ**

復元期間を今回は含まないものとします。復元期間を設定する場合は State にユーザーの状態を記録して元のデータは保管しておくなどが考えられます

- User データ：アカウント情報、パスワードやメールアドレスなど
- Profile データ：アカウント情報に紐づけられているプロフィールデータ
- Content データ：　ユーザーが作成した句カード

**上記のデータを削除してもデータベース内に残ってしまうユーザーの情報**

1. 他ユーザーが保持するフォロワーに含まれる削除ユーザー
2. 削除ユーザーが作成した句カードのタグ

1 に関しては他ユーザー（A とする）がもし削除ユーザー（B とする）をフォローしていた場合、A のフォロワーから B を削除するタイミングをどこにするかが非常に重要になってきます。
例えば B がアカウントを削除した時点でフォローしている、またはフォローされているユーザーの情報から B を削除しようとした場合、そのユーザーが多ければ多いほど DB 内の処理が一度に発生し集中して、不具合を起こす原因となる可能性があります。

**① 関連するユーザーの数に応じて削除処理が集中する**

```mermaid
flowchart LR
userA([ユーザーA]) --> delete[アカウント削除]
delete -->|フォローしている-されている| userB([ユーザーB]) --> フォローフォロワーからユーザーAを削除
delete --> |フォローしている-されている| userC([ユーザーC])--> フォローフォロワーからユーザーAを削除
delete --> |フォローしている-されている| userD([ユーザーD])--> フォローフォロワーからユーザーAを削除
delete --> |フォローしている-されている| userE([ユーザーE])--> フォローフォロワーからユーザーAを削除

```

そのため B を削除した時点では A のフォロワーのデータは更新せず、A のプロフィールページを開いた時点で A のフォロー情報から B を削除するという処理を書いています。

このようにすることで非同期で、B をフォローしているユーザーは A の情報を削除することができ、処理を分散させることができます。

**② プロフィールページを開いたら（どのユーザーが訪問してもよい）ユーザー A の情報を削除**

```mermaid
flowchart LR
user([ユーザー any]) -->|訪問| ユーザーanyプロフィールページ -->
if{{もしフォロワーに削除ユーザーAが含まれていた場合}} -->
ユーザーAのフォローを削除

```

**② の処理のデメリット**
プロフィールページを開く際常に ② の処理が走るため処理回数は圧倒的に多くなる

**タグの処理**
タグの投稿数と実際に表示される句カードの数に相違が出るが、タグはそこまで重要ではないため現在は放置しています

## 8. 実装予定の機能

---

- 通知機能　いいね、投票された場合通知が来る
- 継続的デプロイの自動化
- jest を使ったテストコードの作成
- 右のカラムパネルにおすすめユーザーの表示などを入れたい
- ユーザーが増えてきた場合、自然な形で広告を入れたい
- さらに余裕があれば TypeScript で書き直したい

## 9. どのように学習したか

---

主に以下になります

- **Udemy**
- Youtube
- ネットの記事、Qiita、 Zenn、ブログ、stack overflow 等
- 書籍、図書館

## Udemy

Udemy 一番体系的学ぶことができたと考えています
このアプリで使用する多くの技術はここで学びました
特に参考になったコースは

#### The Complete Node.js Developer Course(3rd Edition)

https://www.udemy.com/share/101WGi3@wll328XV0vKTxhOF6NPyBfDWfgKkwrcGtTzRzlLjR24nP9aPHMBL0xCReSIJA0tDdQ==/

Node.js を１から業務で使用するレベルの内容まで幅広く解説してくれます
動画で解説しているライブラリや API が古いことが多く自分で別の API に置き換えたりコードを修正する必要が出てくる場面があったのですが逆にそのおげで考える力が鍛えられました。
このコースは受講者が非常に多いため、質問も活発で充実しており、動画で解説している内容よりも良い方法があればコメントでユーザーが紹介していたりすることもあります（さすがアメリカです）

フロントエンドの教材は

#### 20 Web Projects With Vanilla JavaScript

https://www.udemy.com/share/102yzo3@hb0izIxWgdRAVULQM4UiiqmIWUH1VpeOhV7AfpqcNNkRRd00fDVnOEQrC9mar0XJug==/

#### 50 Projects In 50 Days - HTML, CSS & JavaScript

https://www.udemy.com/share/103Pje3@EgnqpW-fcY6nu-Dy53wA1trT3ZbSoNyRlg3WLZ_-D7KmDC6ak16p34xjIimQCx2E-g==/

どちらも同じ講師のコースです
Vanilla の JavaScrip を使って解説しているため、JavaScrip 初級の人でも内容が理解しやすいです
どのセクションも実践ですぐに使えるような内容ばかりで、尚且つ非常にシンプルで無駄がない方法でコードが書かれており、感動した覚えがあります
見た目も非常にモダンであるため楽しくコードを書くことができます
ただし解説が非常に早いので慣れていない場合は一時停止しながら試聴する必要があるかもしれません

## 10. 今後の学習

---

今後は現在のスキルをより深く学ぶことに加えコードを書くスピードも早くしていきたい、そのためには経験を多く積んでいく必要があり他のアプリ開発も視野に入れております。
勉学の中心はバックエンドに関わる内容を中心にフロントエンドの JS フレームワークも覚えていきたいと考えています

現在勉強している分野

### SQL

SQL を 現在 Udemy で学習しています。業務では SQL を使うことが多いと聞くので Node.js 上で MySQL と連携したアプリも作ってみたいと考えておりますが、現状 Node.js で MySQL との連携は一部不具合があるため、少し不安を覚えています
例えば、

- MySQL8.0 では mysql ライブラリでは認証方式の違いでエラーが出る -> mysql2 を使うと解決
- express-mysql-session を使用して MySQlStore で session を保存すると上記と同じエラーが出る-> Document に書かれている解決策を試してもエラーが出る 🤔
- 記述が mongoose と比べて複雑になりやすい？

ただ、SQL 自体は面白いので続けて勉強しています

### MongoDB

mongoDB も非常に面白い DB でまた Node.js と も相性がよいと思います
この 575 のアプリでは Mongoose を使って DB の処理を書いていますが、いくつかの部分では MongoDB の集約関数(aggregate)を使わないとうまく処理できないところがあり、aggregate については知識が少ないため今後集中して学びたいと考えております

### TypeScript

今一番力を入れているのは TypeScript で Udemy や Youtube で毎日動画を見て勉強しています
JavaScript に比べ保守性が非常に高いためチーム開発に限らず個人開発でも TypeScript で今後は記述していく予定です

### React

フロントエンドのフレームワークとしては一番勢いがあり、TypeScript の教材を見ていても React での実装が含まれていることが非常に多く感じます
余裕があれば少しずつ勉強を始めていきたいと考えています

### Git

個人開発のみで Git を使用してるためあまり多くのコマンドは覚えていませんでした。現在は書籍を読んだり、Microsoft の公式チュートリアルを見て業務でも使えるように少しずつ学んでいます

### Linux コマンド

touch, cat, mkdir, cd, ls, rm など簡単な内容であれば日々使用していますがそれ以外はあまり知らないため余裕があれば少しずつ勉強していきたいと考えています

### セキュリティ

一番難しい分野ですが非常に重要だと感じております。バックエンドではインジェクション対策、クロスサイトスクリプティング、XSS、トークンやセッション、認証・認可など様々な対策をとる必要があるため少しでも学んでおきたい分野です。図書館で本を借りながら少しずつ勉強しています。

### アルゴリズム

バックエンドでは DB からデータを引っ張る際、どのような処理手順で書いていくのがよいか悩むときがあります。大抵はライブラリで用意されている関数を使うのが一番速いのですが、自分で記述する必要が出た場合、最適な処理が書けるように少しずつ学んでいます

## 最後に

---

プログラミングの経験は今回が初めてではなく、最初は大学３年時に就職活動の一環として資格取得のために基本情報の書籍を手に取ったところから始まりました。ただそのときは購入した本は目次を見るだけに終わってしまいました

また同じく大学の３年のときにサークルのウェブサイトを作るためにメモ帳に直書きで HTML を書いた覚えがあります。簡単なサイトでデザインもひどいものでした、web 制作が非常に辛かった思い出です

仕事を始めてからは CG のソフトウェアを扱っていたこともあり、そのソフトウェアを拡張するため Python を勉強しようと Python の本を購入しました、しかし、1/3 ほど読んで棚にしまったままになったのを覚えています

５年ほど前に iPad で Swift playground を遊び始めて非常に面白かったため MacBook pro に Xcode を入れて Swift の書籍を購入して Swift を勉強しはじめましたが１、２週間で勉強をやめたのを覚えています

これまでの経験を見ると自分には全くプログラミングが向いていないと思ってしまいますが転機が訪れたのは UNREAL ENGINE4 を学び始めた時です
UNREAL ENGINE(UE)はゲームを作る統合開発環境（ゲームエンジン）でプログラムは BLUE PRINT というノードを繋いでプログラムを作っていくビジュアルスクリプティングの機能を備えていました。
この UE を使って自然といくつかのゲームを楽しく作成できた経験は今考えると非常に大きかったと思います
その後 5 年ほどゲームを作り続け、あることがきっかけでプログラムをまた学びたいと思うようになりました。
そのきっかけというのは UE を拡張するということで C++を学ぶ必要がありましたが、そのときは何故か C++ではなく図書館で C の本を手に取って勉強し始めました。今考えると C から始めるというのは無謀な感じがするのですがその時は C の書籍を一冊終わらせることができました。ポインタの内容も難しかったですが割と楽しく勉強できたと思います。

その後は C を続けるのではなく Python を始めたのですが、Python の勉強が非常に楽しくて深夜まで夢中で勉強していました。
この python の学習では Excel や CSS との連携、スクレイピング、画像処理、sqlite を使った Tweet bot の作成と色々学び、この頃から仕事以外はプログラミングばかりの生活になっていったため、将来のことも改めて考え始めるようになりました

これまではプログラミングが散々で見るだけで嫌だったものが、徐々に変わり見解が 180 度変わるようになって人生って面白いなと改めて思います

最後までお読みいただき、ありがとうございました