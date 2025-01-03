import SearchAndMenu from '@/components/Chat/SearchAndMenu/SearchAndMenu';
import ChatWindow from '@/components/Chat/ChatWindow/ChatWindow';
import Nav from '@/components/Nav/Nav';
import styles from './page.module.scss';

export default function EmployerChat() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Nav page="Чат и отклики" />
      </nav>
      <div className={styles.container}>
        <SearchAndMenu />
        <ChatWindow />
      </div>
    </main>
  );
}
