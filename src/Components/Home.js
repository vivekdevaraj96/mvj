import React from 'react'
import { Button } from 'react-bootstrap'
import Baseapp from '../Baseapp'
import Carousels from './Carousels'
import { useNavigate } from 'react-router-dom'

function Home() {
  var navigate=useNavigate()
  return (
    <div>
      <Baseapp>  

      <Carousels />

      <div className="Selection">
      <h1>Select Brand</h1>
      <div className="d-grid gap-2">
        <Button variant="outline-dark" size="lg" onClick={()=>navigate('/bajaj')}>
          Bajaj
        </Button>
        <Button variant="outline-dark" size="lg" onClick={()=>navigate('/hero')}>
          Hero
        </Button>
        <Button variant="outline-dark" size="lg" onClick={()=>navigate('/honda')}>
          Honda
        </Button>
        <Button variant="outline-dark" size="lg" onClick={()=>navigate('/suzuki')}>
          Suzuki
        </Button>
        <Button variant="outline-dark" size="lg" onClick={()=>navigate('/tvs')}>
          TVS
        </Button>
      </div>
    </div>    
    </Baseapp>  

       

      
    </div>
  )
}

export default Home