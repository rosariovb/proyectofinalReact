/*import { useState } from 'react';
import TextField from '@mui/material/TextField'

import "./formul.css";
import Mensaje from "../mensaje/Mensaje";

import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";


const inicialState = {
  Nombre: "",
  Mail: "",
  Comentario: "",
};
const formulario = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [values, setValues] = useState(inicialState);
  // id para finalizar la compra o formulario
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const[comprasID, setComprasID] = useState ("");

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "compras"), {
     values,
    });
    /*console.log("Document written with ID: ", docRef.id);*/
    /*setComprasID(docRef.id);
    setValues(inicialState);

  };

  /*return (
    <div className='tit' onSubmit={onSubmit}>
      <h1>Completar</h1>
      <form className='formik'>
        <TextField
          sx={{ mb: 2 }} fullWidth
          placeholder='Nombre'
          Nombre="nombre"
          value={values.Nombre}
          onChange={onChange}
        />
        <TextField
          sx={{ mb: 2 }} fullWidth
          placeholder='Mail'
          Mail="mail"
          value={values.Mail}
          onChange={onChange}
        />
        <TextField
          sx={{ mb: 2 }} fullWidth
          placeholder='Comentario'
          Comentario=""
          value={values.Comentario}
          onChange={onChange}
        />

        <button type="submit">Finalizar</button>

      </form>
  
      {comprasID.length ? <Mensaje comprasID={comprasID}/> : null }
    </div>
  );
};

export default formulario;*/