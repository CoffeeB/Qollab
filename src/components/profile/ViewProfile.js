import React from 'react'
import ViewedProfileDetails from './ViewedProfileDetails'

export default function ViewProfile() {
    
  return (
    <>
        <div className="row pt-5 vh-98 mh-100 overflow-hidden">
            <div className="card border-0 border-grey overflow-hidden rounded-0 col-6 p-0 pe-0 border-end">
                <div className="card-common">
                    <div className="card-body">
                        <div className="d-flex flex-column justify-content-between">
                            <div className="d-flex flex-column justify-content-center">
                                <div className="d-flex flex-column align-items-center">
                                    <div id="carouselExampleIndicators" class="carousel slide">
                                        <div class="carousel-indicators mx-0 vh-20">
                                            <img src="/denisse-alanis-jMCzvolvS0Q-unsplash.jpg" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active img-thumbnail w-15 h-100" alt="carousel" aria-current="true" aria-label="Slide 1" />
                                            <img src="/toa-heftiba-62H0SbdJUvI-unsplash.jpg" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="img-thumbnail w-15 h-100" alt="carousel" aria-label="Slide 2" />
                                            <img src="/lucas-canino-Lk4Bk3gPdoc-unsplash.jpg" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="img-thumbnail w-15 h-100" alt="carousel" aria-label="Slide 3" />
                                        </div>
                                        <div class="carousel-inner vh-80 mh-100">
                                            <div class="carousel-item active">
                                                <img src="/denisse-alanis-jMCzvolvS0Q-unsplash.jpg" class="d-block w-100 object-fit-cover" alt="carousel" />
                                            </div>
                                            <div class="carousel-item">
                                                <img src="/toa-heftiba-62H0SbdJUvI-unsplash.jpg" class="d-block w-100 object-fit-cover" alt="carousel" />
                                            </div>
                                            <div class="carousel-item">
                                                <img src="/lucas-canino-Lk4Bk3gPdoc-unsplash.jpg" class="d-block w-100 object-fit-cover" alt="carousel" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card border-0 rounded-0 col-6 p-0 ps-0 overflow-x-hidden contain-info">
                <ViewedProfileDetails />
            </div>
        </div>
    </>
  )
}
