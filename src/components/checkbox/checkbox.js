import './checkbox.scss'

function checkbox (props) {
    return (
        <div className='checkbox'>
            <input name={props.name} id={props.id} checked = {props.isChecked} type="checkbox" onChange={props.setCheckbox}></input>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
            
        
    )
}

export default checkbox 