import { FunctionComponent, useCallback } from "react";
import styles from "./ForgotPassword1.module.css";

const ForgotPassword1: FunctionComponent = () => {
  const onAlreadyHaveAnClick = useCallback(() => {
    // Please sync "UU (Forgot password)" to the project
  }, []);

  return (
    <div className={styles.forgotPasswordDiv}>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.bankmelogo2Icon}
        alt=""
        src="../bankmelogo-225@2x.png"
      />
      <div className={styles.forgotPasswordDiv1}>Forgot Password</div>
      <div className={styles.frameDiv}>
        <div className={styles.emailphoneInputDiv}>
          <div className={styles.emailPhoneNumberDiv}>Email/Phone Number</div>
          <div className={styles.rectangleDiv1} />
        </div>
      </div>
      <div className={styles.btnDiv}>
        <div className={styles.rectangleDiv2} />
        <b className={styles.logInB}>Log In</b>
        <img
          className={styles.vuesaxlineararrowRightIcon}
          alt=""
          src="../vuesaxlineararrowright9.svg"
        />
      </div>
      <div
        className={styles.alreadyHaveAnAccountLogI}
        onClick={onAlreadyHaveAnClick}
      >{`Already have an account? Log in `}</div>
    </div>
  );
};

export default ForgotPassword1;
