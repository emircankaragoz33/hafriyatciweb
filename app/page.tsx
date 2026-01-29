import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const stats = [
    { icon: "⏰", number: "08:00-20:00", label: "(Pazar Hariç)" },
    { icon: "🚜", number: "15+", label: "İş Makinesi" },
    { icon: "✨", number: "500+", label: "Tamamlanan Proje" },
    { icon: "📍", number: "Mersin", label: "Toroslar Bölgesi" },
  ];

  const services = [
    {
      icon: "🏗️",
      title: "Kazı & Dolgu",
      description: "Toprak kazı işleri ve dolgu uygulamaları"
    },
    {
      icon: "🌳",
      title: "Bağ Bahçe Düzenleme",
      description: "Profesyonel bağ ve bahçe düzenleme hizmetleri"
    },
    {
      icon: "🏞️",
      title: "Çevre Düzenleme",
      description: "Peyzaj ve çevre düzenleme çalışmaları"
    },
    {
      icon: "⛏️",
      title: "Kanal Kazı",
      description: "Su kanalı ve drenaj kazı işleri"
    },
    {
      icon: "🚧",
      title: "Altyapı Kazı",
      description: "Alt yapı ve temel kazı hizmetleri"
    },
    {
      icon: "📐",
      title: "Tesviye Düzenleme",
      description: "Arazi tesviye ve düzenleme işleri"
    },
    {
      icon: "🧱",
      title: "Taş Duvar Örme",
      description: "Profesyonel taş duvar inşaat hizmetleri"
    },
    {
      icon: "🌿",
      title: "Peyzaj Düzenleme",
      description: "Komple peyzaj tasarım ve uygulama"
    },
    {
      icon: "🚛",
      title: "Moloz Kaldırma",
      description: "Hızlı ve güvenli moloz taşıma hizmetleri"
    },
    {
      icon: "🔨",
      title: "Temel Açma",
      description: "Yapı temeli açma işleri"
    },
    {
      icon: "🚜",
      title: "İş Makinesi Kiralama",
      description: "Ekskavatör ve iş makinesi kiralama"
    },
    {
      icon: "📋",
      title: "Proje Danışmanlığı",
      description: "Hafriyat projeleri için danışmanlık hizmeti"
    },
    {
      icon: "🚛",
      title: "Nakliye Hizmetleri",
      description: "Toprak ve malzeme nakliye hizmetleri"
    },
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <Image
            src="/video-bg.jpg"
            alt="Keleş Hafriyat"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">
                Profesyonel Hafriyat
                <span className="hero-subtitle">Hizmetleri</span>
              </h1>
              <p className="hero-description">
                Keleş Hafriyat olarak, Mersin  bölgesinde tüm hafriyat hizmetlerinde yanınızdayız.
              </p>
              <div className="hero-buttons">
                <a href="tel:05336199296" className="btn-primary">
                  TEKLİF AL
                </a>
                <Link href="/hizmetlerimiz" className="btn-secondary">
                  HİZMETLERİ İNCELE
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-icon"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <div className="image-wrapper">
                <Image
                  src="/excavator-1.jpg"
                  alt="Keleş Hafriyat İş Makineleri"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="about-content">
              <div className="section-badge">Hakkımızda</div>
              <h2 className="section-heading">
                Mersin'in Güvenilir
                <span className="highlight">Hafriyat Partneri</span>
              </h2>
              <p className="section-text">
                Yıllardır Mersin Toroslar bölgesinde hafriyat sektöründe hizmet vermekteyiz.
                Modern ekipmanlarımız ve deneyimli ekibimizle, projelerinizi en yüksek kalitede tamamlıyoruz.
              </p>
              <ul className="feature-list">
                <li><span>✓</span> Modern İş Makineleri</li>
                <li><span>✓</span> Deneyimli Operatör Kadrosu</li>
                <li><span>✓</span> 7/24 Hızlı Hizmet</li>
                <li><span>✓</span> Uygun Fiyat Garantisi</li>
              </ul>
              <Link href="/hakkimizda" className="btn-link">
                DAHA FAZLA BİLGİ
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-background">
          <Image
            src="/excavator-2.jpg"
            alt="İletişim"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="cta-overlay"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-heading">Projeniz İçin Hemen Teklif Alın</h2>
            <p className="cta-text">
              Uzman ekibimiz projeniz için en uygun çözümü sunmaya hazır
            </p>
            <div className="cta-buttons">
              <a href="tel:05336199296" className="btn-primary-large">
                <span className="btn-icon">📞</span>
                <span>
                  <small>Hemen Arayın</small>
                  <strong>0533 619 92 96</strong>
                </span>
              </a>
              <Link href="/iletisim" className="btn-secondary-large">
                İLETİŞİM FORMU
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
