import { useState } from 'react';
import { motion } from 'framer-motion';

function Toggle({ children, title }) {
    const [toggle, setToggle] = useState(false);

    return (
        <motion.div layout onClick={() => setToggle(!toggle)}>
            <motion.h4 layout>{title}</motion.h4>
            {toggle ? children : ''}
        </motion.div>
    );
}

export default Toggle;
