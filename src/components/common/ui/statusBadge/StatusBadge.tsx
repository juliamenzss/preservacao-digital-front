import styles from "./statusBadge.module.scss"

type StatusBadge = {
  label: string;
  status: "Iniciada" | "Preservado" | "Falha";
};

const statusBadge = ({ label, status }: StatusBadge) => {
  return <>
  <section className={styles.contentBadge}>
  <span className={`${styles.badge} ${styles[status]}`}>{label}</span>
  </section>
  </>
}

export default statusBadge;
