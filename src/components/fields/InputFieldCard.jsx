
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Input.css'
export default function InputFieldCard({item}) {

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className={`d-flex flex-row align-items-center col-10 ${item.error? 'justify-content-between':'justify-content-start'}`}>
        <label className='h5'>{item.heading}</label>
        {item.error && <label className='text-danger'>{item.errorMessage}</label>}
      </div>
      <div 
      className={`d-flex py-3 flex-row justify-content-around align-items-center col-10 rounded rounded-2 inputContainer 
      +${item.error&&' border border-2 border-danger'}`}>
        <label htmlFor={item.id} className=''>
          <Icon icon={item.icon} className='bg-transparent'/>
          </label>
        <input id={item.id} type="number" placeholder='0'
        className='text-align-end text-end bg-transparent col-8 border border-0'
        onChange={(e)=>{item.changeValue(e.target.value)}}
        />
      </div>
    </div>
  )
}


InputFieldCard.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      changeValue: PropTypes.func.isRequired,
      heading: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      errorMessage: PropTypes.string,
      error: PropTypes.bool
    })
  }