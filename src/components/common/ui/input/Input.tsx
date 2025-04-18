import styles from './Input.module.scss';


type InputProps = {
    type: 'text' | 'email';
    placeholder?: string;
    value: string;
    label: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({type, name, placeholder, value, label, onChange}: InputProps) => 
{
    return(
        <>
        <div className={styles.inputWrapper}>
        <label htmlFor={type}>{label}</label>
        <input 
            className={styles.input}
            id={type} 
            name={name}
            type={type} 
            value={value} 
            placeholder={placeholder} 
            onChange={onChange} 
            required/>
        </div>
        </>
    )
} 

export default Input;