import { useEffect, useState } from 'react';
import JobList from '../JobList';
import styles from './WeeklyJobs.module.scss';

function WeeklyJobs() {
  const [weeklyJobs, setWeeklyJobs] = useState([]);

  useEffect(() => {
    fetch(
      'https://9ka6d9cy9f.execute-api.ap-northeast-2.amazonaws.com/default/getYourcodeInterviewData',
    )
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        setWeeklyJobs(value.weeklyJobs);
      });
  }, []);

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>이번주 올라온 잡</h2>
          </div>
          <ul className={styles.list}>
            {weeklyJobs.map((v, i) => (
              <JobList jobs={v} key={i} index={i} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default WeeklyJobs;
