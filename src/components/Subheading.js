import PropTypes from 'prop-types';

const Subheading = (props) => {
    const { title, bold, uppercase, capitalize, center, grey, green, teal, nomarg, small, padding } = props;

    return (
        <h2 className={`subheading 
        ${bold ? 'subheading--bold' : ''} 
        ${uppercase ? 'subheading--uppercase' : ''} 
        ${capitalize ? 'subheading--capitalize' : ''}
        ${center ? 'subheading--center' : ''}
        ${grey ? 'subheading--grey' : ''}
        ${green ? 'subheading--green' : ''}
        ${teal ? 'subheading--teal' : ''}
        ${nomarg ? 'm--none' : ''}
        ${small ? 'subheading--s' : ''}
        ${padding ? 'subheading--pad' : ''}
        `}>{title}</h2>
    );
}

export default Subheading;

Subheading.propTypes = {
    title: PropTypes.string
};