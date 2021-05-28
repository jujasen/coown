import PropTypes from 'prop-types';

const Step = (props) => {
    const { title, text } = props;

    return (
        <div className="step">
            <div className="step__title">{title}</div>
            <div className="step__text">{text}</div>
        </div>
    );
}

export default Step;

Step.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
};