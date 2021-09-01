export const pageTransitionAnim = {
    hidden: {
        opacity: 0,
        y: 75,
        // scale: 0.9,
    },
    visible: {
        opacity: 1,
        y: 0,
        // scale: 1,
        transition: {
            duration: 0.5,
            when: 'beforeChildren',
            staggerChildren: 0.25,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const titleAnim = {
    hidden: {
        y: 200,
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: 'easeOut',
        },
    },
};

export const fadeAnim = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.75,
            ease: 'easeOut',
        },
    },
};

export const imageAnim = {
    hidden: {
        scale: 1.5,
        opacity: 0,
        transition: {
            duration: 0.75,
        },
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.75,
            ease: 'easeOut',
        },
    },
};

export const waveAnim = {
    hidden: {
        pathLength: 0,
        pathOffset: 1,
    },
    visible: {
        pathLength: 1,
        pathOffset: 0,
        transition: {
            duration: 2,
        },
    },
};

export const lineAnim = {
    hidden: {
        width: '0%',
        transition: {
            duration: 1,
        },
    },
    visible: {
        width: '100%',
        transition: {
            duration: 1,
        },
    },
};

export const sliderAnim = {
    hidden: {
        x: '-130%',
        skew: '45deg',
    },
    visible: {
        x: '100%',
        skew: '0deg',
        transition: {
            duration: 1,
            ease: 'easeOut',
        },
    },
};

export const sliderContainerAnim = {
    hidden: {
        opacity: 1,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            ease: 'easeOut',
        },
    },
};

export const scrollRevealAnim = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        transition: {
            duration: 0.75,
        },
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.75,
            // ease: 'easeOut'
        },
    },
};
