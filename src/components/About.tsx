import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section
            id="about"
            className="max-w-4xl mx-auto py-20 px-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl font-bold mb-6">О себе</h2>
            <p className="text-gray-700 text-lg">
                Я веб-разработчик с опытом создания адаптивных и красивых сайтов и приложений.
                Люблю сочетать функциональность и дизайн, чтобы ваши проекты выглядели профессионально.
            </p>
        </motion.section>
    )
}
