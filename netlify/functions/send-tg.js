exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Метод не дозволено" };
    }

    const BOT_TOKEN = process.env.BOT_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;

    try {
        const data = JSON.parse(event.body);
        const name = data.name || 'Не вказано';
        const phone = data.phone || 'Не вказано';
        const project = data.project || 'Не вказано';

        const message = `<b>Новая заявка! </b>\n\n👤 <b>Ім'я:</b> ${name}\n📞 <b>Телефон:</b> ${phone}\n💬 <b>Повідомлення:</b> ${project}`;

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });

        if (!response.ok) {
            throw new Error('Помилка Telegram API');
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Успішно відправлено" })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Внутрішня помилка сервера" })
        };
    }
};