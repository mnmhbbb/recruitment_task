import styles from './ScrollTop.module.scss';
import arrowbtn from '../../assets/group-10.png';

function ScrollTop() {
  const scrollBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button type="button" className={styles.btn} onClick={scrollBtn}>
        <img src={arrowbtn} alt="scroll-to-top" />
      </button>
    </>
  );
}

export default ScrollTop;
