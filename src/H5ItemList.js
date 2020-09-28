import React from 'react';

class H5ItemList extends React.Component{
  constructor(){
    super();
    this.state={
      text: '',
      list:[]
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const list = this.state.list;
    list.push(this.state.text);
    this.setState({
      text: '',
      list: list
    })
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render(){
    return(
      <div>
        <h1>5.Item List清單</h1>
        <h5>
        在輸入框任意輸入後 Enter 即可產生一筆新項目，<br />
        並且會把原本的輸入格清空，<br />
        若使用者輸入空白或沒輸入則不能新增。<br />
        </h5>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange} />

          <ul>
            {this.state.list.map(item=>
              <li key={item.index}>{item}</li>
            )}
          </ul>
        </form>
      </div>
    )
  }
}

export default H5ItemList;