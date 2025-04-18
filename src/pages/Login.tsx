import { useLocation, useNavigate } from "react-router-dom";
import DefaultLoginRegister from "../components/common/layouts/defaultLoginRegister/DefaultLoginRegister";
import Input from "../components/common/ui/input/Input";
import Button from "../components/common/ui/button/Button";
import Divider from "../components/common/ui/divider/Divider";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { toast } from "react-toastify";
import { loginUser } from "../features/auth/authActions";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const location = useLocation();
    
    const { success, error, userToken } = useSelector(
        (state: any) => state.auth);

    useEffect(() => {
        if(success && userToken){
            localStorage.setItem("jwt_token", userToken);
            toast.success("Login efetuado com sucesso!");
            navigate(location.state?.from || "/");
        }
        if(error){
            toast.error("Erro ao fazer login, tente novamente!")
        }
    },[ success, error, userToken, navigate, location ]);

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        const user = {
            email,
            password
        };
        dispatch(loginUser(user));
    }


    return (
        <form onSubmit={submitForm}>
        <DefaultLoginRegister title="Bem vindo de volta!" subtitle="Acesse sua conta para continuar.">
            <Input
                label="Email"
                type="text"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                label="Senha"
                type="text"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <div style={{paddingTop: '20px'}}>
                <Button    
                    text="Entrar" 
                    type="submit" 
                    variant="primary"
                />
            </div>
            <Divider />
            <div>
                <Button 
                    text="Criar conta" 
                    type="button"
                    variant="secondary"
                    onClick={() =>navigate('/cadastrar')} />
            </div>
        </DefaultLoginRegister>
        </form>
    );
};

export default Login;