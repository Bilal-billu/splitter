import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../../App.css'


export default function ResultCard({item}) {
  return (
    <div className="d-flex flex-row justify-content-between align-items-center">
      <div className='resultHeading'>
        <h3 className='text-capitalize'>{item.bodyText}</h3>
        <p>/person</p>
      </div>
      <h1 className='display-1 fw-bolder'>${item.amount}</h1>
    </div>
  )
}

ResultCard.propTypes={
    item: PropTypes.shape({
        amount: PropTypes.string.isRequired,
        bodyText: PropTypes.string.isRequired
    })
}