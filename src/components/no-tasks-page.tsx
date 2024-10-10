import styles from './styles.module.scss';
import cn from 'classnames';

export const NoTasksPage = () => (
  <div className={styles.o404}>
    <p className={styles.amessage}>{'Здесь пока нет задачек :)'}</p>
    <div className={styles.ocat}>
      <div className={styles.mears}>
        <div className={cn(styles.mear, styles.right)} />
        <div className={cn(styles.mear, styles.left)} />
      </div>
      <div className={styles.mface}>
        <div className={styles.meyes}>
          <div className={cn(styles.meye, styles.left)}>
            <div className={styles.aeyePupil} />
          </div>
          <div className={cn(styles.meye, styles.right)}>
            <div className={styles.aeyePupil} />
          </div>
        </div>
        <div className={styles.mnose} />
      </div>
    </div>
  </div>
);
