import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.section
            id="contact"
            className="max-w-2xl mx-auto py-20 px-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl font-bold mb-6">Контакты</h2>
            <p className="text-gray-700 mb-6">Свяжитесь со мной любым удобным способом:</p>
            <form className="flex flex-col gap-4">
                <input className="p-3 border rounded" type="text" placeholder="Ваше имя" />
                <input className="p-3 border rounded" type="email" placeholder="Ваш email" />
                <textarea className="p-3 border rounded" placeholder="Сообщение"></textarea>
                <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    Отправить
                </button>
            </form>
        </motion.section>
    )
}
