import "./Solo.css"

function Solo(props) {
    return (
        <div className="leCombat">
            <h1>{props.choixSolo}</h1>
            <div>
                <h3>{props.result}</h3>
                <button onClick={props.play} className={props.show == true ? "" : "none"}>Rejouer</button>
            </div>
            <h1>{props.iaChoix}</h1>
        </div>
    )
}

export default Solo