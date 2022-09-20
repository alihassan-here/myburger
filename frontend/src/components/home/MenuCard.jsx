import React from 'react';
import { motion } from "framer-motion";

const MenuCard = ({ itemNum, burgerSrc, price, title, handler }) => {
    return (
        <motion.div className='menuCard'
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 * itemNum }}
        >
            <div className="">Item {itemNum}</div>
            <main>
                <img src={burgerSrc} alt={itemNum} />
                <h5>₨{price}</h5>
                <p>{title}</p>
                <button onClick={() => handler(itemNum)}>Buy Now</button>
            </main>
        </motion.div>
    )
}

export default MenuCard;