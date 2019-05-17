import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { H1, P } from 'design-system/typography';
import { Button } from 'design-system/buttons/styled';
import TextInput from 'design-system/fields/text-input';
import Validations from 'helpers/validations';
import * as S from './styled';
import GlobalContext from 'context/GlobalContext';
import { signIn } from 'helpers/api/auth';
import { history } from '_history';

import data from './data';

const LoginForm = () => {
  const { title, description, image } = data.form;
  const { globalDispatch } = useContext(GlobalContext);

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const [errorAuth, setErrorAuth] = useState('');

  const handleFormValues = async (e) => {
    const { name, value } = e.target;

    validateField(name, value);

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateField = (name, value) => {
    const errorMessage = Validations[name](value);

    setFormErrors(prevState => ({
      ...prevState,
      [name]: errorMessage,
    }));

    return errorMessage;
  };

  const handleVerifyErros = async () => {
    const promises = Object.keys(formValues).map(name => validateField(name, formValues[name]));

    const resolvePromises = await Promise.all(promises).then(r => r);
    const errors = resolvePromises.filter(v => v !== '');

    if (errors.length > 0) return errors;

    return [];
  };

  const formSubmit = async () => {
    const hasError = await handleVerifyErros();

    if (hasError.length > 0) {
      return false;
    }

    try {
      const signInUser = await signIn({
        session: formValues,
      });
      
      globalDispatch({
        type: 'AUTH_USER',
        values: signInUser.data.data,
      });

      history.push('/contract-listing');
    } catch (error) {
      setErrorAuth('E-mail ou senha inválidos');
    }
  };

  return (
    <S.LoginForm>
      <div className="m-b-3 has-text-centered">
        <img src={image} width="150" alt="Bcredi" />
        <H1 size="24px" lineHeight={1.25} weight="semibold" margin={{ t: 10, b: 2 }}>
          {title}
        </H1>
        <P margin={{ t: 0, b: 6 }} lineHeight={1.5}>
          {description}
        </P>
        {errorAuth && <S.ErrorAuth>{errorAuth}</S.ErrorAuth>}
      </div>
      <form>
        <TextInput
          type="email"
          name="email"
          placeholder="E-mail"
          value={formValues.email}
          onChangeValue={handleFormValues}
          error={formErrors.email}
        />
        <TextInput
          type="password"
          name="password"
          placeholder="Senha"
          value={formValues.password}
          onChangeValue={handleFormValues}
          error={formErrors.password}
        />
        <Button type="button" variant="secondary" block onClick={formSubmit}>
          Entrar
        </Button>
        <Link to="/contracts">Next page</Link>
      </form>
    </S.LoginForm>
  );
};

export default LoginForm;
