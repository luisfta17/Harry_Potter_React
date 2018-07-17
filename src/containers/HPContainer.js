import React, {Component} from 'react';
import HPSelector from '../components/HPSelector'
import HPDetail from '../components/HPDetail'

export default class HPContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      currentCharacter: null
    }

    this.handeCharacterSelected = this.handeCharacterSelected.bind(this)
  }

  componentDidMount() {
    const url = 'http://hp-api.herokuapp.com/api/characters'

    fetch(url).then(res => res.json()).then(characters => {
      this.setState({characters})
    })
  }

  handeCharacterSelected(index) {
    const currentCharacter = this.state.characters[index]
    this.setState({currentCharacter})
  }

  render() {
    return(
      <div>
        <HPSelector onCharacterSelect={this.handeCharacterSelected} characters={this.state.characters}/>
        <HPDetail character={this.state.currentCharacter}/>
      </div>
    );
  }

}
