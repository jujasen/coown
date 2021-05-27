const Heading = (props) => {
    const { title, bold, uppercase, capitalize, center, grey, green, teal } = props;

    return (
        <h2 className={`heading 
        ${bold ? 'heading--bold' : ''} 
        ${uppercase ? 'heading--uppercase' : ''} 
        ${capitalize ? 'heading--capitalize' : ''}
        ${center ? 'heading--center' : ''}
        ${grey ? 'heading--grey' : ''}
        ${green ? 'heading--green' : ''}
        ${teal ? 'heading--teal' : ''}
        `}>{title}</h2>
    );
}

export default Heading;