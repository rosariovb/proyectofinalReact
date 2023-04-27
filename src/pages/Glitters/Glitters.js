import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import CardProdu from "../../components/CardProdu/CardProdu";

import { db } from "../../firebase/firebaseConfig";
import {
    collection,
    query,
    getDocs,
    where,
} from "firebase/firestore";


const Glitters = () => {
    const [categoria, setCategoria] = useState([]);
    let { color } = useParams();

    useEffect(() => {
        const getCategoria = async () => {
            const q = query(collection(db, "Catalogo"), where("color", "==", color));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {

                docs.push({ ...doc.data(), id: doc.id })
            });
            setCategoria(docs);
        };
        getCategoria();
    }, [color]);
    return (
        <div>
            <h1>Categoria</h1>
            {categoria.map((producto) => {
                return <CardProdu data={producto} key={producto.id} />;
            })}

        </div>
    );
};

export default Glitters;