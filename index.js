// https://qiita.com/seratch/items/1a460c08c3e245b56441

const { App } = require('@slack/bolt');

const app = new App({
  logLevel: 'debug',
  socketMode: true,
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN
});

// "hello" を含むメッセージをリッスンします
app.message('hello', async ({ message, say }) => {
  // イベントがトリガーされたチャンネルに say() でメッセージを送信します
  await say(`Hey there <@${message.user}>!`);
});

app.message('おみくじ', async ({ message, say }) => {
  const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
  const lot = lots[Math.floor(Math.random() * lots.length)];
  await say(`${lot}, <@${message.user}>`);
});

(async () => {
  await app.start();
  console.log('⚡️ Bolt app started');
})();