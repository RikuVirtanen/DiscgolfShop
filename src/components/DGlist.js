import React, {useState} from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import DGForm from "./DGForm";


function DGlist() {

    const [discs, setDiscs] = useState( [
        {
            name: 'Tern', 
            company: 'Innova', 
            speed: '12', 
            glide: '6', 
            turn: '-3', 
            fade: '2', 
            id: '1'
        }
    ] );

        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;

                const addDisc = (name, company, speed, glide, turn, fade) => {
                    setDiscs([...discs, {
                        name: name, 
                        company: company, 
                        speed: speed, 
                        glide: glide, 
                        turn: turn, 
                        fade: fade, 
                        id: discs.length + 1}]);
                }

                return (
                    <div className="disc-list" style={{ color: theme.syntax, background: theme.bg }}>
                        <ul className="list">
                            {discs.map( disc => {
                                return (
                                    <li key={disc.id}>
                                        Id: {disc.id}<br/>
                                        Name: {disc.name}<br/>
                                        Company: {disc.company}<br/>
                                        Attributes: <br/>
                                        &#9;Speed: {disc.speed}<br/>
                                        &#9;Glide: {disc.glide}<br/>
                                        &#9;Turn: {disc.turn}<br/>
                                        &#9;Fade: {disc.fade}<br/>
                                    </li>);
                                })
                            }
                        </ul>
                        <DGForm addDisc={addDisc} />
                        {/*<button onClick={addDisc}>Add new disc</button>*/}
                    </div>);
            }}</ThemeContext.Consumer>
    );
}
 
export default DGlist;
