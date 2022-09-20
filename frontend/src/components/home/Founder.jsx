import React from 'react';
import { motion } from "framer-motion";
import me from '../../assets/me.png';

const Founder = () => {
    const options = {
        initial: {
            opacity: 0,
            x: "-100%"
        },
        whileInView: {
            opacity: 1,
            x: 0
        }
    }
    return (
        <section className='founder'>
            <motion.div {...options}>
                <h1>Founder</h1>
                <img src={me} alt="founder" height={200} width={200} />
                <h3>Ali Hassan</h3>
                <p>Hey, everyone Im Ali Hassan, the founder of My Burger.{" "}
                    <br />
                    Our aim is to provide the best burgers in the world.{" "}

                </p>
            </motion.div>
        </section>
    )
}

export default Founder;