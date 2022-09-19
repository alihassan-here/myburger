import React from 'react';
import { motion } from "framer-motion"


const Home = () => {
    const option = {
        initial: {
            x: "-100%",
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        }
    }
    return (
        <section className='home'>
            <div className="">
                <motion.h1
                    {...option}
                >My Burger</motion.h1>
                <motion.p
                    {...option}
                    transition={{ delay: 0.2 }}
                >Give yourself a tasty burger.</motion.p>
            </div>
            <motion.a href="#menu"
                initial={{ y: "-100%", opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{ delay: 0.2 }}
            >
                Explore Menu
            </motion.a>
        </section>
    )
}

export default Home;