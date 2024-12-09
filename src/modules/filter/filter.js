import './filter.scss'
import Checkbox from '../../components/checkbox/checkbox'

function filter (props) {
      
    return (
        <aside className='filter'>
        <h3 className='filter__title'>Количество пересадок</h3>
          <ul className='filter__list'>
              {
                props.checkBoxArray.map (function (n, i) {
                return (
                <li><Checkbox key={i} name={n.name} id={n.id} label={n.label} isChecked = {n.isChecked} setCheckbox={() => props.setCheckbox(n.id)}/></li>
                )})
              }
          </ul>
        </aside>
    )
}

export default filter