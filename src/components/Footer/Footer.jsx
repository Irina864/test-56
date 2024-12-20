"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "./Footer.module.scss";

const Footer = () => {
  const mode = useSelector(({ mode }) => mode);

  // Получение текущего года
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Logo */}
        <div className={styles.logoColumn}>
          <Link href="/">
            <div className={styles.footer__logowrap}>
              <Image
                className={styles.footer__logo}
                src="/images/footer/Logo.png"
                alt="Logo"
                width={76}
                height={32}
              />
            </div>
          </Link>
        </div>

        {/* Links: Личный кабинет, Чаты */}
        <div className={styles.linksColumn}>
          <Link href="/profile">Личный кабинет</Link>
          <Link href="/chats">Чаты</Link>
        </div>

        {/* Links: Соискателям/Работодателям and Обратная связь */}
        <div className={styles.secondaryLinksColumn}>
          {mode ? (
            <Link href="/vacancies">Работодателям</Link>
          ) : (
            <Link href="/resumes">Соискателям</Link>
          )}
          <Link href="/feedback">Обратная связь</Link>
        </div>

        {/* Contact information */}
        <div className={styles.contactColumn}>
          <a href="tel:+79169999999">+7 (916) 999 99 99</a>
          <a href="mailto:rabota@gmail.com">rabota@gmail.com</a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        {/* Dynamic year */}
        <span className={styles.copyright}>
          {" "}
          <div className={styles.copyrightIcon}> &copy;</div> company{" "}
          {currentYear}
        </span>

        {/* Legal links */}
        <div className={styles.legalLinks}>
          <Link href="/agreement" target="_blank" rel="noopener noreferrer">
            Пользовательское соглашение
          </Link>
          <Link href="/cookies" target="_blank" rel="noopener noreferrer">
            Использование Cookies
          </Link>
          <Link href="/privacy" target="_blank" rel="noopener noreferrer">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
