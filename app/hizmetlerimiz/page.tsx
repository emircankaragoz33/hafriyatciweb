import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hizmetlerimiz | Keleş Hafriyat",
    description: "Kazı dolgu, peyzaj düzenleme, moloz taşıma ve tüm hafriyat hizmetleri. Mersin Toroslar.",
};

export default function Services() {
    const services = [
        {
            icon: "🏗️",
            title: "Kazı Dolgu İşleri",
            description: "Temel kazısı, arazi kazısı, dolgu ve tesviye işlemleri",
            features: ["Temel Kazısı", "Arazi Kazısı", "Toprak Dolgusu", "Tesviye"]
        },
        {
            icon: "🌳",
            title: "Bağ Bahçe Düzenleme",
            description: "Bahçe düzenleme, arazi temizleme ve peyzaj hazırlığı",
            features: ["Arazi Temizleme", "Toprak Hazırlığı", "Sulama Kanalı", "Drenaj"]
        },
        {
            icon: "🏞️",
            title: "Çevre Düzenleme",
            description: "Park, bahçe ve çevre düzenleme projeleri",
            features: ["Park Düzenleme", "Yeşil Alan", "Sıkıştırma", "Düzleme"]
        },
        {
            icon: "⛏️",
            title: "Kanal Kazı",
            description: "Су kanalı, drenaj ve altyapı kanal kazıları",
            features: ["Su Kanalı", "Drenaj Kanalı", "Altyapı", "Kazı İşleri"]
        },
        {
            icon: "🚧",
            title: "Altyapı Kazı",
            description: "Elektrik, su, kanalizasyon altyapı kazıları",
            features: ["Elektrik Hattı", "Su Hattı", "Kanalizasyon", "Telefon"]
        },
        {
            icon: "📐",
            title: "Tesviye Düzenleme",
            description: "Arazi tesviyesi ve düzenleme hizmetleri",
            features: ["Arazi Tesviyesi", "Kot Ayarı", "Düzleme", "Sıkıştırma"]
        },
        {
            icon: "🧱",
            title: "Taş Duvar Örme",
            description: "Destek duvarı ve taş duvar inşaat hizmetleri",
            features: ["Destek Duvarı", "İstinat Duvarı", "Taş Duvar", "Beton Duvar"]
        },
        {
            icon: "🌿",
            title: "Peyzaj Düzenleme",
            description: "Profesyonel peyzaj tasarımı ve uygulaması",
            features: ["Tasarım", "Uygulama", "Bitki Dikimi", "Sulama Sistemi"]
        },
        {
            icon: "🚛",
            title: "Moloz Kaldırma",
            description: "İnşaat molozü ve hafriyat toprağı taşıma",
            features: ["Moloz Taşıma", "Hafriyat Toprağı", "İnşaat Atığı", "Hızlı Servis"]
        },
        {
            icon: "🔨",
            title: "Temel Açma",
            description: "Bina ve yapı temeli açma hizmetleri",
            features: ["Bina Temeli", "Villa Temeli", "Havuz Temeli", "Tank Temeli"]
        },
        {
            icon: "🚜",
            title: "İş Makinesi Kiralama",
            description: "Saatlik, günlük veya proje bazlı makine kiralama",
            features: ["Ekskavatör", "Yükleyici", "Kamyon", "Kompaktör"]
        },
        {
            icon: "📋",
            title: "Proje Danışmanlığı",
            description: "Hafriyat projeleri için teknik danışmanlık",
            features: ["Keşif", "Metraj", "Plan", "Maliyet Hesabı"]
        },
    ];

    return (
        <div className="page-wrapper">
            {/* Services Grid */}
            <section className="services-section">
                <div className="container">
                    <div className="section-header-center">
                        <div className="section-badge">Tüm Hizmetler</div>
                        <h1 className="section-heading">
                            Kapsamlı
                            <span className="highlight">Hafriyat Hizmetleri</span>
                        </h1>
                        <p className="section-text-center">
                            Modern ekipman ve deneyimli ekibimizle her türlü hafriyat ihtiyacınıza çözüm sunuyoruz
                        </p>
                    </div>

                    <div className="services-grid-full">
                        {services.map((service, index) => (
                            <div key={index} className="service-card-full">
                                <div className="service-header">
                                    <h3 className="service-title-large">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                </div>
                                <ul className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <span className="check-icon">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section-inline">
                <div className="container">
                    <div className="cta-box">
                        <h2>İhtiyacınız Olan Hizmeti Bulamadınız mı?</h2>
                        <p>Bizimle iletişime geçin, özel çözümler sunalım</p>
                        <a href="tel:05336199296" className="btn-primary">
                            📞 HEMEN ARAYIN
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
