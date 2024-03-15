import React, { useState } from 'react'
import ViewedProfileDetails from './ViewedProfileDetails'
import Image from 'next/image'

export default function ViewProfile() {
    const [activeImage, setActiveImage] = useState(null);

    const handleClick = (imageSrc) => {
        setActiveImage(imageSrc);
    };

    const handleCloseModal = () => {
        setActiveImage(null);
    };
    
  return (
    <>
        <div className="row pt-lg-5 mt-lg-3 pt-sm-0 mt-sm-0 overflow-auto mh-100">
            <div className="card border-0 border-grey rounded-0 col-lg-6 col-sm-12 p-0 pt-sm-0 pe-0 border-end">
                <div className="card-common">
                    <div className="card-body position-relative">
                        {/* Top icons */}
                        <div className="d-flex justify-content-between align-items-center px-3 position-absolute z-3 mt-3 end-0">
                            {/* Three other icons */}
                            <div className="d-flex align-items-center pe-3">
                                <div className='bg-secondary d-flex align-items-center rounded-circle p-2 mx-1'>
                                    <Image src="/svg/regular/bx-glazzed-heart.svg" width={30} height={30}/>
                                </div>
                                <div className='bg-secondary rounded-circle p-1 pb-0 mx-1'>
                                    <i className="bx bx-block display-5 "></i>
                                </div>
                                <div className='bg-secondary rounded-circle p-1 pb-0 mx-1'>
                                    <i className="bx bxs-flag-alt display-5 "></i>
                                </div>
                            </div>
                        </div>
                        {/* Carousel with chat icon */}
                        <div className="row justify-content-center">
                            <div className=" flex-column align-items-center">
                                <div className="position-absolute translate-middle bottom-25 end-0 z-3">
                                    <div className="bg-white rounded-circle p-3 pb-2">
                                        <i className="bx bx-message-alt-dots text-danger display-6" />
                                    </div>
                                </div>
                                {/* Carousel */}
                                <div id="carouselExampleIndicators" className="carousel slide">
                                    <div className="carousel-indicators mx-0">
                                        <Image src="/denisse-alanis-jMCzvolvS0Q-unsplash.jpg" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active img-thumbnail w-15 h-75" alt="carousel" aria-current="true" aria-label="Slide 1" width={500} height={500}/>
                                        <Image src="/toa-heftiba-62H0SbdJUvI-unsplash.jpg" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="img-thumbnail w-15 h-75" alt="carousel" aria-label="Slide 2" width={500} height={500}/>
                                        <Image src="/lucas-canino-Lk4Bk3gPdoc-unsplash.jpg" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="img-thumbnail w-15 h-75" alt="carousel" aria-label="Slide 3" width={500} height={500}/>
                                        <Image src="/roman-melnychuk-cOYBxDWK4wI-unsplash.jpg" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="img-thumbnail w-15 h-75" alt="carousel" aria-label="Slide 4" width={500} height={500}/>
                                        <Image src="/joshua-diaz-pOQpileMUs8-unsplash.jpg" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="img-thumbnail w-15 h-75" alt="carousel" aria-label="Slide 5" width={500} height={500}/>
                                        <Image src="/beyza-yurtkuran-UMkhTomsz0M-unsplash.jpg" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" className="img-thumbnail w-15 h-75" alt="carousel" aria-label="Slide 6" width={500} height={500}/>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <Image src="/denisse-alanis-jMCzvolvS0Q-unsplash.jpg" className="d-block w-100 object-fit-cover" alt="carousel" width={500} height={500}/>
                                        </div>
                                        <div className="carousel-item">
                                            <Image src="/toa-heftiba-62H0SbdJUvI-unsplash.jpg" className="d-block w-100 object-fit-cover" alt="carousel" width={500} height={500}/>
                                        </div>
                                        <div className="carousel-item">
                                            <Image src="/lucas-canino-Lk4Bk3gPdoc-unsplash.jpg" className="d-block w-100 object-fit-cover" alt="carousel" width={500} height={500}/>
                                        </div>
                                        <div className="carousel-item">
                                            <Image src="/roman-melnychuk-cOYBxDWK4wI-unsplash.jpg" className="d-block w-100 object-fit-cover" alt="carousel" width={500} height={500}/>
                                        </div>
                                        <div className="carousel-item">
                                            <Image src="/joshua-diaz-pOQpileMUs8-unsplash.jpg" className="d-block w-100 object-fit-cover" alt="carousel" width={500} height={500}/>
                                        </div>
                                        <div className="carousel-item">
                                            <Image src="/beyza-yurtkuran-UMkhTomsz0M-unsplash.jpg" className="d-block w-100 object-fit-cover" alt="carousel" width={500} height={500}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border-0 rounded-0 col-lg-6 col-sm-12 p-0 ps-0 pb-5 overflow-y-hidden overflow-x-hidden vh-100">
                <ViewedProfileDetails />
            </div>
        </div>
        {activeImage && (
            <div className="modal-backdrop fade show" style={{ display: 'block' }}>
                <div className="">
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <Image src={activeImage} className="modal-image" alt="full-size" width={500} height={500} />
                </div>
            </div>
        )}
    </>
  )
}
