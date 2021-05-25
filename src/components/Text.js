const Text = (props) => {
    const { text, bold, uppercase, capitalize, center } = props;

    return (
        <p className={`text 
        ${bold ? 'text--bold' : ''} 
        ${uppercase ? 'text--uppercase' : ''}
        ${capitalize ? 'text--capitalize' : ''}
        ${center ? 'text--center' : ''}
        `}>{text}</p>
    );
}

export default Text;