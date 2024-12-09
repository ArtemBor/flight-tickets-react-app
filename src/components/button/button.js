import './button.scss'


function Button (props) {
    return (
        <button className='button' onClick={props.onClick} type='button'>
            {props.label} 
        </button>
    )
}

export default Button

