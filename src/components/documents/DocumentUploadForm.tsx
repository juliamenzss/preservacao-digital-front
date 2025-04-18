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

const DocumentUploadForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const { success, error, userToken }  = useSelector(
    (state: any) => state.auth
  );

  const [formData, setFormData] = useState({
    name: '',
    file: null as File| null,
    author: '',
    description: '',
    keywords: '',
    category: '',
    metadados: {} as Record<string, any>,
  });

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.file){
      toast.error("Por favor, adicione um arquivo!");
      return;
    }
    const document = new FormData();

    document.append("name", formData.name)
    document.append("author", formData.author)
    document.append("description", formData.description)
    document.append("category", formData.category)
    document.append("keywords", formData.keywords)
    document.append("file", formData.file)
    document.append("metadados", JSON.stringify(formData.metadados));
    dispatch(uploadDocument(document))
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
