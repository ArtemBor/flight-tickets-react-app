import moment from 'moment';
import './card.scss';
import { getDateDiff, decline } from '../../helpers/index'
import { Link } from 'react-router-dom';

function card (props) {
//     {
//     "id": 1,
//     "price": 133,
//     "class": "business",
//     "baggage": {
//         "maxWeightKg": 36
//     },
//     "routes": [
//         {
//             "from": "Warsaw",
//             "to": "Berlin",
//             "departure": "2024-12-07T07:29:29.427Z",
//             "arrival": "2024-12-07T08:36:29.427Z",
//             "transfers": [
//                 "Rome",
//                 "London",
//                 "Moscow"
//             ]
//         },
//         {
//             "from": "Warsaw",
//             "to": "Berlin",
//             "departure": "2024-12-07T08:36:29.427Z",
//             "arrival": "2024-12-07T11:23:29.427Z",
//             "transfers": [
//                 "Paris"
//             ]
//         },
//         {
//             "from": "Warsaw",
//             "to": "Berlin",
//             "departure": "2024-12-07T11:23:29.427Z",
//             "arrival": "2024-12-07T13:20:29.427Z",
//             "transfers": []
//         }
//     ]
// }
    return (
        <Link to={`/ticket/${props.id}`} className='card'> 
            <div className='card__information'>
                <p>{props.price} Р</p>
                <img className='card__information-logo' src='/images/aeroflot-logo.svg' alt='Логотип "Аэрофлот"'></img>
            </div>
            <div className='card__parameters'>
                <ul className='card__parameters-list'>
                    {
                        props.routes.map((route, index) => (
                                <li key={index} className='card__parameters-item'>
                                    <h4>{route.from}-{route.to}</h4>
                                    <p>{moment(route.departure).format('HH:mm')} - {moment(route.arrival).format('HH:mm')}</p>
                                </li>
                        ))
                    }
                </ul>
                <ul className='card__parameters-list'>
                    {
                        props.routes.map((route, index) => (
                            <li key={index} className='card__parameters-item'>
                                <h4>В пути</h4>
                                <p>{getDateDiff(route.departure, route.arrival)}</p>
                            </li>
                        ))
                    }
                </ul>
                <ul className='card__parameters-list'>
                    {
                        props.routes.map((route, index) => (
                            <li key={index} className='card__parameters-item'>
                                <h4>
                                    {route.transfers.length ? `${route.transfers.length} ${decline(route.transfers.length, ['Пересадка', 'Пересадки', 'Пересадок'])}` : 'Нет пересадок'}
                                    
                                </h4>
                                <p>{route.transfers.join(',')}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Link>
    )
}

export default card