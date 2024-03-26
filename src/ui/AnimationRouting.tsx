import {motion} from "framer-motion";

const AnimateRouting = ({classes, children }) => {
    return <motion.main className={classes} 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ x: "100%", opacity: 0 }}
    transition={{duration: 0.7,ease: [0.6, -0.05, 0.01, 0.99]}}
    
    >
        {children}
    </motion.main>
}

export default AnimateRouting;