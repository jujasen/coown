const Line = (props) => {
    const { small, medium, full } = props;

    return (
        <div className={`line 
        ${small ? 'line--s' : ''} 
        ${medium ? 'line--m' : ''} 
        ${full ? 'line--full' : ''}
        `}></div>
    );
}

export default Line;