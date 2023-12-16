import React from 'react';
import { useForm } from 'react-hook-form';

const ExampleUseForm = () => {
  const { register, formState:{ errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h2>Formulario con useForm</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input type='text' {...register('nombre',{
            required: true,
            maxLength: 10
            })} />
          {errors.nombre?.type === 'required' && <p style={{color:"red"}}>El campo nombre es requerido</p>}
          {errors.nombre?.type === 'maxLength' && <p style={{color:"red"}}>El campo debe tener menos de 10 caracteres</p>}
        </div>
        <div>
          <label>Email</label>
          <input type='text' {...register('email', {
                    pattern:   /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
                } // expresiones regulares de validación de email  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
            )} />
            {errors.email?.type === 'pattern' && <p style={{color: "orange"}}>El email es incorrecto</p>}
        </div>
        <div>
          <label>Dirección</label>
          <input type='text' {...register('direccion')} />
        </div>
        <div>
          <label>Edad</label>
          <input type='text' {...register('edad')} />
        </div>
        <div>
          <label>País</label>
          <select {...register('pais')}>
            <option value='es'>España</option>
            <option value='pr'>Portugal</option>
            <option value='fr'>Francia</option>
          </select>
        </div>
        <input type='submit' value='Enviar' />
      </form>
    </>
  );
};

export default ExampleUseForm;
