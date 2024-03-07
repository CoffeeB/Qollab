import { useState, useEffect } from "react";
import Questions from "@/components/onboarding/Questions";
import Layout from "@/components/general/Layout";
import { Button } from "@/components/general/Button";
import Link from "next/link";

const questions =  [
    {
        "id": 1,
        "label": "Personal Background",
        "type": "category"
    },
    {
        "id": 2,
        "number": 1,
        "label": "What are your names?",
        "type": "textarea",
        "isRequired": true,
        "placeholder": "What are your names?"
    },
    {
        "id": 3,
        "number": 2,
        "label": "How old are you?",
        "type": "number",
        "isRequired": true,
        "placeholder": "How old are you?"
    },
    {
        "id": 4,
        "number": 3,
        "label": "Where were you born and raised?",
        "type": "text",
        "isRequired": true,
        "placeholder": "Where were you born and raised?"
    },
    {
        "id": 5,
        "number": 4,
        "label": "Are you married or have you been married before?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 6,
        "number": 5,
        "label": "What are your goals for the future?",
        "type": "textarea",
        "isRequired": true,
        "placeholder": "What are your goals for the future"
    },
    {
        "id": 7,
        "number": 6,
        "label": "What university did you attend or plan to attend and what did you study or plan to study?",
        "type": "text",
        "isRequired": true,
        "placeholder": "What university did you attend or plan to attend and what did you study or plan to study?"
    },
    {
        "id": 8,
        "number": 7,
        "label": "Where do you currently reside?",
        "type": "text",
        "isRequired": true,
        "placeholder": "Where do you currently reside?"
    },
    {
        "id": 9,
        "number": 8,
        "label": "Are your parents currently still married?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 10,
        "number": 9,
        "label": "Who raised you?",
        "type": "text",
        "isRequired": true,
        "placeholder": "Who raised you?"
    },
    {
        "id": 11,
        "number": 10,
        "label": "Where do you see yourself in the next 10 years?",
        "type": "text",
        "isRequired": true,
        "placeholder": "Where do you see yourself in the next 10 years?"
    },
    {
        "id": 12,
        "label": "Religion and Tribe",
        "type": "category"
    },
    {
        "id": 13,
        "number": 11,
        "label": "Do you believe in God?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 14,
        "number": 12,
        "label": "What is your religion?",
        "type": "text",
        "isRequired": true,
        "placeholder": "What is your Religion"
    },
    {
        "id": 15,
        "number": 13,
        "label": "What’s your tribe, state of origin and country?",
        "type": "text",
        "isRequired": true,
        "placeholder": "What’s your tribe, state of origin and country?"
    },
    {
        "id": 16,
        "number": 14,
        "label": "What do you do for a living?",
        "type": "text",
        "isRequired": true,
        "placeholder": "What do you do for a living?"
    },
    {
        "id": 17,
        "number": 15,
        "label": "Do you feel your religion and tribe is superior while every other person's own doesn’t matter?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 18,
        "number": 16,
        "label": "Can you marry someone who has a different religion and tribe from yours?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true,
    },
    {
        "id": 19,
        "number": 17,
        "label": "How often do you pray?",
        "type": "text",
        "isRequired": true,
        "placeholder": "How often do you pray?"
    },
    {
        "id": 20,
        "label": "Social Lifestyle and Goals",
        "type": "category"
    },
    {
        "id": 21,
        "number": 18,
        "label": "How do you spend your week?",
        "type": "text",
        "isRequired": true,
        "placeholder": "How do you spend your week?"
    },
    {
        "id": 22,
        "number": 19,
        "label": "How often do you hang out with friends and family?",
        "type": "text",
        "isRequired": true,
        "placeholder": "How often do you hang out with friends and family?"
    },
    {
        "id": 23,
        "number": 20,
        "label": "Which do you give more priority? Your work life or your personal life and why?",
        "type": "text",
        "isRequired": true,
        "placeholder": "Which do you give more priority? Your work life or your personal life and why?"
    },
    {
        "id": 24,
        "number": 21,
        "label": "Do you know how to drive a car?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 25,
        "label": "Relationship Expectations",
        "type": "category"
    },
    {
        "id": 26,
        "number": 22,
        "label": "Who should provide financially for the family?",
        "type": "text",
        "isRequired": true,
        "placeholder": "Who should provide financially for the family?"
    },
    {
        "id": 27,
        "number": 23,
        "label": "Would you like to get married or do you believe in partnership and just having children?",
        "type": "text",
        "isRequired": true,
        "placeholder": "Would you like to get married or do you believe in partnership and just having children?"
    },
    {
        "id": 28,
        "number": 24,
        "label": "What does marriage mean to you?",
        "type": "text",
        "isRequired": true,
        "placeholder": "What does marriage mean to you?"
    },
    {
        "id": 29,
        "number": 25,
        "label": "Who should drop the kids at school and do the kids' homework?",
        "type": "text",
        "isRequired": true,
        "placeholder": "Who should drop the kids at school and do the kids' homework?"
    },
    {
        "id": 30,
        "number": 26,
        "label": "How do you handle disagreements or conflicts in a relationship?",
        "type": "text",
        "isRequired": true,
        "placeholder": "How do you handle disagreements or conflicts in a relationship?"
    },
    {
        "id": 31,
        "number": 27,
        "label": "What's your earning range in a year converted to USD?",
        "type": "text",
        "isRequired": true,
        "placeholder": "What's your earning range in a year converted to USD?"
    },
    {
        "id": 32,
        "number": 28,
        "label": "Are you a prudent or extravagant spender?",
        "type": "radio",
        "options": ["Prudent", "Extravagant"],
        "isRequired": true
    },
    {
        "id": 33,
        "number": 29,
        "label": "As a person, do you love cooking and cleaning or do you believe in having a nanny or helper for the home in order to help with chores and with the kids?",
        "type": "text",
        "isRequired": true,
        "placeholder": "As a person, do you love cooking and cleaning or do you believe in having a nanny or helper for the home in order to help with chores and with the kids?"
    },
    {
        "id": 34,
        "number": 30,
        "label": "Are you the kind of partner that likes to spend time with his/her partner?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 35,
        "label": "Family And Children",
        "type": "category"
    },
    {
        "id": 36,
        "number": 31,
        "label": "Do you have children?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 37,
        "number": 32,
        "label": "If yes, Do you want more kids?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 38,
        "number": 33,
        "label": "If no, Do you want to have kids?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 39,
        "number": 34,
        "label": "Do you have a problem with adopting children or birthing children through surrogacy if your partner is unable or unwilling to carry a baby?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 40,
        "number": 35,
        "label": "As a person, do you love cooking and cleaning or do you believe in having a nanny or helper for the home in order to help with chores and with the kids?",
        "type": "text",
        "isRequired": true,
        "placeholder": "As a person, do you love cooking and cleaning or do you believe in having a nanny or helper for the home in order to help with chores and with the kids?"
    },
    {
        "id": 41,
        "number": 36,
        "label": "Do you tolerate other family members living with you, for example your mother in law?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 42,
        "label": "Health And Well-Being",
        "type": "category"
    },
    {
        "id": 43,
        "number": 37,
        "label": "How often do you work out?",
        "type": "text",
        "isRequired": true,
        "placeholder": "How often do you work out?"
    },
    {
        "id": 44,
        "number": 38,
        "label": "Do you believe in going for therapy and or counselling sessions before getting married in order to prepare better?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 45,
        "number": 39,
        "label": "Everyone has something. Do you have a health-related condition that is manageable?",
        "type": "text",
        "isRequired": true,
        "placeholder": "Everyone has something. Do you have a health-related condition that is manageable?"
    },
    {
        "id": 46,
        "number": 40,
        "label": "Do you have a bad habit that you can stop? Example: drinking alcohol excessively, doing drugs, lazing around or being promiscuous in your lifestyle?",
        "type": "text",
        "isRequired": true,
        "placeholder": "Do you have a bad habit that you can stop? Example: drinking alcohol excessively, doing drugs, lazing around or being promiscuous in your lifestyle?"
    },
    {
        "id": 47,
        "label": "Past Relationship",
        "type": "category"
    },
    {
        "id": 48,
        "number": 41,
        "label": "What have you learned from your past relationships?",
        "type": "text",
        "isRequired": true,
        "placeholder": "What have you learned from your past relationships?"
    },
    {
        "id": 49,
        "number": 42,
        "label": "Tell me about your last relationship. How did it end?",
        "type": "text",
        "isRequired": true,
        "placeholder": "Tell me about your last relationship. How did it end?"
    },
    {
        "id": 50,
        "label": "Long-Term Compatibility and Support System",
        "type": "category"
    },
    {
        "id": 51,
        "number": 43,
        "label": "Do you have friends that you have been with for more than 10 years?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 52,
        "number": 44,
        "label": "Does tribe matter to you in picking a partner?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 53,
        "number": 45,
        "label": "Are you the kind of partner that needs to consult external family members all the time in situations that only couples need to handle?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 54,
        "label": "Deal Breaker",
        "type": "category"
    },
    {
        "id": 55,
        "number": 46,
        "label": "Can you forgive a cheating partner?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 56,
        "number": 47,
        "label": "Is physically hitting your partner a deal breaker for you?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 57,
        "number": 48,
        "label": "Can you allow your partner to go through your mobile phone anytime they want?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 58,
        "number": 49,
        "label": "Do you mind if you and your partner own the same bank account?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 59,
        "number": 50,
        "label": "Can you be in a relationship with someone who is sexually attracted to both sexes?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 60,
        "number": 51,
        "label": "Do you love celebrating events like birthdays, valentines and all that?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 61,
        "label": "Relationship and Pet",
        "type": "category"
    },
    {
        "id": 62,
        "number": 52,
        "label": "Can you tell me a couple or relationships that you admire for their qualities and dynamics?",
        "type": "text",
        "isRequired": true,
        "placeholder": "Can you tell me a couple or relationships that you admire for their qualities and dynamics?"
    },
    {
        "id": 63,
        "number": 53,
        "label": "Why do you admire this couple?",
        "type": "text",
        "isRequired": true,
        "placeholder": "Why do you admire this couple?"
    },
    {
        "id": 64,
        "number": 54,
        "label": "Do you like pets?",
        "type": "radio",
        "options": ["Yes", "No"],
        "isRequired": true
    },
    {
        "id": 65,
        "number": 55,
        "label": "If you like pets, what kind of pets do you like?",
        "type": "text",
        "isRequired": false,
        "placeholder": "What kind of pets do you like?"
    },
    {
        "id": 66,
        "label": "Physical Appearances and Final Questions",
        "type": "category"
    },
    {
        "id": 67,
        "number": 56,
        "label": "What is your ideal height and look for your partner?",
        "type": "text",
        "isRequired": true,
        "placeholder": "What is your ideal height and look for your partner?"
    },
    {
        "id": 68,
        "number": 57,
        "label": "What’s your sexuality?",
        "type": "text",
        "isRequired": true,
        "placeholder": "What’s your sexuality?"
    },
    {
        "id": 69,
        "number": 58,
        "label": "As a lady or guy, are you a financially independent or dependent person or in between?",
        "type": "text",
        "isRequired": true,
        "placeholder": "As a lady or guy, are you a financially independent or dependent person or in between?"
    }
];

const QuestionPage = () => {
    const [currentOverallStep, setCurrentOverallStep] = useState(1);
    const [currentQuestionStep, setCurrentQuestionStep] = useState(1);

    const [totalQuestionSteps, setTotalQuestionSteps] = useState();

    useEffect(() => {
        const totalQuestionsSteps = questions.filter(question => question.number).length;
        setTotalQuestionSteps(totalQuestionsSteps);
    }, []);

    const handleNextStep = () => {
        if (currentOverallStep < questions.length) {
            setCurrentOverallStep(currentOverallStep + 1);
            if (currentQuestionStep < questions[currentOverallStep].number) {
                setCurrentQuestionStep(currentQuestionStep + 1);
            }
        }
    };

    const handlePrevStep = () => {
        if (currentOverallStep > 1) {
            setCurrentOverallStep(currentOverallStep - 1);
            if (currentQuestionStep > 1) {
                setCurrentQuestionStep(currentQuestionStep - 1);
            }
        }
    };

    const currentQuestion = questions[currentOverallStep - 1];
    const totalSteps = questions.length;

    let showStepCount = false;
    if (currentQuestion.number && currentQuestion.number === currentQuestionStep) {
        showStepCount = true;
    }

    return (
        <>
            <Layout />
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card border-0 shadow mb-3" style={{ backgroundColor: "inherit" }}>
                                <div className="card-body">
                                    {showStepCount ? (<p className="card-text text-danger">{currentQuestionStep} / {totalQuestionSteps}</p>) : null}
                                    <div className="row mb-5 d-flex ps-4">
                                        {currentQuestion.type === "category" ? (
                                            <Questions questions={[currentQuestion]} />
                                        ) : (
                                            <Questions questions={[currentQuestion]} />
                                        )}
                                    </div>
                                    <div className="d-flex btns-sect justify-content-center my-3">
                                        {showStepCount ? (
                                                <>
                                                    <Button text={'Prev'} className="btn-white grey btn-secondary rounded-pill me-2" performAction={handlePrevStep} disabled={currentOverallStep === 1} />
                                                    <Button text={'Next'} className="btn-white rounded-pill" performAction={handleNextStep} disabled={currentOverallStep === totalSteps} />
                                                </>
                                            ) : (
                                                <Button text={'Continue'} className="btn-white rounded-pill" performAction={handleNextStep} disabled={currentOverallStep === totalSteps} />
                                            )
                                        }
                                    </div>
                                    <div className="d-flex justify-content-between mt-5">
                                        <Link href={"/login"} className="text-danger"><span className="text-light">Already have an Account?</span> Sign In</Link>
                                        <a className="text-danger">View Profile</a>
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