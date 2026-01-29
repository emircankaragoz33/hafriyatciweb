import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "İletişim | Keleş Hafriyat",
    description: "Keleş Hafriyat - Emrullah Keleş ile iletişime geçin. Tel: 0533 619 92 96. Mersin Toroslar.",
};

export default function Contact() {
    return (
        <div className="page-wrapper">
            {/* Contact Info */}
            <section className="contact-section">
                <div className="container">
                    <div className="section-header-center">
                        <div className="section-badge">İletişim</div>
                        <h1 className="section-heading">
                            Bizimle <span className="highlight">İletişime Geçin</span>
                        </h1>
                    </div>
                    <div className="contact-grid">
                        {/* Contact Cards */}
                        <div className="contact-cards" style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <a href="tel:05336199296" className="contact-info-card">
                                <div className="contact-card-content">
                                    <h3>Telefon & İletişim</h3>
                                    <p className="contact-value">0533 619 92 96</p>
                                    <span className="contact-note">Emrullah Keleş</span>
                                </div>
                            </a>

                            <div className="contact-info-card">
                                <div className="contact-card-content">
                                    <h3>Çalışma Saatleri</h3>
                                    <p className="contact-value">08:00 - 20:00</p>
                                    <span className="contact-note">Pazartesi - Cumartesi</span>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <div className="contact-card-content">
                                    <h3>Adres</h3>
                                    <p className="contact-value">Mersin Toroslar</p>
                                    <span className="contact-note">Mersin, Türkiye</span>
                                </div>
                            </div>

                            <div className="contact-info-card">
                                <div className="contact-card-content">
                                    <h3>Hizmet Bölgesi</h3>
                                    <p className="contact-value">Mersin & Çevresi</p>
                                    <span className="contact-note">Toroslar öncelikli</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Contact */}
            <section className="quick-contact">
                <div className="container">
                    <div className="quick-contact-box">
                        <h2>Acil Durum mu?</h2>
                        <p>7/24 acil hafriyat hizmetleri için hemen arayın</p>
                        <a href="tel:05336199296" className="btn-emergency">
                            <span>🚨</span>
                            ACİL ARAMA: 0533 619 92 96
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
