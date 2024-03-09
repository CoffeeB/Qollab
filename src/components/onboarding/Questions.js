import React from 'react'
import { useState } from 'react';

const Questions = ({ questions }) => {
    const [entries, setEntries] = useState();

    
    const handleTextareaChange = (e, questionId) => {
        const inputValue = e.target.value.trim();
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default behavior of the Enter key
            const currentCursorPosition = e.target.selectionStart; // Get current cursor position
            const textBeforeCursor = inputValue.substring(0, currentCursorPosition); // Text before cursor
            const textAfterCursor = inputValue.substring(currentCursorPosition); // Text after cursor
            const newLineText = `${textBeforeCursor}\n${textAfterCursor}`; // Insert a new line
            e.target.value = newLineText; // Update textarea value
            e.target.selectionStart = e.target.selectionEnd = currentCursorPosition + 1; // Move cursor to the next line
        } else {
            const entries = inputValue.split('\n').map((entry, index) => `${index + 1}. ${entry}`);
            // Here, you can update the state or perform any other necessary actions with the entries array
            
            // Render entries as Bootstrap badges
            if (!entries) {
                const badges = entries.badges.map((entry, index) => (
                    <span key={index} className="badge bg-secondary me-1 mb-1">{entry}</span>
                ));
                setEntries(badges); // Assuming setEntries is a state updater function
            }
        }
    };

    const renderQuestionInput = (question) => {
        switch (question.type) {
            case "radio":
                return(
                    <div>
                        {question.options.map((option, index) => (
                            <div className='row mb-4 me-7 flex-row-reverse flex-nowrap justify-content-end text-grey' key={index}>
                                <input 
                                    className='form-control  form-check-input'
                                    type="radio" 
                                    id={`question-${question.id}-${index}`} 
                                    name={`question-${question.id}`} 
                                    value={option}
                                />
                                <label htmlFor={`question-${question.id}-${index}`} className='mb-0 mx-2 fs-4'>{option}</label>
                            </div>
                        ))}
                    </div>
                );
            case "dropdown":
                return (
                    <select className='form-select border-1 border-light text-light rounded-1' data-bs-theme="dark" id={`question-${question.id}`}>
                        {question.options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                );
            case "checkbox":
                return (
                    <div>
                        {question.options.map((option, index) => (
                            <div key={index}>
                                <input 
                                    className='form-control'
                                    type="checkbox" 
                                    id={`question-${question.id}-${index}`}
                                    name={`question-${question.id}`}
                                    value={option}
                                />
                            </div>
                        ))}
                    </div>
                );
            case "textarea":
                return (
                    <textarea 
                        className='form-control border-light text-grey' 
                        id={`question-${question.id}`} 
                        placeholder={question.placeholder}
                        value={entries}
                        onChange={(e) => handleTextareaChange(e, question.id)}
                    />
                );
            case "text":
                return (
                    <input 
                        className='form-control border-light text-grey' 
                        type='text' 
                        id={`question-${question.id}`}
                        placeholder={question.placeholder}
                />
                );
            case "range":
                return (
                    <input 
                        className='form-control border-light text-light'
                        type='range'
                        id={`question-${question.id}`}
                        min={question.min}
                        max={question.max}
                        step={question.step}
                    />
                );
            case "number":
                return (
                    <input 
                        className='form-control border-light text-grey' 
                        type="number" 
                        id={`question-${question.id}`} 
                        min={question.min} 
                        max={question.max} 
                        step={question.step} 
                        placeholder={question.placeholder} 
                    />
                );
            default:
                return null;
        }
    }

    return (
        <div className='q-form d-grid justify-content-center align-items-center'>
            {questions.map((question) => (
                <div className='d-grid' key={question.id}>
                    <label className='mb-5 fs-2 text-light content-text text-start' htmlFor={`question-${question.id}`}>{question.label}</label>
                    {renderQuestionInput(question)}
                </div>
            ))}
        </div>
    );
};

export default Questions