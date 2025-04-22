import { useNavigate, useLocation } from 'react-router-dom';
import DefaultLoginRegister from '../components/common/layouts/defaultLoginRegister/DefaultLoginRegister';
import Button from '../components/common/ui/button/Button';
import Input from '../components/common/ui/input/Input';
import Divider from '../components/common/ui/divider/Divider';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { registerUser } from "../features/auth/authActions"; 
import { AppDispatch } from '../store/store';
import { resetAuthState } from '../features/auth/authSlice';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const location = useLocation();

    const {  success, error, userToken } = useSelector(
        (state: any) => state.auth
      );

      useEffect(() => {
        if(success && userToken){
            localStorage.setItem("jwt_token", userToken);
            toast.success("Conta criada com sucesso!");
            dispatch(resetAuthState());
            navigate(location.state?.from || "/");
        }
        if (error && typeof error === "string") {
            toast.error(error);
          }
          
      }, [success, error, userToken, navigate, location]);

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        const user = {
            name,
            email,
            password,
        };
        dispatch(registerUser(user))
    };

    return (
        <form onSubmit={submitForm}>
        <DefaultLoginRegister
         title="Que bom ter você aqui!" subtitle="Crie sua conta e comece agora mesmo">
            <Input
                label="Nome"
                name="name"
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                label="Email"
                name="email"
                type="text"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                label="Senha"
                name="password"
                type="text"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

             <div style={{paddingTop: '16px'}}>
                <Button 
                    text="Cadastrar" 
                    type="submit" 
                    variant='primary'
                    />
            </div>
            <Divider />
            <div>
                <Button 
                    text="Entrar em sua conta" 
                    type="button"                     
                    variant='secondary'
                    onClick={() => navigate('/entrar')} />
            </div>
        </DefaultLoginRegister>
          </form>
    );
}

export default Register;