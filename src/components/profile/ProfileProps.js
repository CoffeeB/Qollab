import PropTypes from 'prop-types'

const Heading = ({ text, className }) => {
    return <h3 className={`${className}`} >{text}</h3>
}

const Save = ({ text, className, performAction }) => {
    return <a className={`${className}`} onClick={performAction} >{text}</a>
}

Heading.propTypes = {
    text: PropTypes.string
}

Save.propTypes = {
    text: PropTypes.string,
    performAction: PropTypes.func
}

export { Heading, Save };