const Heading = (props) => {
    const { title, bold, uppercase, capitalize, center } = props;

    return (
        <h2 className={`heading 
        ${bold ? 'heading--bold' : ''} 
        ${uppercase ? 'heading--uppercase' : ''} 
        ${capitalize ? 'heading--capitalize' : ''}
        ${center ? 'heading--center' : ''}
        `}>{title}</h2>
    );
}

export default Heading;