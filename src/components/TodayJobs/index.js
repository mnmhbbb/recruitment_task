import { useCallback, useEffect, useState } from 'react';
import styles from './TodayJobs.module.scss';
import companyLogo from '../../assets/group-4.png';

function TodayJobs() {
  const [mouseOn, setMouseOn] = useState(false);

  const mouseHandler = useCallback(() => {
    console.log('마우스!');
    setMouseOn(!mouseOn);
  }, [mouseOn]);

  useEffect(() => {
    fetch(
      'https://9ka6d9cy9f.execute-api.ap-northeast-2.amazonaws.com/default/getYourcodeInterviewData',
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>오늘 올라온 잡</h2>
            <label>
              <input type="checkbox" />
              <span>Non-IT 잡만 보기</span>
            </label>
          </div>
          <ul className={styles.list}>
            <li onMouseEnter={mouseHandler} onMouseLeave={mouseHandler}>
              <img src={companyLogo} alt="company-logo" />
              <div className={styles.text}>
                <span className={styles.name}>Github</span>
                <h3 className={styles.position}>
                  시니어 마케팅 소프트웨어 엔지니어
                </h3>
                <ul className={styles.tags}>
                  <li>DevOps</li>
                  <li>QA</li>
                  <li>iOS</li>
                  <li>Android</li>
                  <li>Node</li>
                  <li>Management</li>
                  <li>UI/UX</li>
                </ul>
              </div>
              <p className={styles.date}>18h</p>
              {mouseOn ? (
                <button type="button" className={styles.btn}>
                  지원하기
                </button>
              ) : (
                <button type="button" className={styles.btnBefore}>
                  지원하기
                </button>
              )}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default TodayJobs;
