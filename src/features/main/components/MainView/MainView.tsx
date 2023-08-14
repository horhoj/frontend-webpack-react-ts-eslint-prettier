import styles from './MainView.module.scss';
import supergirlImg from '~/assets/supergirl.png';

export function MainView() {
  console.log('click to check source map');

  return (
    <div className={styles.MainView}>
      <img src={supergirlImg} alt="supergirl" className={styles.img} />
    </div>
  );
}
