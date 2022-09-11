import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dash.module.css";

const Dash: FunctionComponent = () => {
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

  const onGroupContainerClick = useCallback(() => {
    navigate("/dash-expansion");
  }, [navigate]);

  const onGroupContainer24Click = useCallback(() => {
    navigate("/deposit");
  }, [navigate]);

  const onGroupContainer25Click = useCallback(() => {
    navigate("/withdraw");
  }, [navigate]);

  return (
    <div className={styles.dashDiv}>
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
        src="../vuesaxbulksetting23.svg"
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
        src="../vuesaxbulkprofile2user12.svg"
        onClick={onVuesaxbulkprofile2userIconClick}
      />
      <img
        className={styles.vuesaxbulkcategoryIcon}
        alt=""
        src="../vuesaxbulkcategory27.svg"
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
      <div className={styles.dashboardDiv}>Dashboard</div>
      <div className={styles.recentTransactionsDiv}>Recent Transactions</div>
      <div className={styles.notificationsDiv}>Notifications</div>
      <div className={styles.quickActionsDiv}>Quick actions</div>
      <div className={styles.frameDiv1}>
        <div className={styles.groupDiv} onClick={onGroupContainerClick}>
          <div className={styles.rectangleDiv3} />
          <img className={styles.groupIcon} alt="" src="../group-55.svg" />
          <img className={styles.groupIcon1} alt="" src="../group-544.svg" />
          <div className={styles.totalBalanceDiv}>Total Balance</div>
          <div className={styles.from1Jan2022}>From 1 Jan 2022</div>
          <div className={styles.div}>$2,302,340.00</div>
          <div className={styles.lineDiv} />
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv3} />
          <img className={styles.groupIcon} alt="" src="../group-551.svg" />
          <img className={styles.groupIcon1} alt="" src="../group-545.svg" />
          <div className={styles.totalBalanceDiv}>Total Transactions</div>
          <div className={styles.from1Jan20221}>From 1 Jan 2022</div>
          <div className={styles.div1}>$2,302,340.00</div>
          <div className={styles.lineDiv} />
        </div>
        <div className={styles.groupDiv2}>
          <div className={styles.rectangleDiv3} />
          <img className={styles.groupIcon} alt="" src="../group-552.svg" />
          <img className={styles.groupIcon1} alt="" src="../group-546.svg" />
          <div className={styles.totalEarningsDiv}>Total Earnings</div>
          <div className={styles.from1Jan2022}>From 1 Jan 2022</div>
          <div className={styles.div}>$2,302,340.00</div>
          <div className={styles.lineDiv} />
        </div>
        <div className={styles.groupDiv2}>
          <div className={styles.rectangleDiv3} />
          <img className={styles.groupIcon} alt="" src="../group-553.svg" />
          <img className={styles.groupIcon1} alt="" src="../group-547.svg" />
          <div className={styles.totalStakingsDiv}>Total Stakings</div>
          <div className={styles.from1Jan2022}>From 1 Jan 2022</div>
          <div className={styles.div}>$2,302,340.00</div>
          <div className={styles.lineDiv} />
        </div>
      </div>
      <div className={styles.rectangleDiv7} />
      <div className={styles.rectangleDiv8} />
      <div className={styles.frameDiv2}>
        <div className={styles.groupDiv4}>
          <div className={styles.systemDowntimeDiv}>System Downtime</div>
          <div className={styles.pMDiv}>2:34PM</div>
          <div className={styles.thFeb22}>6th Feb ‘22</div>
          <div className={styles.rectangleDiv9} />
          <img
            className={styles.vuesaxbulkelectricityIcon}
            alt=""
            src="../vuesaxbulkelectricity.svg"
          />
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.withdrawalSuccessfulDiv}>
            Withdrawal Successful
          </div>
          <div className={styles.pMDiv}>2:34PM</div>
          <div className={styles.thFeb22}>6th Feb ‘22</div>
          <div className={styles.rectangleDiv10} />
          <img
            className={styles.vuesaxbulkmoneySendIcon}
            alt=""
            src="../vuesaxbulkmoneysend51.svg"
          />
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.systemDowntimeDiv}>Stakings Succesful</div>
          <div className={styles.pMDiv}>2:34PM</div>
          <div className={styles.thFeb22}>6th Feb ‘22</div>
          <div className={styles.rectangleDiv11} />
          <img
            className={styles.vuesaxbulkmoneySendIcon}
            alt=""
            src="../vuesaxbulkmoneyrecive6.svg"
          />
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.withdrawalSuccessfulDiv}>
            Withdrawal Successful
          </div>
          <div className={styles.pMDiv}>2:34PM</div>
          <div className={styles.thFeb22}>6th Feb ‘22</div>
          <div className={styles.rectangleDiv10} />
          <img
            className={styles.vuesaxbulkmoneySendIcon}
            alt=""
            src="../vuesaxbulkmoneysend51.svg"
          />
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.systemDowntimeDiv}>Stakings Succesful</div>
          <div className={styles.pMDiv}>2:34PM</div>
          <div className={styles.thFeb22}>6th Feb ‘22</div>
          <div className={styles.rectangleDiv11} />
          <img
            className={styles.vuesaxbulkmoneySendIcon}
            alt=""
            src="../vuesaxbulkmoneyrecive6.svg"
          />
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.withdrawalSuccessfulDiv}>
            Withdrawal Successful
          </div>
          <div className={styles.pMDiv}>2:34PM</div>
          <div className={styles.thFeb22}>6th Feb ‘22</div>
          <div className={styles.rectangleDiv10} />
          <img
            className={styles.vuesaxbulkmoneySendIcon}
            alt=""
            src="../vuesaxbulkmoneysend51.svg"
          />
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.systemDowntimeDiv}>System Downtime</div>
          <div className={styles.pMDiv}>2:34PM</div>
          <div className={styles.thFeb22}>6th Feb ‘22</div>
          <div className={styles.rectangleDiv9} />
          <img
            className={styles.vuesaxbulkelectricityIcon}
            alt=""
            src="../vuesaxbulkelectricity.svg"
          />
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.withdrawalSuccessfulDiv}>
            Withdrawal Successful
          </div>
          <div className={styles.pMDiv}>2:34PM</div>
          <div className={styles.thFeb22}>6th Feb ‘22</div>
          <div className={styles.rectangleDiv10} />
          <img
            className={styles.vuesaxbulkmoneySendIcon}
            alt=""
            src="../vuesaxbulkmoneysend51.svg"
          />
        </div>
      </div>
      <div className={styles.lineDiv4} />
      <div className={styles.iDDiv}>ID</div>
      <div className={styles.typeDiv}>Type</div>
      <div className={styles.timeDateDiv}>Time/Date</div>
      <div className={styles.amountDiv}>Amount</div>
      <div className={styles.descriptionDiv}>Description</div>
      <div className={styles.thFeb228}>6th Feb ‘22</div>
      <div className={styles.viewAllDiv}>View All</div>
      <div className={styles.frameDiv3}>
        <div className={styles.groupDiv12}>
          <div className={styles.rectangleDiv17} />
          <div className={styles.groupDiv13}>
            <div className={styles.pMDiv8}>2:34PM</div>
            <div className={styles.thFeb229}>6th Feb ‘22</div>
            <div className={styles.lineDiv5} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-10.svg"
          />
          <img
            className={styles.vuesaxbulkmoneySendIcon4}
            alt=""
            src="../vuesaxbulkmoneysend55.svg"
          />
          <div className={styles.withdrawalDiv}>Withdrawal</div>
          <div className={styles.div4}>$21,000.50</div>
          <div className={styles.bM234253464EDDiv}>BM234253464ED</div>
          <div className={styles.iWouldLikeToCollect}>
            I would like to collect...
          </div>
        </div>
        <div className={styles.groupDiv12}>
          <div className={styles.rectangleDiv17} />
          <div className={styles.groupDiv13}>
            <div className={styles.pMDiv8}>2:34PM</div>
            <div className={styles.thFeb229}>6th Feb ‘22</div>
            <div className={styles.lineDiv5} />
          </div>
          <img className={styles.groupIcon8} alt="" src="../group-6436.svg" />
          <div className={styles.withdrawalDiv}>Withdrawal</div>
          <div className={styles.div4}>$21,000.50</div>
          <div className={styles.bM234253464EDDiv}>BM234253464ED</div>
          <div className={styles.iWouldLikeToCollect}>
            I would like to collect...
          </div>
        </div>
        <div className={styles.groupDiv12}>
          <div className={styles.rectangleDiv17} />
          <div className={styles.groupDiv13}>
            <div className={styles.pMDiv8}>2:34PM</div>
            <div className={styles.thFeb229}>6th Feb ‘22</div>
            <div className={styles.lineDiv5} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-10.svg"
          />
          <img
            className={styles.vuesaxbulkmoneySendIcon4}
            alt=""
            src="../vuesaxbulkmoneysend56.svg"
          />
          <div className={styles.withdrawalDiv}>Withdrawal</div>
          <div className={styles.div4}>$21,000.50</div>
          <div className={styles.bM234253464EDDiv}>BM234253464ED</div>
          <div className={styles.iWouldLikeToCollect}>
            I would like to collect...
          </div>
        </div>
        <div className={styles.groupDiv12}>
          <div className={styles.rectangleDiv17} />
          <div className={styles.groupDiv13}>
            <div className={styles.pMDiv8}>2:34PM</div>
            <div className={styles.thFeb229}>6th Feb ‘22</div>
            <div className={styles.lineDiv5} />
          </div>
          <img className={styles.groupIcon8} alt="" src="../group-6436.svg" />
          <div className={styles.withdrawalDiv}>Withdrawal</div>
          <div className={styles.div4}>$21,000.50</div>
          <div className={styles.bM234253464EDDiv}>BM234253464ED</div>
          <div className={styles.iWouldLikeToCollect}>
            I would like to collect...
          </div>
        </div>
        <div className={styles.groupDiv12}>
          <div className={styles.rectangleDiv17} />
          <div className={styles.groupDiv13}>
            <div className={styles.pMDiv8}>2:34PM</div>
            <div className={styles.thFeb229}>6th Feb ‘22</div>
            <div className={styles.lineDiv5} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-10.svg"
          />
          <img
            className={styles.vuesaxbulkmoneySendIcon4}
            alt=""
            src="../vuesaxbulkmoneysend57.svg"
          />
          <div className={styles.withdrawalDiv}>Withdrawal</div>
          <div className={styles.div4}>$21,000.50</div>
          <div className={styles.bM234253464EDDiv}>BM234253464ED</div>
          <div className={styles.iWouldLikeToCollect}>
            I would like to collect...
          </div>
        </div>
        <div className={styles.groupDiv12}>
          <div className={styles.rectangleDiv17} />
          <div className={styles.groupDiv13}>
            <div className={styles.pMDiv8}>2:34PM</div>
            <div className={styles.thFeb229}>6th Feb ‘22</div>
            <div className={styles.lineDiv5} />
          </div>
          <img className={styles.groupIcon8} alt="" src="../group-6436.svg" />
          <div className={styles.withdrawalDiv}>Withdrawal</div>
          <div className={styles.div4}>$21,000.50</div>
          <div className={styles.bM234253464EDDiv}>BM234253464ED</div>
          <div className={styles.iWouldLikeToCollect}>
            I would like to collect...
          </div>
        </div>
      </div>
      <img className={styles.groupIcon11} alt="" src="../group-35.svg" />
      <img className={styles.groupIcon12} alt="" src="../group-36.svg" />
      <div className={styles.groupDiv24} onClick={onGroupContainer24Click}>
        <div className={styles.rectangleDiv23} />
        <div className={styles.depositDiv}>Deposit</div>
      </div>
      <div className={styles.groupDiv25} onClick={onGroupContainer25Click}>
        <div className={styles.rectangleDiv24} />
        <div className={styles.withdrawDiv}>Withdraw</div>
      </div>
    </div>
  );
};

export default Dash;
