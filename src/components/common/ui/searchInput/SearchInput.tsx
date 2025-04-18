import styles from "./SearchInput.module.scss";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {

  return (
    <div className={styles.searchContainer}>
      <SearchIcon className={styles.searchIcon} />

      <input
        type="text"
        placeholder={`Selecione seu filtro de pesquisa`}
        className={styles.searchInput}
      />
      <select className={styles.select}>
        <option value="name">nome</option>
        <option value="author">autor</option>
        <option value="description">descrição</option>
        <option value="category">categoria</option>
        <option value="keywords">palavras chaves</option>
      </select>
    </div>
  );
};
export default SearchInput;
