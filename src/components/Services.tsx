import { motion } from "framer-motion";

const services = [
    "Создание сайтов-визиток",
    "Разработка SPA и веб-приложений",
    "Интеграция с API и базами данных",
    "Анимации и интерактивный UI",
];

export default function Services() {
    return (
        <motion.section
            id="services"
            className="max-w-4xl mx-auto py-20 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl font-bold text-center mb-12">Услуги</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {services.map((s, i) => (
                    <div key={i} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-2">{s}</h3>
                        <p className="text-gray-600">Качественное выполнение задачи с учетом всех требований.</p>
                    </div>
                ))}
            </div>
        </motion.section>
    )
}
