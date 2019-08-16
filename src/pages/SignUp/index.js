import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um email válido')
      .required('O e-mail é campo obrigatorio'),
    password: Yup.string()
      .min(6, 'A senha prcisa de 6 caracteres')
      .required('A senha é obrigatoria'),
    name: Yup.string().required('O nome é obrigatorio'),
  });

  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="Gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Ja tenho login</Link>
      </Form>
    </>
  );
}
