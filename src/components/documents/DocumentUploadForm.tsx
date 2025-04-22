import { ChangeEvent, useEffect, useState } from "react";
import Input from "../common/ui/input/Input";
import styles from "./DocumentUploadForm.module.scss";
import Button from "../common/ui/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import { uploadDocument } from "../../features/document/documentActions"; 
import { toast } from "react-toastify";
import { resetDocumentState } from "../../features/document/documentSlice";
import { DocumentPayload } from "../../features/document/documentTypes";

const DocumentUploadForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const { success, error, userToken }  = useSelector(
    (state: any) => state.document
  );

  const [formData, setFormData] = useState<DocumentPayload>({
    name: '',
    file: null,
    author: '',
    description: '',
    keywords: '',
    category: '',
  });
  
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();

    data.append('name', formData.name);
    data.append('author', formData.author);
    data.append('description', formData.description);
    data.append('keywords', formData.keywords);
    data.append('category', formData.category);

    if(!formData.file){
      toast.error("Por favor, adicione um arquivo!");
      return;
    }
    data.append('file', formData.file);
    dispatch(uploadDocument(data))
  };

 useEffect(() => {
        if(success){
            toast.success("Documento enviado com sucesso");
            dispatch(resetDocumentState());
            navigate("/");
        }
        if (error) {
          toast.error(
            typeof error === "string" ? error : "Erro ao enviar novo documento!");
        }
      }, [success, error, userToken, navigate, location]);

function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData((data) => ({
          ...data,
          [name]: value,
        }))
  }
    

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((data) => ({
        ...data,
        file,
      }));
    }
  };

  return (
    <form
      onSubmit={submitForm}
    >
      <section className={styles.metaData}>
        <div className={styles.formContent}>
          <div className={styles.name}>
            <h2>Adicione seu documento</h2>
          </div>
          <div>
            <Input
              name="name"
              type="text"
              onChange={handleChange}
              label="Digite o nome do arquivo:"
              value={formData.name}
            />
            <Input
              name="author"
              type="text"
              onChange={handleChange}
              label="Digite o autor:"
              value={formData.author}
            />
            <Input
              name="category"
              type="text"
              onChange={handleChange}
              label="Digite a categoria:"
              value={formData.category}
            />
            <Input
              name="keywords"
              type="text"
              onChange={handleChange}
              label="Digite as palavras chaves:"
              value={formData.keywords}
            />
            <Input
              name="description"
              type="text"
              onChange={handleChange}
              label="Digite a descrição:"
              value={formData.description}
            />
            <input
              style={{cursor: "pointer"}}
              name="file"
              className={styles.inputFile}
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
            />
          </div>
          <Button text="Preservar" type="submit" variant='primary'/>
        </div>
      </section>
    </form>
  );
};

export default DocumentUploadForm;
