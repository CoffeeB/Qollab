import PropTypes from 'prop-types';

const Featured = ({ userImage, userName, distance, performAction }) => {
  return (
    <div onClick={() => performAction()} className="card mt-2 mb-2 border-0 featured-card bg-transparent">
        <div className='position-relative p-0 d-flex flex-column align-items-center'>        
                <img src={userImage || '/toa-heftiba-62H0SbdJUvI-unsplash.jpg'} alt="profile" className="profile object-fit-cover profile-xxl w-100 rounded-bottom-2" />
            <div className='h-100 p-0 rounded-0 bg-gradient-cover rounded-bottom-2 card-img-overlay w-100'>
                <div className="position-absolute top-0 start-5 translate-end-x bg-transparent w-100 opacity-65">
                    <div className='d-flex align-items-center justify-content-between p-2 w-100'>
                        <span className='fw-bold fs-7'>{distance ||"3 km"}</span>
                        <div className='bg-black-3 cursor-pointer shadow-sm rounded-circle pb-0 px-1'>
                            <i className='bx bx-heart' />
                        </div>
                    </div>
                </div>
                <div className="position-absolute rounded-2 d-flex justify-content-between align-items-center bottom-0 start-5 translate-end-x bg-transparent w-100">
                    <div className='p-2 w-100'>
                        <i className='bx bxs-circle text-success w-10 me-2'/>
                        <span className='fs-7'>{userName || "Samuel"}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

const Top = ({ userImage, userName, distance, performAction }) => {
    return (
        <div onClick={() => performAction()} className="card cursor-pointer p-0 mt-2 border-0 featured-card bg-transparent">
            <div className='position-relative p-0 d-flex flex-column align-items-center'>        
                    <img src={userImage || '/toa-heftiba-62H0SbdJUvI-unsplash.jpg'} alt="profile" className="profile object-fit-cover profile-xxl w-100 rounded-bottom-2" />
                <div className='h-100 p-0 bg-gradient-cover rounded-0 rounded-bottom-2 card-img-overlay w-100'>
                    <div className="position-absolute start-5 translate-end-x bg-transparent w-100 opacity-65">
                        <div className='d-flex align-items-center justify-content-between p-2 w-100'>
                            <span className='fw-bold fs-7'>{distance ||"3 km"}</span>
                            <div className='bg-black-3 cursor-pointer shadow-sm rounded-circle pb-0 px-1'>
                                <i className='bx bx-heart' />
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute rounded-2 pt-5 d-flex justify-content-between align-items-center bottom-0 start-5 translate-end-x bg-transparent w-100">
                        <div className='p-2 w-100'>
                            <i className='bx bxs-circle text-success w-10 me-2'/>
                            <span className='fs-7'>{userName || "Samuel"}</span>
                        </div>
                        <i className='bx bxs-star display-7 text-warning' />
                    </div>
                </div>
            </div>
        </div>
      );
};

Featured.propTypes = {
  userImage: PropTypes.string,
  userName: PropTypes.string,
  distance: PropTypes.number,
  performAction: PropTypes.func
};

Top.propTypes = {
    userImage: PropTypes.string,
    userName: PropTypes.string,
    distance: PropTypes.number,
    performAction: PropTypes.func
};

export {Featured, Top};
