import styles from "./StatusBadge.module.scss"

type StatusBadgeProps = {
  label: string;
  status: "Iniciada" | "Preservado" | "Falha";
};

const StatusBadge = ({ label, status }: StatusBadgeProps) => {
  return <>
  <section className={styles.contentBadge}>
  <span className={`${styles.badge} ${styles[status]}`}>{label}</span>
  </section>
  </>
}

export default StatusBadge;
