import { useParams } from 'react-router-dom';
import styles from './DefaultLayoutDocumentDetails.module.scss';
import StatusBadge from '../../ui/statusBadge/StatusBadge';
import Button from '../../ui/button/Button';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


const DefaultLayoutDocumentDetails = () => {

    const { id } = useParams();
    const documents = useSelector((state: any) => state.document.documents);
    const document = documents.find((doc: any) => doc.id === id);
    const [fileUrl, setFileUrl] = useState("");

    const handleDownload = () => {
        window.postMessage(document, '_blank');
    };

    useEffect(() => {
        if(document && document.file instanceof File){
            const url = URL.createObjectURL(document.file);
            setFileUrl(url);
            return () => URL.revokeObjectURL(url);
        }
    }, [document])
    return (
        <div className={styles.container}> 
        <section className={styles.detailsContainer}>
            <div className={styles.headerMetadata}>
                <h2>{document.name}</h2>
                <div className={styles.statusBadge}> 
                <StatusBadge label={document.status} status={document.status as "Iniciada" | "Preservado" | "Falha"} />
                </div>
            </div>
            <p className={styles.date}>Data de preservação: {document.date}</p>
            {(document.author || document.category || document.keywords || document.description) && (
            <div className={styles.metadata}>
                <h3>Metadados</h3>
                <ul>
                    {document.author && (
                        <li><strong>Autor:</strong> {document.author}</li>
                    )}
                    {document.category && (
                        <li><strong>Categoria:</strong> {document.category}</li>
                    )}
                    {document.keywords && (
                        <li><strong>Palavras Chaves:</strong> {document.keywords}</li>
                    )}
                    {document.description && (
                        <li><strong>Descrição:</strong> {document.description}</li>
                    )}
                </ul>
            </div>
            )}
            <div className={styles.viewer}>
                <iframe src={fileUrl} title="Visualização do PDF" />
            </div>
            <Button text='Baixar documento' onClick={handleDownload} variant='primary' type='button' key={id}/>
        </section>
        </div>
    );
};
export default DefaultLayoutDocumentDetails