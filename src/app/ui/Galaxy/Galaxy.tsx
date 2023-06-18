import styles from "./Galaxy.module.scss";
import Stars from "./Stars";

interface GalaxyProps {
  children: React.ReactNode;
}

export default function Galaxy({ children }: GalaxyProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.galaxy}>
        <Stars className={styles.stars} />
        {children}
      </div>
    </div>
  );
}
