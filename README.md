# ProxiTok URL Redirect Bot
A Telegram bot for converting TikTok URLs into ProxiTok ones. Powered by Telegraf.js

## 🤖 Commands

> /rw 

Rewrites TikTok URL(s) included in a message being sent or replied.

> /download

Provides a direct download link to the shared video.


## ⚙️ Setup
### 🐳 Using Docker (docker-compose.yml)
Set the **TELEGRAM_TOKEN** variable to your Telegram bot API token provided by BotFather. This is the only **required** variable. Additionally, you can set other parameters listed below.
```
version: "3.9"
services:
    proxitok-url-redirect-bot:
        image: tecncr/proxitok-url-redirect-bot:0.0.1
        environment:
            TELEGRAM_TOKEN: <your_token>
            INSTANCE_URL: https://proxitok.herokuapp.com
            HTTP_USER_AGENT: "Mozilla/5.0 (X11; Linux x86_64; rv:99.0) Gecko/20100101 Firefox/99.0"
```
After setting the environment variables, run ``docker-compose up -d``

A Docker image is [available at Docker Hub](https://hub.docker.com/r/tecncr/proxitok-url-redirect-bot).

### 🛠 Manually
- Clone the repository with `git clone https://github.com/ncr6/https://github.com/ncr6/proxitok-url-redirect-bot`
- Change your working directory: `cd proxitok-url-redirect-bot`
- Install dependencies with `npm ci`
- Export the environment variables mentioned above or set their values by running `node src/index.js` with `env`.

## 💜 Contributions
Pull requests an Issues welcome. Translation contributions are greatly appreciated.
