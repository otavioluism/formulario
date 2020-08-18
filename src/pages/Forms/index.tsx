import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup'

import { Container, Header } from './styles';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

interface Errors { 
  [key: string]: string;
}

interface PropsDataForms { 
  nome: string;
  email: string;
  cell: string;
  city: string;
  sms: string;
}

const Forms:React.FC = () => { 

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: PropsDataForms, {reset}) => { 
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
        cell: Yup.string().required('O telefone de contato é obrigatório').min(9, 'No mínimo 9 números'),
        city: Yup.string(),
        sms: Yup.string().required('Digite uma mensagem'),
      });

      // chama a funcao para realizar a validacao conforme regra estabelecida acima
      await schema.validate(data, {
        abortEarly: false, // retorna todos os erros com essa propriedade falsa 
      });

      reset(); //reseta todos os campos, ou seja limpa 
      console.log(data.cell);

    } catch (err) {
      if(err instanceof Yup.ValidationError){
        const errorMessages: Errors = {};

        err.inner.forEach(error => { 
          errorMessages[error.path] = error.message;
        })
        
        formRef.current?.setErrors(errorMessages);  
      }
    }
  }, []);

  return(
    <Container>
      <Header>
        <h1>Fale Conosco</h1>
        <p>Entre em contato conosco e solicite um orçamento sem compromisso</p>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="nome" placeholder="Nome"/>
          <Input name="email" placeholder="E-mail" type="e-mail"/>
          <Input name="cell" placeholder="Telefone de contato"/>
          <Input name="city" placeholder="Cidade"/>
          <Textarea name="sms" rows={6} placeholder="Mensagem"/>
          <button type="submit">Enviar</button>
        </Form>
      </Header>
    </Container>
  );
}

export default Forms;