import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { makeRequest } from "../../api"
import moment from "moment"
import { getDateDiff, decline } from "../../helpers"
import Loader from "../../components/loader/loader"
import './ticket.scss'
import Button from "../../components/button/button"
import Popup from "reactjs-popup"
import BookTicket from "../../modules/bookTicket/bookTicket"

function Ticket () {
    const [ticket, setTicket] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    async function fetchData () {
        try {
          setIsLoading(true)
          const result = await makeRequest(`tickets/${params.id}`)
          setTicket(result.data)
          console.log(result)
        } catch (e) {
          console.error(e)
          alert('При загрузке билета произошла ошибка')
        } finally {
          setIsLoading(false)
        }
      }

    useEffect(function () {
        fetchData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    function onButtonClick () {
        setOpen(true)
    }

    return (
        <main className="ticket">
            <Popup open = {open} closeOnDocumentClick onClose={closeModal} position="center center"><BookTicket closeModal = {closeModal}/></Popup>
            {isLoading ? 
            (<Loader/>) : (
            ticket ? (
            <><h2 className="ticket__title">
                Подробная информация о билете
            </h2>
            <div className="ticket__price">
                <p className="ticket__summ">Цена: {ticket.price} Р</p>
                <img className="ticket__image" src='/images/aeroflot-logo.svg' alt="Авиасейлс"></img>
            </div>
            <div className="ticket__parameters">
                <ul className='ticket__parameters-list'>
                    {
                        ticket.routes.map((route, index) => (
                                <li key={index} className='ticket__parameters-item'>                                   
                                    <h4>{route.from}-{route.to}</h4>
                                    <p>{moment(route.departure).format('HH:mm')} - {moment(route.arrival).format('HH:mm')}</p>
                                    <Button label = {'Забронировать'} onClick = {onButtonClick}></Button>
                                </li>
                                
                        ))
                    }
                </ul>
                <ul className='ticket__parameters-list'>
                    {
                        ticket.routes.map((route, index) => (
                            <li key={index} className='ticket__parameters-item'>
                                <h4>В пути</h4>
                                <p>{getDateDiff(route.departure, route.arrival)}</p>
                            </li>
                        ))
                    }
                </ul>
                <ul className='ticket__parameters-list'>
                    {
                        ticket.routes.map((route, index) => (
                            <li key={index} className='ticket__parameters-item'>
                                <h4>{route.transfers.length ? `${route.transfers.length} ${decline(route.transfers.length, ['Пересадка', 'Пересадки', 'Пересадок'])}` : 'Нет пересадок'}</h4>
                                <p>{route.transfers.join(',')}</p>
                            </li>
                        ))
                    }
                </ul>
                <ul className='ticket__parameters-list'>
                            <li className='ticket__parameters-item'>
                                <h4>Багаж</h4>
                                <p>{ticket.baggage.maxWeightKg} кг</p>
                            </li>
                </ul>
                <ul className='ticket__parameters-list'>
                            <li className='ticket__parameters-item'>
                                <h4>Класс</h4>
                                <p>{ticket.class}</p>
                            </li>
                </ul>
            </div> </>): (<p>Информация о билете временно недоступна</p>))}
            </main>
            
           )
}

export default Ticket