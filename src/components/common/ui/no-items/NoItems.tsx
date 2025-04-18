import FolderOffOutlinedIcon from '@mui/icons-material/FolderOffOutlined';
import styles from "./NoItems.module.scss"

const NoItems = () => {
  return (
    <div className={styles.noItemsContainer}>
    <FolderOffOutlinedIcon className={styles.icon} />
    <p>Nenhum documento encontrado!</p>
  </div>
);
};

export default NoItems;