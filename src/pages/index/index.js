import './index.scss'
import RadioButton from '../../components/radioButton/radioButton';
import Filter from '../../modules/filter/filter';
import Card from '../../components/card/card';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../api';
import Loader from '../../components/loader/loader';

function Index () {
  const [tickets, setTickets] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [checkBoxArray, setCheckBoxArray] = useState([
    {name:'stops_all', id:'stops_all', label:'Все', isChecked: true},
    {name:'stops_0', id:'stops_0', label:'Без пересадок', isChecked: false},
    {name:'stops_1', id:'stops_1', label:'1 пересадка', isChecked: false},
    {name:'stops_2', id:'stops_2', label:'2 пересадки', isChecked: false},
    {name:'stops_3', id:'stops_3', label:'3 пересадки', isChecked: false}
  ])
const [sort, setSort] = useState('price')

  function setCheckbox (checkboxId) {
    const nextCheckboxArray = checkBoxArray.map((checkbox) => {
      if (checkbox.id === checkboxId) {
        return {
          name: checkbox.name,
          id: checkbox.id,
          label: checkbox.label,
          isChecked: !checkbox.isChecked
        }
      }

      return checkbox
    })

    setCheckBoxArray(nextCheckboxArray)
  } 

  async function fetchData () {
    try {
      setIsLoading(true)
      console.log('checkBoxArray', checkBoxArray)
      const params = checkBoxArray.reduce((accum, checkbox) => {
        accum = {
          ...accum,
          [checkbox.name]: checkbox.isChecked
        }
        console.log('accum', accum)
        return accum
      }, {})
      console.log('params', params)

      params.sortBy = sort
      const result = await makeRequest('tickets', params)
      setTickets(result.data)
      console.log(result)
    } catch (e) {
      console.error(e)
      alert('При загрузке списка билетов произошла ошибка')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(function() {
    fetchData()
  }, [checkBoxArray, sort]) // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(function() {
  //   fetchData()
  // }, []) 

    return (
        <main className='index'>
        <Filter checkBoxArray={checkBoxArray} setCheckbox={setCheckbox}/>
          <section className='index__tickets'>
              <RadioButton value = {sort} onChange = {setSort}/>
              {isLoading ? (
                <Loader/>
              ) : (

                tickets.length ? (
                  <ul className='index__ticket-list'>
                    {
                      tickets.map((ticket) => (
                        <li><Card key = {ticket.id} price = {ticket.price} routes = {ticket.routes} id = {ticket.id} /></li>
                      ))
                    }
                  </ul>
                ) : (
                  <p  className='index__empty-list'>По вашему запросу билетов не найдено</p>
                )
              )}
          </section>
        </main>
    )
}

export default Index