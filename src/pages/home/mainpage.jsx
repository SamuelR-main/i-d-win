import { useState } from "react";

function Mainpage(){
    const [visible, setVisible] = useState(true);
    const [visibleSecondScreen, setVisibleSecondScreen] = useState(false);
    const [visibleThirdScreen, setVisibleThirdScreen] = useState(false);

    return(
        <>
        {visible && (
            <div className="flex flex-col justify-center items-center w-screen h-screen bg-blue-200">
                <div className="flex flex-col"><h1 className="text-7xl">Primeira vez aqui?</h1></div>
                <div className="flex flex-row justify-between xl:w-[500px] w-full">
                    <input type="button" value="Sim" onClick={() => {setVisible(false); setVisibleThirdScreen(true);}} placeholder="Sim" className="hover:cursor-pointer w-[200px] bg-red-200"/>
                    <input type="button" value="Nao" onClick={() => {setVisible(false); setVisibleSecondScreen(true);}} placeholder="Não" className="hover:cursor-pointer w-[200px] bg-red-200"/>
                </div>
            </div>
        )}
        {visibleSecondScreen && (
            <div><p>Funfando</p></div>
        )}
        {visibleThirdScreen && (
            <div><p>Funfando2</p></div>
        )}
        </>

    )
}

export default Mainpage;