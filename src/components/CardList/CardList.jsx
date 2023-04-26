import { useState, useEffect } from "react";
import CardProdu from "../CardProdu/CardProdu";
import "./CardList.css";
import { Link } from "react-router-dom";
//FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const CardList = () => {
    const [catalogosData, setCatalogosData] = useState([])

    useEffect(() => {
        const getCatalogos = async () => {
            const q = query(collection(db, "Catalogo"))
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {

                docs.push({ ...doc.data(), id: doc.id })
            });
            setCatalogosData(docs)
        };
        getCatalogos();
    }, []);

    return (
        <div className="List-container">
            {catalogosData.map((data) => {
                return (
                    <div key={data.id}>
                        <Link to={`/detail/${data.id}`}>
                            <CardProdu catalogosData={data} />
                        </Link>
                    </div>
                );
            })}
        </div>

    );
};

export default CardList;