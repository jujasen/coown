const Text = (props) => {
    const { text, bold, uppercase, capitalize, center, small } = props;

    return (
        <p className={`text 
        ${bold ? 'text--bold' : ''} 
        ${uppercase ? 'text--uppercase' : ''}
        ${capitalize ? 'text--capitalize' : ''}
        ${center ? 'text--center' : ''}
        ${small ? 'text--s' : ''}
        `}>{text}</p>
    );
}

export default Text;