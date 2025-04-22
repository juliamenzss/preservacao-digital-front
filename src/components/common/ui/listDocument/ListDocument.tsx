// src/components/ListDocument.tsx
import styles from "./ListDocument.module.scss";
import DocumentCard from "../cardDocument/CardDocument";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import DateRangeFilter from "../dateRangeFilter/DateRangeFilter";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../store/store";
import { useEffect } from "react";
import SearchInput from "../searchInput/SearchInput";
import NoItems from "../no-items/NoItems";
import { mockDocuments } from "../../../../mocks/documentMock/documentMock";
import { setMockDocuments } from "../../../../features/document/documentSlice";

type DocumentItem = {
  id: string;
  name: string;
  date: string;
  status: "Iniciada" | "Preservado" | "Falha";
};

const ListDocument = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  
  const { documents, loading, error } = useSelector((state: any) => state.document);

  const validDocuments = documents.filter((doc: DocumentItem) => doc && doc.id);

  const handleHome = () => {
    navigate("/documentos/novo");
  };

  useEffect(() => {
    dispatch(setMockDocuments(mockDocuments));
  }, [dispatch]);

  return (
    <>
      <section className={styles.dateRange}>
        <SearchInput />
        <DateRangeFilter />
        <DateRangeFilter />
      </section>
      
      <section className={styles.descriptionContainer}>
        <div className={styles.descriptionList}>
          <div className={styles.descriptionListText}>
            <p className={styles.fieldId}>id</p>
            <p className={styles.fieldName}>nome</p>
            <p className={styles.fieldDate}>data</p>
            <p className={styles.fieldStatus}>status</p>
          </div>
        </div>
      </section>

      <section className={styles.containerListCard}>
        {!loading && !error && validDocuments.length === 0 && <NoItems />}
        
        {validDocuments.length > 0 &&
          validDocuments.map((doc:DocumentItem, i: number) => (
            <div key={doc.id ?? i}>
              <DocumentCard {...doc} />
              {i < validDocuments.length - 1 && <div className={styles.dividerCard}></div>}
            </div>
          ))}
      </section>

      <div className={styles.buttonNewDocument}>
        <Button text="Preservar novo documento" type="button" onClick={handleHome} />
      </div>
    </>
  );
};

export default ListDocument;
