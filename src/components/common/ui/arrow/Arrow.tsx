import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./Arrow.module.scss";

const Arrow = () => {
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate("/");
  };

  return (
      <div className={styles.arrowContainer}>
        <span onClick={handleToHome}>
          <FaArrowLeft />
        </span>
    </div>
  );
};

export default Arrow;
