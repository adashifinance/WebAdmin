import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Agents2.module.css";

const Agents2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onVuesaxbulkreceipt2IconClick = useCallback(() => {
    navigate("/transactions");
  }, [navigate]);

  const onVuesaxbulkcategoryIconClick = useCallback(() => {
    navigate("/dash");
  }, [navigate]);

  const onVuesaxlineararrowDownIconClick = useCallback(() => {
    navigate("/savers");
  }, [navigate]);

  return (
    <div className={styles.agentsDiv}>
      <div className={styles.rectangleDiv} />
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
        src="../vuesaxbulkreceipt2.svg"
        onClick={onVuesaxbulkreceipt2IconClick}
      />
      <img
        className={styles.vuesaxbulkprofile2userIcon}
        alt=""
        src="../vuesaxbulkprofile2user14.svg"
      />
      <img
        className={styles.vuesaxbulkcategoryIcon}
        alt=""
        src="../vuesaxbulkcategory24.svg"
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
      <div className={styles.agentsDiv1}>Agents</div>
      <div className={styles.rectangleDiv3} />
      <div className={styles.lineDiv} />
      <div className={styles.iDDiv}>ID</div>
      <div className={styles.fullNameDiv}>Full name</div>
      <div className={styles.dateAndTimeCreated}>Date and time created</div>
      <div className={styles.currentBalanceDiv}>Current Balance</div>
      <div className={styles.phoneNumberDiv}>Phone number</div>
      <div className={styles.frameDiv1}>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv4} />
          <div className={styles.groupDiv1}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-10.svg"
          />
          <div className={styles.aJDiv}>AJ</div>
          <div className={styles.adamJosephDiv}>Adam Joseph</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.div1}>08134592343</div>
          <div className={styles.div2}>081257334468</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv4} />
          <div className={styles.groupDiv1}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-10.svg"
          />
          <div className={styles.aJDiv}>AJ</div>
          <div className={styles.adamJosephDiv}>Adam Joseph</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.div1}>08134592343</div>
          <div className={styles.div2}>081257334468</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.groupDiv1}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-102.svg"
          />
          <div className={styles.aJDiv}>AJ</div>
          <div className={styles.adamJosephDiv}>Adam Joseph</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.div1}>08134592343</div>
          <div className={styles.div2}>081257334468</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv4} />
          <div className={styles.groupDiv1}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-10.svg"
          />
          <div className={styles.aJDiv}>AJ</div>
          <div className={styles.adamJosephDiv}>Adam Joseph</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.div1}>08134592343</div>
          <div className={styles.div2}>081257334468</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv4} />
          <div className={styles.groupDiv1}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-10.svg"
          />
          <div className={styles.aJDiv}>AJ</div>
          <div className={styles.adamJosephDiv}>Adam Joseph</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.div1}>08134592343</div>
          <div className={styles.div2}>081257334468</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv4} />
          <div className={styles.groupDiv1}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-10.svg"
          />
          <div className={styles.aJDiv}>AJ</div>
          <div className={styles.adamJosephDiv}>Adam Joseph</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.div1}>08134592343</div>
          <div className={styles.div2}>081257334468</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.groupDiv1}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-102.svg"
          />
          <div className={styles.aJDiv}>AJ</div>
          <div className={styles.adamJosephDiv}>Adam Joseph</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.div1}>08134592343</div>
          <div className={styles.div2}>081257334468</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv4} />
          <div className={styles.groupDiv1}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-10.svg"
          />
          <div className={styles.aJDiv}>AJ</div>
          <div className={styles.adamJosephDiv}>Adam Joseph</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.div1}>08134592343</div>
          <div className={styles.div2}>081257334468</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv6} />
          <div className={styles.groupDiv1}>
            <div className={styles.pMDiv}>2:34PM</div>
            <div className={styles.thFeb22}>6th Feb ‘22</div>
            <div className={styles.lineDiv1} />
          </div>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-102.svg"
          />
          <div className={styles.aJDiv}>AJ</div>
          <div className={styles.adamJosephDiv}>Adam Joseph</div>
          <div className={styles.div}>$21,000.50</div>
          <div className={styles.div1}>08134592343</div>
          <div className={styles.div2}>081257334468</div>
        </div>
      </div>
      <img className={styles.groupIcon} alt="" src="../group-35.svg" />
      <img className={styles.groupIcon1} alt="" src="../group-36.svg" />
      <div className={styles.groupDiv18}>
        <div className={styles.frameDiv2}>
          <div className={styles.nextDiv}>1</div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.nextDiv}>Next</div>
        </div>
        <div className={styles.div28}>2</div>
        <div className={styles.div29}>3</div>
        <div className={styles.div30}>4</div>
        <div className={styles.div31}>...</div>
      </div>
      <img
        className={styles.vuesaxlineararrowDownIcon}
        alt=""
        src="../vuesaxlineararrowdown28.svg"
        onClick={onVuesaxlineararrowDownIconClick}
      />
      <div className={styles.rectangleDiv13} />
      <div className={styles.searchForTransactions}>
        Search for transactions
      </div>
      <img
        className={styles.vuesaxlinearsearchNormalIcon1}
        alt=""
        src="../vuesaxlinearsearchnormal.svg"
      />
      <img className={styles.groupIcon2} alt="" src="../group-713.svg" />
      <div className={styles.btnDiv}>
        <div className={styles.rectangleDiv14} />
        <b className={styles.createNewAgent}>Create New Agent</b>
      </div>
    </div>
  );
};

export default Agents2;
