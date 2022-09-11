import { FunctionComponent, useCallback } from "react";
import styles from "./ForgotPassword.module.css";

const ForgotPassword: FunctionComponent = () => {
  const onBtnContainerClick = useCallback(() => {
    // Please sync "UU (Login)" to the project
  }, []);

  return (
    <div className={styles.forgotPasswordDiv}>
      <div className={styles.rectangleDiv} />
      <div className={styles.btnDiv} onClick={onBtnContainerClick}>
        <div className={styles.rectangleDiv1} />
        <b className={styles.backToLogIn}>Back to Log in</b>
        <img
          className={styles.vuesaxlineararrowRightIcon}
          alt=""
          src="../vuesaxlineararrowright2.svg"
        />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv2} />
        <div className={styles.groupDiv1}>
          <div className={styles.checkEmailForNewDetails}>
            Check email for new details
          </div>
        </div>
      </div>
      <img
        className={styles.bankmelogo2Icon}
        alt=""
        src="../bankmelogo-225@2x.png"
      />
    </div>
  );
};

export default ForgotPassword;
