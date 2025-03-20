

const Alert = (props) => {
    const theme = `alert alert-${props.color} alert-dismissible fade show ${props.display}` ;
    return(
        <div className={theme} role="alert">
            <strong>{props.category}!</strong> {props.message}
        </div>
    )
}

export default Alert;
