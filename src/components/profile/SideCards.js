import PropTypes from 'prop-types';
import Image from 'next/image';

const SideCard = ({ userImage, userName, userAge, cardName, location, performAction }) => {
  return (
    <div onClick={() => performAction()} className="card side-card mb-0 border-0 p-2 h-100 bg-transparent">
        <div className='position-relative h-100 p-0'>        
            <div>
                <Image src={userImage || '/toa-heftiba-62H0SbdJUvI-unsplash.jpg'} alt="profile" className=" object-fit-cover w-100 rounded-2" width={500} height={500} />
            </div>
            <div onClick={() => performAction()} className='h-100 p-0 rounded-0 h-100 bg-gradient-top rounded-2 card-img-overlay w-100'>
                <div className="position-absolute d-flex justify-content-between align-items-center bottom-0 start-5 translate-end-x bg-transparent w-100">
                    <div className='d-grid p-2 w-30'>
                        <div className='text-uppercase mt-3 bg-danger w-100 px-3 fs-6 badge'>{cardName || 'Model of the day'}</div>
                        <div className='mt-1 mb-3 d-grid fs-6 w-100'>
                            <span className='fw-bold'>{`${userName || 'Luciana Peters'}, ${userAge || '24'}`}</span>
                            <span className='text-light fs-6'><i className='bx bxs-map'/> {location || 'Gwarimpa, Abuja'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

SideCard.propTypes = {
  userImage: PropTypes.string,
  userName: PropTypes.string,
  userAge: PropTypes.string,
  cardName: PropTypes.number,
  location: PropTypes.number,
  performAction: PropTypes.func
};

export default SideCard;