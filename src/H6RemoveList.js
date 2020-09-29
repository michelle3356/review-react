import React from 'react';

class H6RemoveList extends React.Component{
  constructor(){
    super();
    this.state=({
      text: '',
      list: []
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const list = this.state.list;
    list.push(this.state.text);
    this.setState({
      text: '',
      list: list
    })
    console.log(list)
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  
  handleClick = (index) => {
    var newArr = this.state.list.filter((ele, arrIndex)=>
      index !== arrIndex
    )
    this.setState({
      list: newArr
    })
  }

  render(){
    return(
      <div>
        <h1>6.可移除的清單</h1>
        <div>繼清單的陣列後，新增可移除的功能</div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange} />
        </form>
        <ul>
          {this.state.list.map((item, index) => 
            <li key={item.index}>{item}
              <button onClick={this.handleClick.bind(this, index)}>Renmove</button>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default H6RemoveList;