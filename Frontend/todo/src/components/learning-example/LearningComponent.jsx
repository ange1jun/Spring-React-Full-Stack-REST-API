import Component1 from './FirstComponent'
import {Component49} from './FirstComponent'
import {Component2} from './SecondComponent'
import {Component3} from './ThirdComponent'
import {Component4} from './FourthComponent'
import LearningJavaScript from './LearningJavaScript'


export default function ALL (){
    return (
            <div className="App">
              My Todo Application
                <h1>Component</h1>
                <Component1/>
                <Component49/>
                <Component2/>
                <Component3/>
                <Component4/>
                <h1>Information</h1>
                <LearningJavaScript/>
        </div>
    )
}


