import companyLogo from '../../assets/group-4.png';
import styles from './JobList.module.scss';

function JobList({ jobs }) {
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
          <p className={styles.date}>{jobs.date}</p>
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
