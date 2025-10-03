import React from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({
                                     title = "XOXO Brows - Перманентный макияж в Светлогорске",
                                     description = "💄 Профессиональный перманентный макияж в Светлогорске. Татуаж бровей, губ, стрелок. Ламинирование ресниц. Опытный мастер.",
                                     keywords = "перманентный макияж Светлогорск, татуаж бровей Светлогорск, перманент губ, ламинирование ресниц Светлогорск",
                                     canonical = "https://xoxo.by/",
                                     ogImage = "https://xoxo.by/src/assets/logo.png"
                                 }) => {
    React.useEffect(() => {
        // Обновляем title
        document.title = title;

        // Обновляем meta-теги
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);

        // Обновляем Open Graph
        updateMetaTag('og:title', title, 'property');
        updateMetaTag('og:description', description, 'property');
        updateMetaTag('og:image', ogImage, 'property');
        updateMetaTag('og:url', canonical, 'property');

        // Обновляем каноническую ссылку
        updateCanonicalLink(canonical);

    }, [title, description, keywords, canonical, ogImage]);

    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
        let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute(attribute, name);
            document.head.appendChild(meta);
        }
        meta.content = content;
    };

    const updateCanonicalLink = (href: string) => {
        let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!link) {
            link = document.createElement('link');
            link.rel = 'canonical';
            document.head.appendChild(link);
        }
        link.href = href;
    };

    return null; // Этот компонент не рендерит ничего в DOM
};

export default SEO;