import './radioButton.scss'

function radioButton (props) {
    return (
    <div className='radio'>
        <input checked={props.value === 'price'} name='ticket' id='price' value = 'price' type='radio' onChange={() => props.onChange('price')}></input>
        <label htmlFor='price'>Самый дешевый</label>
        <input checked={props.value === 'duration'} name='ticket' id='duration' value = 'duration' type='radio' onChange={() => props.onChange('duration')}></input>
        <label htmlFor='duration'>Самый быстрый</label>
    </div>
    )
}

export default radioButton