import React from 'react';

export default class Contacts extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <form>
          <div>
            <label>
              Name: <input type="text"/>
            </label>
          </div>
          <div>
            <label>
              E-mail: <input type="text"/>
            </label>
          </div>
          <div>
            <label>
              Message: <textarea name='text' cols='30' rows='10'/>
            </label>
          </div>
          <div>
            <input type="submit" value="Submit"/>
          </div>
        </form>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor impedit officiis odit fuga itaque laboriosam esse ab voluptatem voluptatibus rem cumque doloremque aut assumenda necessitatibus aliquid, beatae modi dicta sequi?</p>
      </div>
    )
  }
}
