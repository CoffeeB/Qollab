import React from "react";

const ScrollToTopBtn = ({ targetRef }) => {
    const scrollToRef = () => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
          }
    }

    return (
        <div className="z-3 rounded-2 end-0 bg-black btn-outline-danger shadow position-fixed bottom-0 icon-lg cursor-pointer translate-middle-y opacity-100 visible active-progress d-lg-none mb-7 py-2 text-center" onClick={scrollToRef}>
          <i className='bx bx-up-arrow-alt display-4'/>
        </div>
    )
}

export default ScrollToTopBtn;