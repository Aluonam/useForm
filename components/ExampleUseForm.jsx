import React from 'react';
import { useForm } from 'react-hook-form';
import { ageValidator } from './validators';

const ExampleUseForm = () => {

  const { register, formState:{ errors }, watch, handleSubmit } = useForm({
    defaultValues: {
        nombre: 'Mario',
        direccion: 'Calle'
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const incluirTelefono = watch('incluirTelefono')

  return (
    <>
      <h2>Formulario con useForm</h2>
      <p>Nombre: {watch('nombre')}</p>
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
          <input type='text' {...register('edad',{
            validate: ageValidator // *LLama a la función exportada de validators.jsx y debe ser importado arriba
          })} />
          {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
        </div>
        <div>
          <label>País</label>
          <select {...register('pais')}>
            <option value='es'>España</option>
            <option value='pr'>Portugal</option>
            <option value='fr'>Francia</option>
          </select>
        </div>
        <div>
            <label>¿Desea incluir el número de teléfono?</label>
            <input type='checkbox' {...register('incluirTelefono')}></input>
        </div>
        {incluirTelefono && (
            <div>
                <label>Teléfono</label>
                <input type='text' {...register('telefono')}></input>
            </div>
        )}
        

        <input type='submit' value='Enviar' />
      </form>
    </>
  );
};

export default ExampleUseForm;
