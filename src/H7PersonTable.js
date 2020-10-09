import React from 'react';

class H7PersonTable extends React.Component{
  constructor(){
    super();
    this.state = {
      personData: []
    }
  }
  
  handleClick = () => {
    fetch('https://randomuser.me/api/?results=25')
    .then(function(res){
      // console.log(res),這裡得到的res是 ReadableStream物件
      return res.json();
    })
    .then(function(data){
      this.setState({
        personData: data.results
      });
    })
  }

  render(){
    return(
      <div>
        <h1>7.個人資訊表</h1>
        <div>利用 https://randomuser.me/api/?results=25取得一批隨機使用者清單，並呈現在於一個表格，可以刷新內容</div>
        <button onClick={this.handleClick}>get new data</button>
        <table border="1">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
          {this.state.personData.map(function(data){
            return(
              <tr key={data.login.uuid}>
                <td><img src={data.picture.thumbnail} /></td>
                <td>{data.name.first}</td>
                <td>{data.gender}</td>
                <td>{data.emily}</td>
                <td>{data.dob.age}</td>
                <td>{data.phone}</td>
                <td>{data.location.country}</td>
              </tr>
            )
          })}
            
          </tbody>
        </table>
      
      
      
      </div>
    )
  }
}

export default H7PersonTable;