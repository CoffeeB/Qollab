import PropTypes from 'prop-types';

const QuestionHead = ({text, otherText, textClass, otherTextClass}) => {
    return (
        <>
            <h4 className={`question-header ${textClass}`} style={{fontFamily: 'auto'}}>{text}</h4>
            <h4 className={`question-header customizable-text ${otherTextClass}`}>{otherText}</h4>
        </>
    )
}

QuestionHead.PropTypes = {
    text: PropTypes.string,
    otherText: PropTypes.string
}

export default QuestionHead