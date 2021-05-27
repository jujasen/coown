const Subheading = (props) => {
    const { title, bold, uppercase, capitalize, center, grey, green, teal, nomarg, small } = props;

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
        `}>{title}</h2>
    );
}

export default Subheading;