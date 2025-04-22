import { useNavigate } from "react-router-dom";
import styles from './Header.module.scss';
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch } from "react-redux";
import { logout } from "../../../features/auth/authSlice";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) =>  {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleProfileClick = () => {
    navigate("/perfil")
  }

  const handleLogoutlick = () => {
    dispatch(logout()); 
    localStorage.clear();
    sessionStorage.clear();
    navigate("/entrar")
  }; 
  return (
    <>
    <section className={styles.container}>
      <div className={styles.pageName}>
        <h1>{title}</h1>
      </div>

      <div className={styles.rightContent}>
        <AccountBoxOutlinedIcon
          className={styles.icon}
          onClick={handleProfileClick}
        />
        <ExitToAppIcon
          className={styles.icon}
          onClick={handleLogoutlick}
        />
      </div>
    </section>
    </>
  )
}

export default Header