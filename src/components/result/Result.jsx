import 'bootstrap/dist/css/bootstrap.min.css';
import ResultCard from './ResultCard';
import { useFieldContext } from '../context/context';
import { useEffect, useState } from 'react';



export default function Result() {
  var { tipPercentage, bill, people } = useFieldContext();
  var [individualBill, setIndividualBill] = useState({
    bill: 0,
    tip: 0
  })
  let [totalBill, totalTip] = [0, 0]
  useEffect(() => {
    calc();

  }, [tipPercentage, bill, people]);

  let billArray = [{
    bodyText: "tip amount",
    amount: parseFloat(individualBill.tip).toFixed(2)
  },
  {
    bodyText: "total",
    amount: parseFloat(individualBill.bill).toFixed(2)
  }]

  function calc() {
    if (people.peopleError || !safeCheck()) {
      return
    }
    let indTip = totalTip / people.people;
    let indBill = totalBill / people.people;
    if (indBill && indTip>=0 && people.people!==0) {
      setIndividualBill({
        bill: indBill,
        tip: indTip
      })}
      else
      {
        setIndividualBill({
          bill: 0,
          tip: 0
        })
      }
  }
  
  function safeCheck() {
    if ((tipPercentage < 0) || bill.billError || people.peopleError) {
      totalBill = 0;
      totalTip = 0
      return false
    }
    else {
      totalTip = (Number.parseFloat(bill.amount) * Number.parseFloat(tipPercentage)) / 100;
      totalBill = Number.parseFloat(bill.amount) + Number.parseFloat(totalTip);
    }
    return true;
  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center col-12'>
      <div className='col-10'>
        <div className='my-5'>
          {billArray.map((item, index) => {
            return <ResultCard item={item} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}
