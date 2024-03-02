import { useState } from "react";
import data from "./data"
export default function Accordian() {

    const [selected, setSelected] = useState(null);

    const handleClick = (id) =>{
        setSelected(id);

    }
    return (
        <>
            <div className="wraper">
                <div className="accordian">
                    {
                        data && data.length > 0 ?
                            <div>
                                {data.map((i, item) => {
                                    return (
                                        <div onClick={()=> handleClick(i.id)}> 
                                            <h2>{i.title}</h2>
                                            <span>+</span>

                                            {
                                                selected == i.id ? 
                                                <div>
                                                    {i.content}
                                                </div> : null
                                            }
                                        </div>
                                        

                                    )
                                })}
                            </div>
                            : <div>No data found !</div>
                    }
                </div>

            </div>

        </>
    )
}