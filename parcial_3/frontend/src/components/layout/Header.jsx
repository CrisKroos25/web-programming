import styles from "./Header.module.css";

export default function Header({ activeTab, onChangeTab }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>SecretLink</h1>

      <nav className={styles.nav}>
        <button
          className={`${styles.tab} ${
            activeTab === "hide" ? styles.active : ""
          }`}
          onClick={() => onChangeTab("hide")}
        >
          Ocultar
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "reveal" ? styles.active : ""
          }`}
          onClick={() => onChangeTab("reveal")}
        >
          Revelar
        </button>
      </nav>
    </header>
  );
}
