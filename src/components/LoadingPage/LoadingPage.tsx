import Lottie from 'react-lottie';
import animationData from '../../../public/loading/loading.json';

const LottieControl = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (<div><Lottie options={defaultOptions} height={280} width={280} /></div>);
};

export default LottieControl;
