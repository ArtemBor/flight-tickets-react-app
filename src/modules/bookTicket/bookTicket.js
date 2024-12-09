import './bookTicket.scss'
import Button from '../../components/button/button'
import Input from '../../components/input/input'
import Popup from 'reactjs-popup'
import { useState } from "react"

function BookTicket (props) {

const [open, setOpen] = useState(false);
const closeModal = () => setOpen(false);
function onButtonClick () {
    setOpen(true)
}

function onSuccessButtonClick () {
    closeModal()
    props.closeModal()
}
    return (
        <div className="book-ticket">
            <form action='/'>
                <div className='book-ticket__header'>
                    <h2>Бронирование билета</h2>
                    <button className='book-ticket__close' type='button' onClick={props.closeModal}>X</button>
                </div>
                <Input name = {'name'} id = {'name'} type = {'text'} label = {'ФИО'}/>
                <Input name = {'phone'} id = {'phone'} type = {'tel'} label = {'Телефон'}/>
                <Button label = {'Отправить'} onClick = {onButtonClick}></Button>
                <Popup open = {open} closeOnDocumentClick onClose={closeModal} position="center center">
                    <div className='book-ticket__success-popup'>
                    <h2 className='book-ticket__success-title'>Билет успешно забронирован!</h2>
                    <Button label = {'Ок'} onClick = {onSuccessButtonClick}></Button>
                    </div>
                </Popup>
            </form>
        </div>
    )
}

export default BookTicket