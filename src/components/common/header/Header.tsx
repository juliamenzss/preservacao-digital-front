import { useNavigate } from "react-router-dom";
import styles from './Header.module.scss';
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) =>  {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/perfil")
  }
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
      </div>
    </section>
    </>
  )
}

export default Header