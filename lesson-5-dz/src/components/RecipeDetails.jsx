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
        <div className="ingredients">
          <h5>Ингредиенты</h5>
          <div className='list'>
            <div className='list-item'>
              <span>1. Куриное яйцо</span>
              <span className='dotted'></span>
              <span>2 штуки</span>
            </div>
            <div className='list-item'>
              <span>2. Соль</span>
              <span className='dotted'></span>
              <span>1 чайная ложка</span>
            </div>
            <div className='list-item'>
              <span>3. Сахар</span>
              <span className='dotted'></span>
              <span>3 столовые ложки</span>
            </div>
            <div className='list-item'>
              <span>4. Молоко</span>
              <span className='dotted'></span>
              <span>2 стакана</span>
            </div>
            <div className='list-item'>
              <span>5. Пшеничная мука</span>
              <span className='dotted'></span>
              <span>2 стакана</span>
            </div>
            <div className='list-item'>
              <span>6. Гашеная сода</span>
              <span className='dotted'></span>
              <span>1 чайная ложка</span>
            </div>
            <div className='list-item'>
              <span>7. Растительное масло</span>
              <span className='dotted'></span>
              <span>1/4 стакана</span>
            </div>
          </div>
        </div>
        <div className='recipe-instruction'>
          <h5>
            Инструкция приготовления
          </h5>
          <ol>
            <li>Яйца взбить с сахаром и солью до появления пены.</li>
            <li>Добавить стакан молока, хорошо взбить венчиком, постепенно всыпать муку, постоянно разбивая комочки венчиком.</li>
            <li>Повторить предыдущий пункт, добавив оставшиеся стаканы молока и муки.</li>
            <li>Влить растительное масло (можно заменить топленым сливочным).</li>
            <li>Погасить соду, добавить в тесто и еще раз хорошо перемешать. Оставить постоять минут 5–10. За это время разогреть сковороду.</li>
            <li>Жарить на умеренном огне. Как только появятся и начнут лопаться пузырьки, перевернуть оладушек и жарить еще секунд 20.</li>
          </ol>
        </div>
        <div className="recipe-advice">
          <div className='recipe-advice-box'>
            <h5>Совет</h5>
            <p>Подавать можно с вареньем, сиропом, медом и т.д.(по вкусу).</p>
          </div>
        </div>
      </div>
    )
  }
}
