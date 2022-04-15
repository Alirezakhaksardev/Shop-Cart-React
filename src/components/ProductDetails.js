import React , {useEffect, useState} from 'react';

// Loading
import BounceLoader from "react-spinners/BounceLoader";

// Style 🪐
import styles from "./ProductDetails.module.css";

import { Link, useParams } from 'react-router-dom';

import { getProduct } from '../services/api';
const Productdetails = () => {
    // const data = useContext(ProductsContext);

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#4A90E2");


    const params = useParams();
    const id = params.id;

    const [product , setProducts] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            if(!isNaN(id)){
                const products = await getProduct(id);
                console.log(products);
                setProducts(products);
                setLoading(false);  
            }  else{
                console.log(null);
                setProducts(null);
                setLoading(false);  
            }
        }

        fetchAPI();
    }, []);


    // const { image , title , description , price , category } = product;

    return (
    
        <>
            <div className={styles.container}>
                <BounceLoader color={color} loading={loading} size={60} className={styles.loading} />
                
                        {
                            !loading &&
                            <>
                                {
                                    product ? <>
                                             <img className={styles.image} src={product.image} alt="product" />
                                            <div className={styles.textContainer}>
                                                <h3>{product.title}</h3>
                                                <p className={styles.description}>{product.description}</p>
                                                <p className={styles.category}><span>Category:</span> {product.category}</p>
                                                <div className={styles.buttonContainer}>
                                                    <span className={styles.price}>{product.price} $</span>
                                                    <Link to="/products">Back to Shop</Link>
                                                </div>
                                            </div>
                                     </>
                                     :
                                     <>
                                        <h1>404</h1>
                                     </>
                                }
                                
                            </>
                        }


            </div>
        </>
        
    );
}

export default Productdetails;
