import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Deposit.module.css";

const Deposit: FunctionComponent = () => {
  const navigate = useNavigate();

  const onVuesaxbulklogoutIconClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onVuesaxbulkreceipt2IconClick = useCallback(() => {
    navigate("/transactions");
  }, [navigate]);

  const onVuesaxbulkprofile2userIconClick = useCallback(() => {
    navigate("/agents");
  }, [navigate]);

  const onVuesaxlineararrowDownIconClick = useCallback(() => {
    navigate("/dash");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/deposit");
  }, [navigate]);

  const onRectangleRectangle8Click = useCallback(() => {
    navigate("/transactions");
  }, [navigate]);

  const onRectangleRectangle14Click = useCallback(() => {
    navigate("/deposit");
  }, [navigate]);

  const onVuesaxlinearaddIconClick = useCallback(() => {
    navigate("/transactions");
  }, [navigate]);

  return (
    <div className={styles.depositDiv}>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.vuesaxbulklogoutIcon}
        alt=""
        src="../vuesaxbulklogout.svg"
        onClick={onVuesaxbulklogoutIconClick}
      />
      <img
        className={styles.vuesaxbulksetting2Icon}
        alt=""
        src="../vuesaxbulksetting21.svg"
      />
      <img
        className={styles.vuesaxbulkreceipt2Icon}
        alt=""
        src="../vuesaxbulkreceipt2.svg"
        onClick={onVuesaxbulkreceipt2IconClick}
      />
      <img
        className={styles.vuesaxbulkprofile2userIcon}
        alt=""
        src="../vuesaxbulkprofile2user1.svg"
        onClick={onVuesaxbulkprofile2userIconClick}
      />
      <img
        className={styles.vuesaxbulkcategoryIcon}
        alt=""
        src="../vuesaxbulkcategory8.svg"
      />
      <div className={styles.rectangleDiv1} />
      <div className={styles.logoDiv}>
        <div className={styles.frameDiv}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-12@2x.png"
          />
          <b className={styles.cynthiaKennethB}>Cynthia Kenneth</b>
        </div>
      </div>
      <div className={styles.rectangleDiv2} />
      <div className={styles.searchForTransactionsAgent}>
        Search for transactions, agents and stakers
      </div>
      <img
        className={styles.vuesaxlinearsearchNormalIcon}
        alt=""
        src="../vuesaxlinearsearchnormal.svg"
      />
      <img
        className={styles.bankmelogo2Icon}
        alt=""
        src="../bankmelogo-2@2x.png"
      />
      <div className={styles.groupDiv} onClick={onGroupContainerClick}>
        <div className={styles.backDiv}>back</div>
        <img
          className={styles.vuesaxlineararrowDownIcon}
          alt=""
          src="../vuesaxlineararrowdown6.svg"
          onClick={onVuesaxlineararrowDownIconClick}
        />
      </div>
      <div className={styles.rectangleDiv3} />
      <img className={styles.groupIcon} alt="" src="../group-35.svg" />
      <img className={styles.groupIcon1} alt="" src="../group-36.svg" />
      <div className={styles.totalBalanceDiv}>Total Balance</div>
      <div className={styles.div}>$2,302,340.00</div>
      <div className={styles.youCanFundYourAccountByT}>
        You can fund your account by transferring from any bank to the details
        below
      </div>
      <div className={styles.depositDiv1}>Deposit</div>
      <div className={styles.frameDiv1}>
        <div className={styles.emailphoneInputDiv}>
          <div className={styles.cardsDiv}>Cards</div>
          <div className={styles.rectangleDiv4} />
          <div className={styles.rectangleDiv5} />
        </div>
      </div>
      <div className={styles.btnDiv}>
        <div className={styles.rectangleDiv6} />
        <b className={styles.depositB}>Deposit</b>
        <img
          className={styles.vuesaxlineararrowRightIcon}
          alt=""
          src="../vuesaxlineararrowright.svg"
        />
      </div>
      <div className={styles.frameDiv2}>
        <div className={styles.passwordInputDiv}>
          <div className={styles.cardsDiv}>Amount</div>
          <div className={styles.rectangleDiv7} />
        </div>
      </div>
      <div
        className={styles.rectangleDiv8}
        onClick={onRectangleRectangle8Click}
      />
      <div className={styles.groupDiv1}>
        <div className={styles.rectangleDiv9} />
        <div className={styles.groupDiv2}>
          <div className={styles.passwordInputDiv1}>
            <div className={styles.rectangleDiv10} />
          </div>
          <div className={styles.passwordInputDiv2}>
            <div className={styles.rectangleDiv11} />
          </div>
          <div className={styles.passwordInputDiv3}>
            <div className={styles.rectangleDiv11} />
          </div>
          <div className={styles.passwordInputDiv4}>
            <div className={styles.rectangleDiv11} />
          </div>
        </div>
        <div className={styles.btnDiv1}>
          <div
            className={styles.rectangleDiv14}
            onClick={onRectangleRectangle14Click}
          />
          <b className={styles.submit}>Submit</b>
        </div>
        <img
          className={styles.vuesaxlinearaddIcon}
          alt=""
          src="../vuesaxlinearadd1.svg"
          onClick={onVuesaxlinearaddIconClick}
        />
        <div className={styles.lineDiv} />
      </div>
    </div>
  );
};

export default Deposit;
