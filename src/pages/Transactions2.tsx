import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Transactions2.module.css";

const Transactions2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onVuesaxbulkreceipt2IconClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='rectangleRectangle']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onVuesaxbulkprofile2userIconClick = useCallback(() => {
    navigate("/agents");
  }, [navigate]);

  const onVuesaxbulkcategoryIconClick = useCallback(() => {
    navigate("/dash");
  }, [navigate]);

  const onVuesaxlineararrowDownIconClick = useCallback(() => {
    navigate("/dash");
  }, [navigate]);

  return (
    <div className={styles.transactionsDiv}>
      <div
        className={styles.rectangleDiv}
        data-scroll-to="rectangleRectangle"
      />
      <img
        className={styles.vuesaxbulklogoutIcon}
        alt=""
        src="../vuesaxbulklogout.svg"
      />
      <img
        className={styles.vuesaxbulksetting2Icon}
        alt=""
        src="../vuesaxbulksetting23.svg"
      />
      <img
        className={styles.vuesaxbulkreceipt2Icon}
        alt=""
        src="../vuesaxbulkreceipt21.svg"
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
        src="../vuesaxbulkcategory3.svg"
        onClick={onVuesaxbulkcategoryIconClick}
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
      <div className={styles.rectangleDiv3} />
      <div className={styles.searchForTransactionsAgent}>
        Search for transactions, agents and stakers
      </div>
      <div className={styles.searchForTransactions}>
        Search for transactions
      </div>
      <img
        className={styles.vuesaxlinearsearchNormalIcon}
        alt=""
        src="../vuesaxlinearsearchnormal.svg"
      />
      <img
        className={styles.vuesaxlinearsearchNormalIcon1}
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
      <div className={styles.rectangleDiv4} />
      <div className={styles.lineDiv} />
      <div className={styles.iDDiv}>ID</div>
      <div className={styles.typeDiv}>Type</div>
      <div className={styles.timeDateDiv}>Time/Date</div>
      <div className={styles.amountDiv}>Amount</div>
      <div className={styles.descriptionDiv}>Description</div>
      <div className={styles.frameDiv1}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv5} />
          <div className={styles.groupDiv2}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-10.svg"
          />
          <img
            className={styles.vuesaxbulkmoneySendIcon}
            alt=""
            src="../vuesaxbulkmoneysend10.svg"
          />
          <div className={styles.withdrawalDiv}>Withdrawal</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.bM234253464EDDiv}>BM234253464ED</div>
          <div className={styles.iWouldLikeToCollect}>
            I would like to collect...
          </div>
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv5} />
          <div className={styles.groupDiv2}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img className={styles.groupIcon} alt="" src="../group-648.svg" />
          <div className={styles.withdrawalDiv}>Withdrawal</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.bM234253464EDDiv}>BM234253464ED</div>
          <div className={styles.iWouldLikeToCollect}>
            I would like to collect...
          </div>
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv5} />
          <div className={styles.groupDiv2}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-10.svg"
          />
          <img
            className={styles.vuesaxbulkmoneySendIcon}
            alt=""
            src="../vuesaxbulkmoneysend11.svg"
          />
          <div className={styles.withdrawalDiv}>Withdrawal</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.bM234253464EDDiv}>BM234253464ED</div>
          <div className={styles.iWouldLikeToCollect}>
            I would like to collect...
          </div>
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv5} />
          <div className={styles.groupDiv2}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img className={styles.groupIcon} alt="" src="../group-648.svg" />
          <div className={styles.withdrawalDiv}>Withdrawal</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.bM234253464EDDiv}>BM234253464ED</div>
          <div className={styles.iWouldLikeToCollect}>
            I would like to collect...
          </div>
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv5} />
          <div className={styles.groupDiv2}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-10.svg"
          />
          <img
            className={styles.vuesaxbulkmoneySendIcon}
            alt=""
            src="../vuesaxbulkmoneysend12.svg"
          />
          <div className={styles.withdrawalDiv}>Withdrawal</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.bM234253464EDDiv}>BM234253464ED</div>
          <div className={styles.iWouldLikeToCollect}>
            I would like to collect...
          </div>
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv5} />
          <div className={styles.groupDiv2}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img className={styles.groupIcon} alt="" src="../group-648.svg" />
          <div className={styles.withdrawalDiv}>Withdrawal</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.bM234253464EDDiv}>BM234253464ED</div>
          <div className={styles.iWouldLikeToCollect}>
            I would like to collect...
          </div>
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv5} />
          <div className={styles.groupDiv2}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-10.svg"
          />
          <img
            className={styles.vuesaxbulkmoneySendIcon}
            alt=""
            src="../vuesaxbulkmoneysend13.svg"
          />
          <div className={styles.withdrawalDiv}>Withdrawal</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.bM234253464EDDiv}>BM234253464ED</div>
          <div className={styles.iWouldLikeToCollect}>
            I would like to collect...
          </div>
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv5} />
          <div className={styles.groupDiv2}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-10.svg"
          />
          <img
            className={styles.vuesaxbulkmoneySendIcon}
            alt=""
            src="../vuesaxbulkmoneysend14.svg"
          />
          <div className={styles.withdrawalDiv}>Withdrawal</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.bM234253464EDDiv}>BM234253464ED</div>
          <div className={styles.iWouldLikeToCollect}>
            I would like to collect...
          </div>
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv5} />
          <div className={styles.groupDiv2}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img className={styles.groupIcon} alt="" src="../group-64.svg" />
          <div className={styles.withdrawalDiv}>Withdrawal</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.bM234253464EDDiv}>BM234253464ED</div>
          <div className={styles.iWouldLikeToCollect}>
            I would like to collect...
          </div>
        </div>
      </div>
      <img className={styles.groupIcon4} alt="" src="../group-35.svg" />
      <img className={styles.groupIcon5} alt="" src="../group-36.svg" />
      <img className={styles.groupIcon6} alt="" src="../group-713.svg" />
      <div className={styles.groupDiv19}>
        <div className={styles.frameDiv2}>
          <div className={styles.nextDiv}>1</div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.nextDiv}>Next</div>
        </div>
        <div className={styles.div10}>2</div>
        <div className={styles.div11}>3</div>
        <div className={styles.div12}>4</div>
        <div className={styles.div13}>...</div>
      </div>
      <div className={styles.btnDiv}>
        <div className={styles.rectangleDiv14} />
        <b className={styles.downloadB}>Download</b>
      </div>
    </div>
  );
};

export default Transactions2;
