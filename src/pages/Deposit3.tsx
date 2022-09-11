import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Deposit3.module.css";

const Deposit3: FunctionComponent = () => {
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

  const onGroupContainer1Click = useCallback(() => {
    navigate("/deposit2");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/deposit3");
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
        src="../vuesaxbulksetting23.svg"
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
        src="../vuesaxbulkprofile2user3.svg"
        onClick={onVuesaxbulkprofile2userIconClick}
      />
      <img
        className={styles.vuesaxbulkcategoryIcon}
        alt=""
        src="../vuesaxbulkcategory17.svg"
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
      <div className={styles.groupDiv}>
        <div className={styles.backDiv}>back</div>
        <img
          className={styles.vuesaxlineararrowDownIcon}
          alt=""
          src="../vuesaxlineararrowdown2.svg"
          onClick={onVuesaxlineararrowDownIconClick}
        />
      </div>
      <div className={styles.rectangleDiv3} />
      <img className={styles.groupIcon} alt="" src="../group-35.svg" />
      <img className={styles.groupIcon1} alt="" src="../group-36.svg" />
      <div className={styles.totalBalanceDiv}>Total Balance</div>
      <div className={styles.div}>$2,302,340.00</div>
      <div className={styles.frameDiv1}>
        <div className={styles.groupDiv1} onClick={onGroupContainer1Click}>
          <div className={styles.rectangleDiv4} />
          <div className={styles.rectangleDiv5} />
          <img
            className={styles.vuesaxlineararrowRightIcon}
            alt=""
            src="../vuesaxlineararrowright6.svg"
          />
          <div className={styles.bankTransferDiv}>Bank transfer</div>
          <div className={styles.depositMoneyByUsingYourBa}>
            Deposit money by using your bank
          </div>
          <div className={styles.rectangleDiv6} />
          <img
            className={styles.vuesaxbulkbankIcon}
            alt=""
            src="../vuesaxbulkbank.svg"
          />
        </div>
        <div className={styles.groupDiv1} onClick={onGroupContainer2Click}>
          <div className={styles.rectangleDiv4} />
          <div className={styles.rectangleDiv5} />
          <img
            className={styles.vuesaxlineararrowRightIcon}
            alt=""
            src="../vuesaxlineararrowright6.svg"
          />
          <div className={styles.bankTransferDiv}>Card</div>
          <div className={styles.depositMoneyByUsingYourBa}>
            Deposit money by using card
          </div>
          <div className={styles.rectangleDiv6} />
          <img
            className={styles.vuesaxbulkbankIcon}
            alt=""
            src="../vuesaxbulkcards.svg"
          />
        </div>
      </div>
      <div className={styles.depositDiv1}>Deposit</div>
    </div>
  );
};

export default Deposit3;
