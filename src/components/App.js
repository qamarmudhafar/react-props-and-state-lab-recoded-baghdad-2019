import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = value => {
      this.setState({
        type: value
      })
    }
    fetchPets = () => {
      if (this.state.filters.type === 'all') {
        fetch("/api/pets")
        .then(res => res.json())
        .then(json => {
          this.setState({
            pets: json
          })
        })
      } else {
        fetch("/api/pets?type=" + this.state.filters.type)
        .then(res => res.json)
        .then(json => this.setState({
          pets: json
        }))
      }
    }

    onAdoptPet = (id) => {
        this.state.pets.find(pet => {
          if (pet.id === id) {
            pet.isAdopted = true
          }
        })
      }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App