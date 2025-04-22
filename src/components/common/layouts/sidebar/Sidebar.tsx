import styles from "./Sidebar.module.scss"
import logo from "../../../../assets/images/logo.png"
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { Link, useNavigate } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch } from "react-redux";
import { logout } from "../../../../features/auth/authSlice";

const Sidebar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogoutlick = () => {
    dispatch(logout());
    localStorage.clear();
    sessionStorage.clear();
    navigate("/entrar")
  };
  return (
    <>
      <section className={styles.containerContent}>
        <img className={styles.logo} src={logo} alt="Imagem de logo." />
        <div className={styles.listContent}>
          <span className={styles.list}>
            <DescriptionOutlinedIcon className={styles.icon} />
            <Link to="/" className={styles.link}>Documentos</Link>
          </span>
          <span className={styles.list}>
            <AccountBoxOutlinedIcon className={styles.icon} />
            <Link to="/perfil" className={styles.link}>Perfil</Link>
          </span>
          <span className={styles.list}>
            <ExitToAppIcon className={styles.icon} />
            <Link to="/entrar" onClick={() => { handleLogoutlick }} className={styles.link}>Sair</Link>
          </span>
        </div>
      </section>
    </>
  )
}

export default Sidebar