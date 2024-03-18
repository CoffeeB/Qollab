import PropTypes from 'prop-types';
import Image from 'next/image';

const Featured = ({ userImage, userName, distance, performAction }) => {
  return (
    <div onClick={() => performAction()} className="card mt-2 mb-2 border-0 bg-transparent">
        <div className='position-relative p-0 d-flex flex-column align-items-center'>        
                <Image src={userImage || '/toa-heftiba-62H0SbdJUvI-unsplash.jpg'} alt="profile" className="profile object-fit-cover profile-xxl w-100 rounded-bottom-2" width={300} height={200} />
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

const FeaturedExtended = ({ userImage, userName, performAction, userAge, userLocation, userDesc }) => {
  return (
    <div onClick={() => performAction()} className="card pe-0 flex-row mt-2 mb-2 border-0 bg-transparent">
        <div className='position-relative p-0 d-flex flex-column align-items-center'>        
            <Image src={userImage || '/toa-heftiba-62H0SbdJUvI-unsplash.jpg'} alt="profile" className="profile object-fit-cover profile-xxl w-100 rounded-bottom-2" width={300} height={200} />
            <div className='h-100 p-0 rounded-0 bg-gradient-cover rounded-bottom-2 card-img-overlay w-100'>
                <div className="position-absolute top-0 start-5 translate-end-x bg-transparent w-100 opacity-65">
                    <div className='d-flex align-items-center justify-content-between p-2 w-100'>
                        <i className='bx bxs-circle text-success w-10 me-2'/>
                    </div>
                </div>
                <div className="position-absolute rounded-2 end-0 bottom-0 translate-end-x bg-transparent">
                    <div className='p-1 border-danger border border-1 rounded-2 m-1'>
                        <span className='fs-7 text-danger'>{"Premium"}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-secondary rounded-bottom-2 p-1'>
            <h6 className='text-white fs-7'>
                <span>Name: {userName || "Luciana Peters"}</span><br/>
                <span>Age: {userAge || "26"} Y/O</span>
            </h6>
            <a className='text-danger fs-7'>
                <i className='bx bx-map-pin'/>
                {userLocation || " Gwarimpa, Abuja"}
            </a>
            <p className='fs-7'>{userDesc || "I'm Luciana Peters  an artist, dreamer, and eternal seeker of beauty in every corner of life."}</p>
            <button type="button" className=' rounded-3 p-1 btn-outline-danger w-50 fs-7 fw-light'>
                Get Contact Details
            </button>
        </div>
    </div>
  );
};

const Top = ({ userImage, userName, distance, performAction }) => {
    return (
        <div onClick={() => performAction()} className="card cursor-pointer p-0 mt-2 border-0 bg-transparent">
            <div className='position-relative p-0 d-flex flex-column align-items-center'>        
                    <Image src={userImage || '/toa-heftiba-62H0SbdJUvI-unsplash.jpg'} alt="profile" className="profile object-fit-cover profile-xxl w-100 rounded-bottom-2" width={300} height={200} />
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

FeaturedExtended.propTypes = {
  userImage: PropTypes.string,
  userName: PropTypes.string,
  userLocation: PropTypes.string,
  userDesc: PropTypes.string,
  userAge: PropTypes.number,
  performAction: PropTypes.func
};

Top.propTypes = {
    userImage: PropTypes.string,
    userName: PropTypes.string,
    distance: PropTypes.number,
    performAction: PropTypes.func
};

export {Featured, FeaturedExtended, Top};
