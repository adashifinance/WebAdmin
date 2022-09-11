import { FunctionComponent, useCallback } from "react";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  const onForgotPasswordTextClick = useCallback(() => {
    // Please sync "UU (Forgot password)" to the project
  }, []);

  return (
    <div className={styles.loginDiv}>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.bankmelogo2Icon}
        alt=""
        src="../bankmelogo-225@2x.png"
      />
      <div className={styles.logInDiv}>Log in</div>
      <div className={styles.frameDiv}>
        <div className={styles.emailphoneInputDiv}>
          <div className={styles.emailPhoneNumberDiv}>Email/Phone Number</div>
          <div className={styles.rectangleDiv1} />
        </div>
        <div className={styles.passwordInputDiv}>
          <div className={styles.emailPhoneNumberDiv}>Password</div>
          <div className={styles.rectangleDiv2} />
          <img
            className={styles.vuesaxlineareyeIcon}
            alt=""
            src="../vuesaxlineareye.svg"
          />
        </div>
      </div>
      <div className={styles.btnDiv}>
        <div className={styles.rectangleDiv3} />
        <b className={styles.logInB}>Log In</b>
        <img
          className={styles.vuesaxlineararrowRightIcon}
          alt=""
          src="../vuesaxlineararrowright9.svg"
        />
      </div>
      <div
        className={styles.forgotPasswordDiv}
        onClick={onForgotPasswordTextClick}
      >
        Forgot Password?
      </div>
    </div>
  );
};

export default Login;
