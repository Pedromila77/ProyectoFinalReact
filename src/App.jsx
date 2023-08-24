import { useState } from 'react';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/ItemlistContainer/ItemListContainer';


import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => { 
 
const [count, setCount] = useState(0);

const sumar = () => {
  setCount(count + 1)
}
const restar = () => {
  setCount(count - 1)
}
 

return (
      <div>
        <NavBarComponent />
        <ItemListContainer/>
        <div className='Contador'>
            
            <h1>Contador</h1>
            <h2>{count}</h2>
            
            <ButtonComponent label="sumar" bsButtonType="dark" onClickFunction={sumar}/>
        
            <ButtonComponent label="restar" bsButtonType="light" onClickFunction={restar}/>      
       
        </div>
      
      </div>



  )
}

export default App
