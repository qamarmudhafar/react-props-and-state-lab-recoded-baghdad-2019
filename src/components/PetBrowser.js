import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  displayPet = () => {
   return this.props.pets.map(item => <Pet pet={item} onAdoptPet={this.props.onAdoptPet} />
   )
 }

  render() {
    return <div className="ui cards">{this.displayPet()}</div>
  }
}

export default PetBrowser