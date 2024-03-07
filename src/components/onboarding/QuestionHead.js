import PropTypes from 'prop-types';

const QuestionHead = ({text, otherText}) => {
    return (
        <>
            <p className='question-header'>{text}</p>
            <p className='question-header customizable-text'>{otherText}</p>
        </>
    )
}

QuestionHead.PropTypes = {
    text: PropTypes.string,
    otherText: PropTypes.string
}

export default QuestionHead