import React from 'react'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import LocalDiningIcon from '@material-ui/icons/LocalDining';


export default class RecipeDetails extends React.Component {
  render() {
    const RecipeName = 'Блинчики'
    return(
      <div className="recipe-details-content">
        <header>
          <div>
            <h1>{RecipeName}</h1>
          </div>
        </header>
        <div className='recipe-info-pad'>
          <label title="Сложность">
            <EmojiEventsIcon/>
            <span>Легко</span>
          </label>
          <label title="Время приготовления">
            <AccessAlarmIcon/>
            <span>30 мин</span>
          </label>
          <label title="Количество порций">
            <LocalDiningIcon/>
            <span>4</span>
          </label>
        </div>
        <div className='recipe-image'>
          <img src="https://source.unsplash.com/1600x900/?pancakes" alt="Pancakes" width="70%"/>
        </div>
        <div className="recipe-energy-value">
          <h5>Энергетическая ценность на порцию</h5>
          <div className="container">
            <div className="callories">
              <div className="name">Каллории</div>
              <div className="value">242</div>
              <div className="units">ккал</div>
            </div>
            <div className="proteins">
              <div className="name">Белки</div>
              <div className="value">6.5</div>
              <div className="units">грамм</div>
            </div>
            <div className="fats">
              <div className="name">Жиры</div>
              <div className="value">7.8</div>
              <div className="units">грамм</div>
            </div>
            <div className="carbohydrates">
              <div className="name">Углеводы</div>
              <div className="value">68.3</div>
              <div className="units">грамм</div>
            </div>

          </div>
        </div>
        <div className="recipe-ingredients">
          recipe-ingredients
        </div>
        <div className='recipe-instruction'>
          recipe-instruction
        </div>
        <div className="recipe-advice">
          recipe-advice
        </div>
      </div>
    )
  }
}
