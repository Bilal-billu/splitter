import { useFieldContext } from "../context/context";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputFieldCard from "./InputFieldCard"

export default function Input() {
  var { tipPercentage, bill, people, setTip, setAmount, setIndividuals } = useFieldContext();

  const inputFields = [{//use for component
    id: "money",
    heading: "Bill",
    icon: "foundation:dollar",
    error: bill.billError,
    errorMessage: "Can't be zero",
    value: bill.amount,
    changeValue: (val) => { setAmount(val) }
  },
  {
    id: "people",
    heading: "Number of People",
    icon: "material-symbols:person",
    error: people.peopleError,
    errorMessage: "Can't be zero",
    value: people.people,
    changeValue: (val) => { setIndividuals(val) }
  }]

  const tipButtons = [{
    name: 5
  },
  {
    name: 10
  },
  {
    name: 15
  },
  {
    name: 20
  },
  {
    name: 25
  }]

  return (
    <div>
      <InputFieldCard item={inputFields[0]} key={1} />
      <div className="d-flex flex-column justify-content-center align-items-center my-3">
        <div className="d-flex justify-content-start col-10">
        <label className='h5 text-capitalize'>Select tip %</label>
        </div>
        <div className='d-flex flex-row align-items-center justify-content-center flex-wrap col-12'>
          {tipButtons.map((item) => {
            return (
              <div key={item.name} className='p-0 m-2 col-3'>
                <input onChange={(e) => { setTip(e.target.value) }}
                  className='btn-check'
                  name="tipPercentage"
                  id={item.name}
                  type='radio'
                  value={item.name}
                  checked={item.name == tipPercentage}
                />
                <label key={item.name} htmlFor={item.name} className='btn col-12 fw-bolder radioButton'>
                  {item.name}%
                </label>
              </div>
            )
          })}
          <input type='number' name="tipPercentage"
            placeholder='custom'
            className='m-2 col-3 text-end text-uppercase btn border border-1 '
            value={tipPercentage}
            onChange={(e) => { setTip(e.target.value) }} />
        </div>
      </div>
      <InputFieldCard item={inputFields[1]} key={2} />
    </div>
  )
}
