import React, {useState} from 'react'
import { Card } from 'semantic-ui-react'

const PokemonCard = ({pokemon}) => {
  const [isClicked, setIsClicked] = useState(false)
  const {id, name, hp, sprites} = pokemon
  const url = isClicked ? sprites.back : sprites.front
    return (
      <Card>
        <div>
          <div className="image">
            <img alt={name} onClick={() => setIsClicked(!isClicked)} 
            src={url} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }

export default PokemonCard
