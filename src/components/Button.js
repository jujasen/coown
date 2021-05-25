const Text = (props) => {
    const { title, type, center } = props;

    return (
        <button className={`button 
        ${center ? 'button--center' : ''}`}type={type}>{title}</button>
    );
}

export default Text;