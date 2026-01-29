'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'ANASAYFA' },
        { href: '/hakkimizda', label: 'HAKKIMIZDA' },
        { href: '/hizmetlerimiz', label: 'HİZMETLERİMİZ' },
        { href: '/iletisim', label: 'İLETİŞİM' },
    ];

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo */}
                <Link href="/" className="nav-logo">
                    <Image
                        src="/logo.png"
                        alt="Keleş Hafriyat"
                        width={250}
                        height={90}
                        className="logo-img"
                        style={{ objectFit: 'contain', height: '80px', width: 'auto' }}
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="nav-menu desktop-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="nav-actions">
                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Menu"
                    >
                        <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`mobile-nav-link ${pathname === link.href ? 'active' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
