import styles from "../styling/toggle.module.css";

export default function Toggle({ onToggle, isToggled }) {
  const handleToggle = () => {
    onToggle(!isToggled);
  };

  return (
    <section className={styles.toggleSection}>
      <div
        className={styles.toggleContainer}
        onClick={handleToggle}
        role="button"
        aria-pressed={isToggled}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleToggle();
        }}
      >
        <div
          className={`${styles.toggleButton} ${
            isToggled ? styles.toggled : ""
          }`}
        ></div>
      </div>
    </section>
  );
}
