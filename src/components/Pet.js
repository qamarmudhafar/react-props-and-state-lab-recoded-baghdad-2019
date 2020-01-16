import React from 'react'

class Pet extends React.Component {
  render() {
    let btn
    if(this.props.pet.isAdopted){
      btn=<button className="ui disabled button">Already adopted</button>
    } else {
      btn = <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.gender === 'male' ? '♂' : '♀'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age:{this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {btn}
        </div>
      </div>
    )
  }

}
export default Pet