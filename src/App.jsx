import React from 'react'
import { useState , memo } from 'react'
import reactLogo from './assets/react.svg'
import { ButtonColour } from './atoms/Button'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    return <div >
       
        <RecoilRoot>
            <ButtonRenderer></ButtonRenderer>
            <AppComp></AppComp>
        </RecoilRoot>
    </div>
}
function AppComp(){
    const colour = useRecoilValue(ButtonColour)
    return <div style={{ backgroundColor: colour, height: '100vh' }}>

    </div>
}
const  ButtonRenderer = React.memo(()=>{
    const setColour = useSetRecoilState(ButtonColour);
    return (

        <div>
        
        <button onClick={() => setColour("rgb(0, 255, 0)") }>Green</button>
        <br>
        </br>
        <button onClick={() => setColour("rgb(0, 0, 255)")}>Blue</button>
        <br>
        </br>
        <button onClick={() => setColour("rgb(255, 0, 0)")}>Red</button>
        <br>
        </br>
        <button onClick={() => setColour("rgb(255, 255, 255)")}>White</button>
        <br>
        </br>
        <button onClick={() => setColour("rgb(0, 0, 0)")}>Black</button>
        </div>
    );
    

})


export default App
