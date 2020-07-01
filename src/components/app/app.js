/**
 * ******************************************************** start : default react working 
 */

// import React from 'react';
// import logo from '../../images/logo.svg';
// import './app.css';

// function App() {
//   return (
//     <div className="app">
//       <header className="app-header">
//         <img src={logo} className="app-logo" alt="logo" />
//         <p>
//           Edit <code>src/app.js</code> and save to reload.
//         </p>
//         <a
//           className="app-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

/**
 * ******************************************************** end : default react working 
 */

import React from 'react';
import taskStore from '../utils/api/taskStore';
import userStore from '../utils/api/userStore';

window.taskStore = taskStore;
window.userStore = userStore;

class wrapComponent extends React.PureComponent {
  rerender = () => {
    this.setState({
      _rerender: new Date(),
    });
  }
}

class App extends wrapComponent {
  state = {
    isInitialized: false,
  }

  render() {
    if (!this.state.isInitialized) {
      return null;
    }
 

  return (
    userStore.data.email ? (
      <Home />
    ) : (
      <Login />
    )
  );
  }

  async componentDidMount() {
    await userStore.initialize();
    this.setState({
      isInitialized: true,
    });

    this.unsubUser = userStore.subscribe(this.rerender);
  }

  async componentDidUpdate() {
    if (userStore.data.email && !taskStore.isInitialized) {
      console.log('popup initialize all offline data...');
      taskStore.setName(userStore.data.id);
      await taskStore.initialize();
      console.log('popup done');
    }
  }

  componentWillUnmount() {
    this.unsubUser();
  }

}

class Login extends wrapComponent {
  state = {
    email: '',
  }

  render(){
    return (
      <form onSubmit={this.submitEmail}>
        <h1>Login</h1>
        <p>Email <input type='text' value={this.state.email} onChange={this.setInputEmail}/></p>
        <p><button>Submit</button></p>
      </form>
    );
  }

  setInputEmail = (event) => {
    this.setState({
      email: (event.target.value || '').trim(),
    });
  }

  submitEmail = async (event) => {
    event.preventDefault();

    if (!this.state.email) {
      alert('gunakan email @gmail.com');
      return;
    }

    if (!this.state.email.endsWith('@gmail.com')) {
      alert('gunakan email @gmail.com');
      return;
    }

    let id = this.state.email;
    id = id.split('@').shift().replace(/\W/g, '');

    await userStore.editSingle({
      id,
      email: this.state.email,
    });

  }

}

class Home extends wrapComponent {
  state = { 
    inputTextTask: '',
  }

  render(){
    return (
      <div>
        <p>
          halo {userStore.data.email} <button onClick={this.logoutTask}>logout</button>
        </p>

        <h2>
          Task: <button onClick={this.uploadTask}>
            {`uploadTask (${taskStore.countUnuploadeds()})`}
          </button>
        </h2>
        <pre>
          Last upload: {taskStore.dataMeta.tsUpload}
        </pre>
        {
          taskStore.data.map((task, index) => (
            <p key={task._id}>
              {index + 1}. {task.text}
              {
                !taskStore.checkIsUploaded(task) && (
                  ` (belum upload)`
                )
              }
              {` `}
              <button onClick={() => this.deleteTask(task._id)}>
                X
              </button>
            </p>
          ))
        }

        <h2>Add New Task</h2>
        <form onSubmit={this.addTask}>
          <p><input type='text' value={this.state.inputTextTask} onChange={this.setInputText} /></p>
          <p><button>Submit</button></p>
        </form>
      </div>
    );
  }

  componentDidMount(){
    this.unsubTask = taskStore.subscribe(this.rerender);
  }

  componentWillUnmount(){
    this.unsubTask();
  }

  setInputText = (event) => {
    this.setState({
      inputTextTask: event.target.value,
    });
  }

  logoutTask = async () => {
    await taskStore.deinitialize();
    await userStore.deleteSingle();
  }

  addTask = async (event) => {
    event.preventDefault();
    await taskStore.addItem({
      text: this.state.inputTextTask,
    }, userStore.data);
    this.setState({inputTextTask: ''});
  }

  deleteTask = async (idTask) => {
    taskStore.deleteItem(idTask, userStore.data);
  }

  uploadTask = async () => {
    console.log('uploading on process');
    try {
      await taskStore.upload();
      console.log('upload done');
    } catch (error) {
      alert(error.message);
      console.log('upload failed');
    }
  }

}

export default App;