9029スクリプト（単体版） 設置手順
==================================

このフォルダの中身をインターネット上に置くと、誰でもURLを開くだけで使えます。
Claudeのアカウントは不要です。記録は各自のiPhoneの中だけに保存されます。

■ 入っているファイル
  index.html            アプリ本体
  sw.js                 オフラインで起動するための仕組み
  manifest.webmanifest  ホーム画面に置いたときの名前・アイコンの設定
  logo.png / icon-*.png ロゴとアイコン

  ※ 台本データ（script-one-4.json）はこのフォルダに入れないでください。
    入れると、URLを知っている人なら誰でも台本を見られてしまいます。
    台本は使う人に個別に渡し、アプリの「台本」画面から各自で読み込んでもらいます。

■ GitHub Pages に置く手順（無料）
  1. https://github.com でアカウントを作る
  2. 右上の「＋」→「New repository」
     - Repository name：例 9029script
     - 「Public」を選ぶ（無料プランで公開するにはPublicが必要）
     - 「Create repository」
  3. 作ったページで「uploading an existing file」を押し、
     このフォルダの中のファイルを全部ドラッグして「Commit changes」
  4. 上のタブ「Settings」→ 左の「Pages」
     - Source：Deploy from a branch
     - Branch：main ／ (root) を選んで「Save」
  5. 1〜2分待つと、同じ画面に URL が出ます
     例） https://（アカウント名）.github.io/9029script/

  ※ 他の置き場所（Netlify、Cloudflare Pages、自分のサイトなど）でも、
    このフォルダをそのまま置けば動きます。https のURLで開いてください。

■ iPhone のホーム画面に置く
  1. Safari で上の URL を開く
  2. 共有ボタン（四角から上向きの矢印）→「ホーム画面に追加」→「追加」
  3. 以降はホーム画面の 9029 ロゴから開く
     （一度開けば、電波がなくても起動できます）

  ※ Safari で開いたときと、ホーム画面から開いたときでは保存場所が別になります。
    記録は必ずホーム画面のアイコンから行ってください。

■ アプリを更新するとき
  1. 新しい index.html などを GitHub に上書きアップロード
  2. sw.js の 1 行目付近 VERSION = '9029script-v1' の数字を上げる（v2, v3 …）
  3. iPhone では、電波のある場所でアプリを一度開き、閉じてもう一度開くと新しい版になります

■ データのバックアップ
  ホーム →「使い方」→ 一番下「データのバックアップ」→「書き出す」
  撮影日の終わりに書き出して、ファイルアプリやDropboxに保存しておくと安心です。
  iPhone の容量が少ないと、長期間開かなかったアプリのデータが消されることがあります。
