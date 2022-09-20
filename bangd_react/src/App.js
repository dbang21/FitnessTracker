import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState } from 'react';
import Navigation from './components/Navigation.js';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <header className="App-header">
              <h1>DIONNE'S EXERCISE TRACKER</h1>
              <p><cite>Dionne Bang</cite>, Assignment 6 CS 290 W22</p>
            </header>
            <nav>
              <Navigation />
            </nav>
            <main>
              <>
              <Route path="/" exact>
                <HomePage setExerciseToEdit = {setExerciseToEdit} />
              </Route>
              <Route path="/create-exercise">
                <CreateExercisePage />
              </Route>
              <Route path="/edit-exercise">
                <EditExercisePage exerciseToEdit = {exerciseToEdit} />
              </Route>
              </>
            </main>
            <footer>
              <p>&copy; 2022 Dionne Bang</p>
            </footer>
          </div>
      </Router>
    </div>
  );
}

export default App;