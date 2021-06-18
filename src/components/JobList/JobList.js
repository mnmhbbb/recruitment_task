import { useCallback } from 'react';
import companyLogo from '../../assets/group-4.png';
import styles from './JobList.module.scss';

function JobList({ jobs }) {
  const dateCheck = useCallback((value) => {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue) / 1000 / 60);
    if (betweenTime < 60) {
      return `${betweenTime}m`;
    }

    const betweenHour = Math.floor(betweenTime / 60);
    if (betweenHour < 24) {
      return `${betweenHour}h`;
    }

    const betweenDay = Math.floor(betweenTime / 60 / 24);
    if (betweenDay < 365) {
      return `${betweenDay}d`;
    }
  }, []);

  return (
    <>
      <li>
        <div className={styles.beforeClick}>
          <img src={companyLogo} alt="company-logo" />
          <div className={styles.text}>
            <span className={styles.name}>{jobs.name}</span>
            <h3 className={styles.position}>{jobs.position}</h3>
            <ul className={styles.tags}>
              {jobs.tags.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
          <p className={styles.date}>{dateCheck(jobs.date)}</p>
          <button type="button" className={styles.btn}>
            지원하기
          </button>
        </div>
        <div className={styles.contents}>
          <p>{jobs.contents}</p>
        </div>
      </li>
    </>
  );
}

export default JobList;
