import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = (thresholdValue = 0.3) => {
    const animationControl = useAnimation();
    const [element, isElementVisible] = useInView({
        threshold: thresholdValue,
    });

    if (isElementVisible) {
        animationControl.start('visible');
    } else {
        animationControl.start('hidden');
    }

    return [element, animationControl];
};
