import React from 'react';
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";

const Contact = () => {
    return (
        <section className='contact'>
            <motion.form
                initial={{ opacity: 0, x: "-100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
            >
                <h2>Contact Us</h2>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <textarea placeholder='Message...' cols="30" rows="10"></textarea>
                <button type='submit'>Send</button>
            </motion.form>
            <motion.div className='formBorder'
                initial={{ opacity: 0, x: "100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
            >
                <motion.div
                    initial={{ opacity: 0, y: "-100vh", x: "50%" }}
                    animate={{ opacity: 1, y: "-50%", x: "50%" }}
                    transition={{ delay: 1 }}
                >
                    <img src={burger} alt="contact" />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Contact;