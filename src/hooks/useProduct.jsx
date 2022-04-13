import { useEffect,useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

export const useProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const queryDb = doc(db, "items", id);
    getDoc(queryDb)
      .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  return { product, loading };
};
 