import styles from "./Sidebar.module.scss"
import logo from "../../../../assets/images/logo.png"
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { Link } from "react-router-dom";

const sidebar = () => {
  return (
    <>
    <section className={styles.containerContent}>
      <img className={styles.logo} src={logo} alt="Imagem de logo."/>
      <div className={styles.listContent}>
        <span className={styles.list}>
        <DescriptionOutlinedIcon className={styles.icon} />
        <Link to="/" className={styles.link}>Documentos</Link>
        </span>
        <span className={styles.list}>
        <AccountBoxOutlinedIcon className={styles.icon} />
        <Link className={styles.link}>Perfil</Link>
        </span>
      </div>
    </section>
    </>
  )
}

export default sidebar