const pageVariants = {
    initial: {
        opacity: 0,
        x: "50vw",
        scale: 0.8,
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1,
    },
    out: {
        opacity: 0,
        x: "-50vw",
        scale: 1,
    },
};

const pageTransition = {
    x: { type: "tween" },
    ease: "anticipate",
    staggerChildren: 0.3,
    staggerDirection: 1,
};

const childVariants = {
    initial: {
        opacity: 0,
        x: "50px",
    },
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: "-20vw",
    },
};

const cardVariants = {
    initial: {
        opacity: 0,
        y: "100vh",
        scale: 0.8,
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1,
    },
    out: {
        opacity: 0,
        y: "-50vh",
        scale: 1,
    },
};

export default pageVariants;

export { pageTransition, childVariants, cardVariants };
