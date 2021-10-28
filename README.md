# 参考

Slack ソケットモードの最も簡単な始め方  
https://qiita.com/seratch/items/1a460c08c3e245b56441

ソケットモードを使ったアプリをデプロイするときの Procfile  
https://slack.dev/bolt-js/ja-jp/deployments/heroku

SLACK_SIGNING_SECRET について  
https://api.slack.com/lang/ja-jp/actions

GitHub Actions で Heroku に自動デプロイ  
https://zenn.dev/shin_shin_01/articles/53009a81728e21

# 環境変数の設定
```bash
cp .env.example .env
```
.env ファイルにキーを入力

# Worker dyno で実行するように変更
Heroku のサイトでアプリを選択後、画面上部の Resources タブをクリックし、 ```worker node app.js``` のスイッチを ON にする。

