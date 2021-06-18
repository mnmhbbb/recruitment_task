import styles from './Main.module.scss';
import logo from '../../assets/remoters.png';
import logo2 from '../../assets/remoters@3x.png';
import search from '../../assets/search.png';
import wfh from '../../assets/wfh-1.png';
import { useCallback } from 'react';

function Main() {
  const searchBtn = useCallback(() => {
    alert('검색 버튼 눌림');
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="logo" />
        </a>
        <button type="button" className={styles.btn}>
          회사 등록하기
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1>
            <img src={logo2} alt="title" />
          </h1>
          <p>[명사] 시간과 공간의 제약을 받지않고 일하는 사람</p>
          <form>
            <input type="text" />
            <button type="submit" onClick={searchBtn}>
              <img src={search} alt="search-icon" />
            </button>
          </form>
        </div>
        <div class={styles.right}>
          <img src={wfh} alt="work-from-home" />
        </div>
      </div>
    </div>
  );
}

export default Main;
