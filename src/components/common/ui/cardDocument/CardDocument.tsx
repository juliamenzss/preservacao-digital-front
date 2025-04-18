import styles from './CardDocument.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import StatusBadge from '../statusBadge/StatusBadge';

type CardDocumentProps = {
    id: string;
    name: string;
    date: string;
    status: "Iniciada" | "Preservado" | "Falha";
}

const CardDocument = ({ id, name, date, status }: CardDocumentProps) => {
  return (
    <section className={styles.contentCard}>
    <div className={styles.card}>
    <p className={styles.fieldId}>{id}</p>
        <p className={styles.fieldName}>{name}</p>
        <p className={styles.fieldDate}>{date}</p>
    <StatusBadge
    label={status}
    status={status}
    />
      <div className={styles.contentIcons}>
        <SearchIcon className={styles.icon} />
        <DownloadIcon className={styles.icon} />
      </div>
      </div>
    </section>
  )
}

export default CardDocument