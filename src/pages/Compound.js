import React, { useState, useEffect } from 'react';
import {UncontrolledTooltip} from 'reactstrap';

import NavBar from '../components/NavBar'

export function ValueInput({ label, value, onChange }) {
  return (
    <label htmlFor={label} className="input">
      <b>{label}</b>
      <code>
        <input
          min="1"
          step="0.01"
          type="number"
          name={label}
          value={value}
          onChange={event => onChange(event.target.value)}
        />
      </code>
    </label>
  );
}

export default function App() {
  
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [timesCompounded, setTimesCompounded] = useState(0);
  const [years, setYears] = useState(0);
  const [interest, setInterest] = useState(0);

  useEffect(() => {
    setInterest(
      (calculateInterest(principal, rate, timesCompounded, years) - principal).toFixed(2)
    );
  });

  return (
    <div>
      <div className="NavBar">
        <NavBar/>
      </div>

      <header>
      <h1>Compound interest calculator</h1>
      <div>
          <p>What is <span style={{textDecoration: "underline", color:"black"}} href="https://www.investopedia.com/terms/i/internal-rate-of-return-rule.asp" id="UncontrolledTooltipExample">Compound interest</span>?</p>
          <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
          The rate at which compound interest accrues depends on the frequency of compounding, such that the higher the number of compounding periods, the greater the compound interest.          </UncontrolledTooltip>
          </div>
      </header>
      <img style={{height:"604px", width:"vw100"}} alt="noimg" src="https://www.investopedia.com/thmb/VY3nr5Q43A18iyx4BR-CAG5BtYE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/COMPOUNDINTERESTFINALJPEGcopy-f248781269194135aa6044e088de7af9.jpg"></img>

      <form className="border m-5 p-2">
        <ValueInput
          label="Initial Principal"
          value={principal}
          onChange={setPrincipal}
        />
        <p className="sub">
          Amount of money that you have available to invest initially.
        </p>
        <ValueInput label="Interest Rate" value={rate} onChange={setRate} />
        <p className="sub">Your annual interest rate as a percent.</p>
        <ValueInput
          label="Times Compounded Per Year"
          value={timesCompounded}
          onChange={setTimesCompounded}
        />
        <p className="sub">Times per year that interest is compounded.</p>
        <ValueInput label="Years to Grow" value={years} onChange={setYears} />
        <p className="sub">Length of time, in years, that you plan to save.</p>
        <p>
          <b>Future Value</b>{' '}
          <code className="right">
            {calculateInterest(principal, rate, timesCompounded, years)}
          </code>
        </p>
        <p>
          <b>Earned Interest</b> <code className="right">{interest}</code>
        </p>
      </form>
    </div>
  );
}

export function calculateInterest(principal, rate, timesCompounded, years) {
  return (
    principal *
    (1 + rate / (timesCompounded * 100)) ** (timesCompounded * years)
  ).toFixed(2);
}