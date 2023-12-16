import React from 'react'
import { useForm } from 'react-hook-form';

const UseformExample = () => {

  const { register, handleSubmit } = useForm();

  return (
    <>
    <h2>Formulario con useForm</h2>
    <form>
    <div>
        <label>Nombre</label>
        <input type='text'></input>
      </div>
      <div>
        <label>Dirección</label>
        <input type='text'></input>
      </div>
      <div>
        <label>Edad</label>
        <input type='text'></input>
      </div>
      <div>
        <label>País</label>
        <select>
          <option value="es">España</option>
          <option value="pr">Portugal</option>
          <option value="fr">Francia</option>
        </select>
      </div>
    </form>
    </>
  )
}

export default UseformExample