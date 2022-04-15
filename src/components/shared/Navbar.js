import React , {useContext} from 'react';
import { Link } from 'react-router-dom';

// Context 🌎
import {CartContext} from '../../context/CartContextProvider';

// Icons
import { FaShoppingBasket } from "react-icons/fa";

// Style
import styles from "./Navbar.module.css";

const Navbar = () => {
    const { state } = useContext(CartContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><FaShoppingBasket className={styles.icon} /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
