// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import UserList from './UserList';
import UserEdit from './UserEdit';
import { Component } from 'react';

class App extends Component {
  // state = {
  //   users: []
  // };

  // async componentDidMount() {
  //   const response = await fetch('/users');
  //   const body = await response.json();
  //   this.setState({users: body});
  // }

  render() {
    // const {users} = this.state;
    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <div className="App-intro">
        //       <h2>Users</h2>
        //       {users.map(user =>
        //           <div key={user.id}>
        //             {user.name} ({user.email})
        //           </div>
        //       )}
        //     </div>
        //   </header>
        // </div>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/users' exact={true} component={UserList}/>
            <Route path='/users/:id' component={UserEdit}/>
          </Switch>
        </BrowserRouter>
    );
  }
}
export default App;
