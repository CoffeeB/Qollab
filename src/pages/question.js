import { useState, useEffect } from "react";
import Questions from "@/components/onboarding/Questions";
import Layout from "@/components/general/Layout";
import { Button } from "@/components/general/Button";
import Link from "next/link";
import QuestionHead from "@/components/onboarding/QuestionHead";

const questions = [
    {
        "category_id": 1,
        "name": "Family",
        "questions": [
            {
                "id": 1,
                "label": "How important is family to you?",
                "type": "select",
                "options": ["Very important", "Somewhat important", "Not important"],
                "is_required": true
            },
            {
                "id": 2,
                "label": "Do you have siblings?",
                "type": "radio",
                "options": ["Yes", "No"],
                "is_required": false
            }
        ]
    },
    {
        "category_id": 2,
        "name": "Preferences",
        "questions": [
            {
                "id": 3,
                "label": "What's your favorite type of music?",
                "type": "select",
                "options": ["Rock", "Pop", "Hip hop", "Classical", "Other"],
                "is_required": true
            },
            {
                "id": 4,
                "label": "How do you like to spend your weekends?",
                "type": "checkboxes",
                "options": ["Reading", "Watching movies", "Outdoor activities", "Socializing", "Gaming"],
                "is_required": true
            }
        ]
    },
    {
        "category_id": 3,
        "name": "Finance",
        "questions": [
            {
                "id": 5,
                "label": "Are you financially responsible?",
                "type": "radio",
                "options": ["Yes", "No", "Somewhat"],
                "is_required": true
            },
            {
                "id": 6,
                "label": "How do you manage your finances?",
                "type": "textarea",
                "is_required": false
            }
        ]
    }
];

const QuestionPage = () => {
    const [currentOverallStep, setCurrentOverallStep] = useState(1);
    const [currentQuestionStep, setCurrentQuestionStep] = useState(0);
    const [totalQuestionSteps, setTotalQuestionSteps] = useState(0);
    const categoryNumber = questions.length;
    const [currentCategoryNumber, setCurrentCategoryNumber ] = useState(0);

    const [categoryName, setCategoryName] = useState();
    const [currentQuestions, setCurrentQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState();

    useEffect(() => {
        // const totalQuestionsSteps = questions.flatMap(category => category.questions).length;
        const totalQuestionsSteps = questions[currentCategoryNumber].questions.length;
        setTotalQuestionSteps(totalQuestionsSteps);
        setCategoryName(questions[currentCategoryNumber].name);
        alert(questions[currentCategoryNumber].name);
        // setCurrentQuestionStep(1);
    }, [categoryNumber, currentCategoryNumber]);

    const handleNextStep = () => {
        setCurrentQuestions(questions[currentCategoryNumber].questions);
        console.log(questions[currentCategoryNumber].questions[0]);
        console.log(currentQuestions);
        if (currentQuestionStep < currentQuestions.length) {
            
            setCurrentOverallStep(currentOverallStep + 1);
            setCurrentQuestionStep(currentQuestionStep + 1); // Reset question step when moving to the next category
            // setCurrentQuestion(currentQuestions);
            // console.log()
        }
    };

    const handlePrevStep = () => {
        if (currentOverallStep > 1) {
            setCurrentOverallStep(currentOverallStep - 1);
            setCurrentQuestionStep(1); // Reset question step when moving to the previous category
        }
    };

    // const currentCategory = questions.find(category => category.category_id === currentOverallStep);
    // const currentQuestion = currentCategory ? currentCategory.questions.find(question => question.id === currentQuestionStep) : null;
    
    const totalSteps = questions.length;

    let showStepCount = false;
    if (currentQuestions.length >= 1 ) {
        showStepCount = true;
    }

    return (
        <>
            <Layout />
            <section className="py-5 mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card border-0 shadow mb-3" style={{ backgroundColor: "inherit" }}>
                                <div className="card-body">
                                    
                                    {showStepCount && (
                                        <>
                                        <h2>{categoryName}</h2>
                                        <p className="card-text text-danger">{currentQuestionStep} / {totalQuestionSteps}</p>
                                        </>
                                    )}
                                    <div className="row mb-5 d-flex ps-4">
                                        {currentQuestions.length < 1 && (
                                            <>
                                            <div className='q-form d-grid justify-content-center align-items-center'>
                                                <div className='d-grid'>
                                                    <label className='mb-1 fs-2 text-light content-text text-start' >
                                                        {categoryName}
                                                    </label>
                                                </div>
                                            </div>
                                            </>
                                        )}
                                        {currentQuestion ? (
                                            <>
                                                <Questions questions={currentQuestion} />
                                                
                                            </>
                                        ) : (
                                            <>
                                            <div className="d-flex btns-sect justify-content-center my-3">
                                                <Button text={'Continue'} className="btn-white rounded-pill" performAction={handleNextStep} disabled={currentQuestionStep === totalSteps} />
                                            </div>
                                            </>
                                        ) }
                                        
                                    </div>
                                    <div className="d-flex btns-sect justify-content-center my-3">
                                        {showStepCount ? (
                                            <>
                                                <Button text={'Prev'} className="btn-secondary rounded-pill me-2" performAction={handlePrevStep} disabled={currentOverallStep === 1} />
                                                <Button text={'Next'} className="btn-white rounded-pill" performAction={handleNextStep} disabled={currentOverallStep === totalSteps} />
                                            </>
                                        ) : (
                                            <Button text={'Continue'} className="btn-white rounded-pill" performAction={handleNextStep} disabled={currentOverallStep === totalSteps} />
                                        )}
                                    </div>
                                    <div className="d-flex justify-content-between mt-5">
                                        <Link href={"/login"} className="text-danger fs-7"><span className="text-light">Already have an Account?</span> Sign In</Link>
                                        <a className="text-danger fs-7">View Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default QuestionPage;
