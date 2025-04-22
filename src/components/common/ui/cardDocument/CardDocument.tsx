import styles from './CardDocument.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import StatusBadge from '../statusBadge/StatusBadge';
import { useNavigate } from 'react-router-dom';

type CardDocumentProps = {
    id: string;
    name: string;
    date: string;
    status: "Iniciada" | "Preservado" | "Falha";
}

const CardDocument = ({ id, name, date, status }: CardDocumentProps) => {
  
  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate(`/documentos/${id}`)
  }
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
        <div onClick={handleViewDetails}><SearchIcon className={styles.icon} /></div>
        <DownloadIcon className={styles.icon} />
      </div>
      </div>
    </section>
  )
}

export default CardDocument