import "./Choice.css"

function Choice(props) {
    return (
        <div className="choice">
            <div className="blocChoice">
                <h1>{props.element}</h1>
                <button onClick={props.leChoix}>choisir</button>
            </div>
        </div>
    )
}

export default Choice