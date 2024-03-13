import React from 'react';

const Modal = ({ showLoginModal, setShowLoginModal, handleLogin, firstBtnClass, secondBtnClass, heading, secondText, firstBtnText, secondBtnText, secondTextClass, headingClass, firstTip, secondTip, thirdTip, tipsClass }) => {
    return (
        <>
            {showLoginModal && (
                <div className="modal-backdrop fade show" onClick={() => setShowLoginModal(false)}>
                    <div className="modal fade show d-flex align-items-center" tabIndex="-1" role="dialog">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header pb-1 border-0">
                                    <button type="button" className="btn-close" onClick={() => setShowLoginModal(false)} aria-label="Close"></button>
                                </div>
                                <div className="modal-body py-1 text-center">
                                    <span className={`modal-title ${headingClass}`}>
                                        {heading}
                                        <span className={`${secondTextClass}`}>{secondText}</span>
                                        <li className={`${tipsClass}`}>{firstTip}</li>
                                        <li className={`${tipsClass}`}>{secondTip}</li>
                                        <li className={`${tipsClass}`}>{thirdTip}</li>
                                    </span>
                                    
                                </div>
                                <div className="modal-footer border-0">
                                    <button type="button" className={`btn rounded-3 ${firstBtnClass}`} onClick={handleLogin}>{firstBtnText}</button>
                                    <button type="button" className={`btn rounded-3 ${secondBtnClass}`} onClick={() => setShowLoginModal(false)}>{secondBtnText}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
