import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda | Keleş Hafriyat",
    description: "Keleş Hafriyat - Mersin Toroslar bölgesinde yıllardır hafriyat sektöründe hizmet vermekteyiz.",
};

export default function About() {
    const values = [
        {
            icon: "🎯",
            title: "Kalite",
            description: "Her projede en yüksek kalite standardını hedefliyoruz"
        },
        {
            icon: "⚡",
            title: "Hız",
            description: "Zamanında teslimat ve hızlı hizmet anlayışı"
        },
        {
            icon: "🤝",
            title: "Güven",
            description: "Müşteri memnuniyeti ve güvenilirlik önceliğimiz"
        },
        {
            icon: "💡",
            title: "İnovasyon",
            description: "Modern teknoloji ve yenilikçi çözümler"
        },
    ];

    return (
        <div className="page-wrapper">
            {/* Story Section */}
            <section className="content-section">
                <div className="container">
                    <div className="content-grid">
                        <div className="content-text">
                            <div className="section-badge">Hikayemiz</div>
                            <h1 className="section-heading">
                                Yıllara Dayanan
                                <span className="highlight">Deneyim ve Güven</span>
                            </h1>
                            <p className="section-paragraph">
                                Keleş Hafriyat olarak, Mersin Toroslar bölgesinde hafriyat sektöründe yıllardır hizmet vermekteyiz.
                                Modern iş makinelerimiz, deneyimli operatör kadromuz ve müşteri odaklı yaklaşımımızla sektörde öncü konumdayız.
                            </p>
                            <p className="section-paragraph">
                                Kazı-dolgu işlerinden peyzaj düzenlemesine, moloz taşımadan temel açma hizmetlerine kadar
                                geniş bir yelpazede profesyonel çözümler sunuyoruz. Her proje bizim için özeldir ve
                                başarıyla tamamlanması için tüm ekip olarak çalışırız.
                            </p>
                        </div>
                        <div className="content-image">
                            <div className="image-frame">
                                <Image
                                    src="/hero-keles.jpg"
                                    alt="Keleş Hafriyat İş Makineleri"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header-center">
                        <div className="section-badge">Değerlerimiz</div>
                        <h2 className="section-heading">
                            Mersin'in Güvenilir
                            <span className="highlight">Hafriyat Partneri</span>
                        </h2>
                    </div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Equipment Section */}
            <section className="equipment-section">
                <div className="container">
                    <div className="content-grid reverse">
                        <div className="content-image">
                            <div className="image-frame">
                                <Image
                                    src="/excavator-1.jpg"
                                    alt="İş Makinelerimiz"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                        <div className="content-text">
                            <div className="section-badge">Ekipmanlarımız</div>
                            <h2 className="section-heading">
                                Modern ve
                                <span className="highlight">Güçlü Makine Parkuru</span>
                            </h2>
                            <p className="section-paragraph">
                                15'den fazla son model iş makinesi ile donanmış filomuz, her türlü hafriyat projesinde
                                size hizmet vermeye hazırdır. Düzenli bakım ve kontroller ile makinelerimizi en iyi durumda tutuyoruz.
                            </p>
                            <ul className="feature-list">
                                <li><span>✓</span> Ekskavatörler (3-30 ton)</li>
                                <li><span>✓</span> Yükleyiciler</li>
                                <li><span>✓</span> Kamyonlar</li>
                                <li><span>✓</span> Kompaktörler</li>
                                <li><span>✓</span> Özel Amaçlı Makineler</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
