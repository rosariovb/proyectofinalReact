import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import CardProdu from "../../components/CardProdu/CardProdu";

import { db } from "../../firebase/firebaseConfig";
import {
    collection,
    query,
    getDocs,
    where,
    documentId,
} from "firebase/firestore";


const Detalle = () => {
    const [catalogo, setCatalogo] = useState([]);
    

    let { id } = useParams();


    useEffect(() => {
        const getCatalogo = async () => {
            const q = query(collection(db, "Catalogo"), where(documentId (),"==", id));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {

                docs.push({ ...doc.data(), id: doc.id })
            });
            setCatalogo(docs);
        };
        getCatalogo();
    }, [id]);
    return(
        <div>
            <h1>detalles</h1>
            {catalogo.map((data) => {
                return <CardProdu catalogo={data} key={data.id} />;
            })}
        </div>

    );

};


export default Detalle;