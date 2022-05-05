import './App.css';

// const Task = ({value}) => {
//   return (
//     <li>{value}</li>
//   );
// }

const taskList = ['escovar os dentes', 'cafe da manha', 'correr', 'estudar']

function App() {
  const task = (value) => {
    console.log(value);
    return (
      <li >{value}</li>
    );
  }

  return (
    <div className="App">
      Hello, World!
      <div>
        {taskList.map((tasks, index) => (
          <ol key={index}>{task(tasks)}</ol>
        ))}
      </div>

      {/* {task('Hello world')} */}
      {/* <Task value={'Xablau'} /> */}
    </div>
  );
}

export default App;
