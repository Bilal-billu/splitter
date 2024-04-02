import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Result from './components/result/Result';
import Input from './components/fields/Input'
import { FieldsProvider } from './components/context/context';

function App() {
  var [tipPercentage, setTipPercentage] = useState(0)
  var [bill, setBill] = useState({
    amount: 0,
    billError: false
  })
  var [people, setPeople] = useState({
    people: 0,
    peopleError: false
  })
  function setTip(val) {
    if (val <= 0) {
      setTipPercentage(0)
    }
    else {
      setTipPercentage(val)
    }
  }
  function setAmount(val) {
    if (val < 1) {
      setBill({
        amount: 0,
        billError: true
      })
    }
    else {
      setBill({
        amount: val,
        billError: false
      })
    }
  }
  function setIndividuals(val) {
    if (val < 1) {
      setPeople({
        people: 0,
        peopleError: true
      })
    }
    else {
      setPeople({
        people: val,
        peopleError: false
      })
    }
  }

  function reset() {
    setTipPercentage(0);
    setBill({
      bill: 0,
      billError: false
    });
    setPeople({
      people: 0,
      peopleError: false
    });
  }
  return (
    <div className=' d-flex flex-column justify-content-center align-items-center appBody'>
      <h1 className='display-5 text-uppercase font-monospace mt-5'>
        Spli<br/>tter
      </h1>
      <FieldsProvider value={{tipPercentage, bill, people, setTip, setAmount, setIndividuals, reset}}>
      <form className='d-flex flex-column flex-md-row justify-content-center align-items-center col-12 col-md-11 bg-light rounded rounded-4 mainContent'>
        <div className='col-12 col-md-6 m-0 m-md-1 p-2 pb-5 bg-transparent rounded rounded-4'>
          <Input />
        </div>
        <div className='col-12 col-md-6 m-0 m-md-1 p-2 pb-md-5 d-flex flex-column justify-content-center align-items-center rounded rounded-4 calculatorDiv'>
          <Result />
          <button className='text-uppercase col-10 py-3' onClick={(e)=>{
            reset();
          }}>Reset</button>
        </div>
      </form>
      </FieldsProvider>
    </div>
  )
}

export default App
