import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DashExpansion1.module.css";

const DashExpansion1: FunctionComponent = () => {
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
    navigate("/savers");
  }, [navigate]);

  const onVuesaxlineararrowDownIcon1Click = useCallback(() => {
    navigate("/dash");
  }, [navigate]);

  return (
    <div className={styles.dashExpansionDiv}>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.vuesaxbulklogoutIcon}
        alt=""
        src="../vuesaxbulklogout11.svg"
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
        src="../vuesaxbulkreceipt210.svg"
        onClick={onVuesaxbulkreceipt2IconClick}
      />
      <img
        className={styles.vuesaxbulkprofile2userIcon}
        alt=""
        src="../vuesaxbulkprofile2user11.svg"
        onClick={onVuesaxbulkprofile2userIconClick}
      />
      <img
        className={styles.vuesaxbulkcategoryIcon}
        alt=""
        src="../vuesaxbulkcategory11.svg"
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
        <div className={styles.rectangleDiv3} />
        <img className={styles.groupIcon} alt="" src="../group-541.svg" />
        <div className={styles.totalBalanceDiv}>Total Balance</div>
        <div className={styles.rectangleDiv4} />
        <img
          className={styles.vuesaxlineararrowDownIcon}
          alt=""
          src="../vuesaxlineararrowdown10.svg"
          onClick={onVuesaxlineararrowDownIconClick}
        />
      </div>
      <img className={styles.groupIcon1} alt="" src="../group-35.svg" />
      <img className={styles.groupIcon2} alt="" src="../group-36.svg" />
      <div className={styles.groupDiv1}>
        <div className={styles.backDiv}>back</div>
        <img
          className={styles.vuesaxlineararrowDownIcon1}
          alt=""
          src="../vuesaxlineararrowdown6.svg"
          onClick={onVuesaxlineararrowDownIcon1Click}
        />
      </div>
      <img className={styles.groupIcon3} alt="" src="../group-74.svg" />
      <div className={styles.monthDiv}>Month</div>
      <div className={styles.frameDiv1}>
        <div className={styles.cynthiaKennethB}>Jan</div>
        <div className={styles.cynthiaKennethB}>Feb</div>
        <div className={styles.cynthiaKennethB}>Mar</div>
        <div className={styles.cynthiaKennethB}>Apr</div>
        <div className={styles.cynthiaKennethB}>May</div>
        <div className={styles.cynthiaKennethB}>Jun</div>
        <div className={styles.cynthiaKennethB}>Jul</div>
        <div className={styles.cynthiaKennethB}>Aug</div>
        <div className={styles.cynthiaKennethB}>Sep</div>
        <div className={styles.cynthiaKennethB}>Oct</div>
        <div className={styles.cynthiaKennethB}>Nov</div>
        <div className={styles.cynthiaKennethB}>Dec</div>
      </div>
      <div className={styles.frameDiv2}>
        <div className={styles.cynthiaKennethB}>900,000</div>
        <div className={styles.cynthiaKennethB}>800,000</div>
        <div className={styles.cynthiaKennethB}>700,000</div>
        <div className={styles.cynthiaKennethB}>600,000</div>
        <div className={styles.cynthiaKennethB}>500,000</div>
        <div className={styles.cynthiaKennethB}>400,000</div>
        <div className={styles.cynthiaKennethB}>300,000</div>
        <div className={styles.cynthiaKennethB}>200,000</div>
        <div className={styles.cynthiaKennethB}>100,000</div>
        <div className={styles.cynthiaKennethB}>0</div>
      </div>
      <img className={styles.vectorIcon} alt="" src="../vector-31.svg" />
      <img className={styles.vectorIcon1} alt="" src="../vector-41.svg" />
      <div className={styles.frameDiv3}>
        <div className={styles.lineDiv} />
        <div className={styles.lineDiv} />
        <div className={styles.lineDiv} />
        <div className={styles.lineDiv} />
        <div className={styles.lineDiv} />
        <div className={styles.lineDiv} />
        <div className={styles.lineDiv} />
        <div className={styles.lineDiv} />
        <div className={styles.lineDiv} />
        <div className={styles.lineDiv} />
        <div className={styles.lineDiv} />
        <div className={styles.lineDiv} />
      </div>
      <img className={styles.ellipseIcon} alt="" src="../ellipse-44.svg" />
      <img className={styles.ellipseIcon1} alt="" src="../ellipse-44.svg" />
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-44.svg" />
      <img className={styles.ellipseIcon3} alt="" src="../ellipse-44.svg" />
      <img className={styles.ellipseIcon4} alt="" src="../ellipse-44.svg" />
      <img className={styles.ellipseIcon5} alt="" src="../ellipse-44.svg" />
      <img className={styles.ellipseIcon6} alt="" src="../ellipse-44.svg" />
      <img className={styles.ellipseIcon7} alt="" src="../ellipse-44.svg" />
      <img className={styles.ellipseIcon8} alt="" src="../ellipse-44.svg" />
      <img className={styles.ellipseIcon9} alt="" src="../ellipse-44.svg" />
      <img className={styles.ellipseIcon10} alt="" src="../ellipse-44.svg" />
      <img className={styles.ellipseIcon11} alt="" src="../ellipse-44.svg" />
    </div>
  );
};

export default DashExpansion1;
