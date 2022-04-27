module.exports = {
    "telegram_token": process.env.TELEGRAM_TOKEN,
    "instance_url": process.env.INSTANCE_URL || "https://proxitok.herokuapp.com",
    "user_agent": process.env.HTTP_USER_AGENT || "Mozilla/5.0 (X11; Linux x86_64; rv:99.0) Gecko/20100101 Firefox/99.0",
}