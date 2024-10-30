import logo from './logo.svg';
import './App.css';
import Welcome from './components/DisplayWelcome';
import LabWeek from './components/DisplayLabWeek';
import StudentName from './components/DisplayStudentName';
import StudentId from './components/DisplaySID';
import College from './components/DisplayCollege';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Welcome></Welcome>
        <LabWeek week="Week09"></LabWeek>
        <StudentName fname="Cheuk Man" lname="Sit"></StudentName>
        <StudentId></StudentId>
        <College college="GBC (Casa Loma)" city="Toronto"></College>
      </header>
    </div>
  );
}

export default App;
