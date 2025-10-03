// api/telegram.js
export default async function handler(req, res) {
    // Разрешаем CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, phone } = req.body;

        if (!name || !phone) {
            return res.status(400).json({ error: 'Name and phone are required' });
        }

        // 🔐 Берем переменные из окружения Vercel
        const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
        const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

        if (!BOT_TOKEN || !CHAT_ID) {
            console.error('Missing environment variables:', {
                hasToken: !!BOT_TOKEN,
                hasChatId: !!CHAT_ID
            });
            return res.status(500).json({ error: 'Server configuration error' });
        }

        const text = `
🎯 НОВАЯ ЗАЯВКА С САЙТА!

👤 Имя: ${name}
📞 Телефон: ${phone}
⏰ Время: ${new Date().toLocaleString('ru-RU')}

💫 XOXO Brows - Светлогорск
        `.trim();

        const telegramResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text,
                parse_mode: 'HTML'
            })
        });

        const data = await telegramResponse.json();

        if (data.ok) {
            console.log('Message sent successfully to Telegram');
            return res.status(200).json({ success: true });
        } else {
            console.error('Telegram API error:', data);
            return res.status(500).json({
                error: 'Failed to send message to Telegram',
                details: data
            });
        }
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error.message
        });
    }
}