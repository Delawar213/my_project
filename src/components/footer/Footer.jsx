import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Delawar</div>
      <div className={styles.text}>
        Delawar creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
