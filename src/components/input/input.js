import './input.scss'

function input (props) {
    return (
        <div className='input'>
            <input name={props.name} id={props.id} type={props.type} onInput={props.onInput} placeholder={props.label}></input>
            {/* <label htmlFor={props.id}>{props.label}</label> */}
        </div>
    )
}

export default input