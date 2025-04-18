import  styles  from "./Button.module.scss";

type ButtonProps = {
    text: string;
    type: 'button' | 'submit' | 'reset';
    variant?: "primary" | "secondary"; 
    onClick?: () => void;
  };


const Button = ({ text, onClick, type = "button", variant = "primary" }: ButtonProps) => {
    const className = `${styles.btn} ${styles[`btn-${variant}`]}`;
    return (
        <div>
            <button  
                className={className}  
                type={type} 
                onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default Button;