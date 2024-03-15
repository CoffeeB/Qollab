import React from 'react'

export default function Collapsibles({ name, question, answer, identity, ariaId }) {
    return (
        <div className="accordion-item p-0 mb-1 rounded-0 rounded-3">
            <h2 className="accordion-header mt-0 rounded-3 p-0 mb-2" id={ariaId}>
                <button 
                    className="accordion-button collapsed fw-bold rounded-3" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#${identity}`} 
                    aria-expanded="false" 
                    aria-controls={`${identity}`}
                >
                    {name}
                </button>
            </h2>
            <div 
                id={identity}
                className="accordion-collapse collapse" 
                aria-labelledby={ariaId} 
                data-bs-parent="#questionsAccordion">
                <div className="accordion-body pt-0">
                    <p className='mt-0'>{question}</p>
                    <a className='text-danger fst-italic'>{answer}</a>
                </div>
            </div>
        </div>
    );
    
}
