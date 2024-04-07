import React from 'react';
import './App.css';

class SignupForm extends React.Component {   //Параметри
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      birthYear: '',
      data: [],
      editIndex: null,
    };
  }
   
  handleInputChange = (event) => {   //Инпут
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {      //Субмитирање
    event.preventDefault();
    this.setState(prevState => ({
      data: [...prevState.data, {
        name: this.state.name,
        lastName: this.state.lastName,
        birthYear: this.state.birthYear,
      }],
      name: '',
      lastName: '',
      birthYear: '',
    }));
  }
 
  handleDelete = (index) => {           //Делете функција
    const newData = [...this.state.data];
    newData.splice(index, 1);
    this.setState({ data: newData });
  }

  handleEdit = (index) => {      //Едит Копче Недовршено
    const item = this.state.data[index];
    this.setState({
      name: item.name,
      lastName: item.lastName,
      birthYear: item.birthYear,
      editIndex: index,
    });
  }

  render() {      //Рендерирање
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{marginBottom: '10px'}}>
            <label>
              <input type="text" name="name" placeholder='Enter Name' onChange={this.handleInputChange} value={this.state.name} />
            </label>
          </div>
          <div style={{marginBottom: '10px'}}>
            <label>
              <input type="text" name="lastName" placeholder='Enter Last Name' onChange={this.handleInputChange} value={this.state.lastName} />
            </label>
          </div>
          <div style={{marginBottom: '10px'}}>  
            <label> 
              <input type="number" name="birthYear" placeholder='Enter Year' onChange={this.handleInputChange} value={this.state.birthYear} />
            </label> 
          </div> 
          <input type="submit" value="Add Item" style={{width: '80px', height: '40px', padding: '5px'}} />
        </form> 
        <table id='table'>  
          <tr>
            <th id='th'>ID</th>
            <th id='th'>Name</th>
            <th id='th'>Last Name</th>
            <th id='th'>Birth Year</th>
            <th id='th'>Actions</th>
          </tr>
          {this.state.data.map((item, index) => (
            <tr key={index}>
              <td id='td'>{index + 1}</td>   
              <td id='td'>{item.name}</td>
              <td id='td'>{item.lastName}</td>
              <td id='td'>{item.birthYear}</td>
              <td id='td'>
                <button onClick={() => this.handleEdit(index)}>Edit</button>
                <button onClick={() => this.handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default SignupForm;

