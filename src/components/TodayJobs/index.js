import { useEffect, useState } from 'react';
import JobList from '../JobList';
import styles from './TodayJobs.module.scss';

function TodayJobs() {
  const [todayJobs, setTodayJobs] = useState([]);

  useEffect(() => {
    fetch(
      'https://9ka6d9cy9f.execute-api.ap-northeast-2.amazonaws.com/default/getYourcodeInterviewData',
    )
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        setTodayJobs(value.todayJobs);
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
            {todayJobs.map((v, i) => (
              <JobList jobs={v} key={i} index={i} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default TodayJobs;
