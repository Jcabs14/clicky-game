import React, { Component } from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard';
import characters from './images.json'
import Wrapper from './components/Wrapper';
import Header from './components/Header';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    score: 0,
    hiScore: 0,
  };

  componentDidMount() {
    this.setState({ characters: this.randomize(this.state.characters) });
  }

  //randomize characters
  randomize = characters => {
    let i = characters.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = characters[i];
      characters[i] = characters[j];
      characters[j] = temp;
      i--;
    }
    return characters;
  };

  //reset function for when you click incorrectly
  reset = characters => {
    const reset = characters.map(character => ({ ...character, isClicked: false }));
    return this.randomize(reset);
  };

  //when guessing correctly
  handleCorrectGuess = newCharacter => {
    const { hiScore, score } = this.state;
    const newScore = score + 1;
    const newHiScore = Math.max(newScore, hiScore);

    this.setState({
      characters: this.randomize(newCharacter),
      score: newScore,
      hiScore: newHiScore
    });
  };

  //function for when you click the same image twice
  handleIncorrectGuess = characters => {
    this.setState({
      characters: this.reset(characters),
      score: 0
    });
    alert("You clicked the same image! Game over try again!");
  };

  click = id => {
    let guessedCorrectly = false;
    const newCharacter = this.state.characters.map(character => {
      const newCharacter = { ...character };
      if (newCharacter.id === id) {
        if (!newCharacter.clicked) {
          newCharacter.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newCharacter;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newCharacter)
      : this.handleIncorrectGuess(newCharacter);
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} hiScore={this.state.hiScore}></Header>
        {this.state.characters.map(character => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            click={this.click}
          />
        )
        )
        }
      </Wrapper>
    );
  }
}


export default App;
