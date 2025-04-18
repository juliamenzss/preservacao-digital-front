import { useNavigate } from "react-router-dom";
import ImageBackground from "../../../../assets/images/img-bg-login.png";
import ImgLogo from "../../../../assets/images/logo.png";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./DefaultLoginRegister.module.scss";

type DefaultLoginRegisterProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

const DefaultLoginRegister = ({
  title,
  subtitle,
  children,
}: DefaultLoginRegisterProps) => {
  const navigate = useNavigate();
  const handleToHome = () => {
    navigate("/");
  };

  return (
    <>
      <main className={styles.containerContent}>
        <section className={styles.imgContainer}>
          <div>
            <img
              className={styles.logo}
              src={ImgLogo}
              alt="imagem de fundo com formato de ondas em tons de azul"
            />
            <img
              className={styles.backgroundImage}
              src={ImageBackground}
              alt="imagem de fundo com formato de ondas em tons de azul"
            />
          </div>
        </section>

        <section className={styles.formSection}>
          <div className={styles.arrowContainer}>
            <span onClick={handleToHome}>
              {""}
              <FaArrowLeft />
            </span>
          </div>
          <div className={styles.titleSubtitle}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </div>
          {children}
        </section>
      </main>
    </>
  );
};

export default DefaultLoginRegister;
