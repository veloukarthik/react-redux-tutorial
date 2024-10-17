import React,{useState} from "react";

function Occurence() {
    const [occurence, setOccurence] = useState([]);
    const [input, setInput] = useState("");

    const handleChange = (e:any) => {
        setInput(e.target.value);
    }

    const handlClick = () => {
        let split = input.split(" ");

        let count:any = {};

        split.forEach(word => {
            if(count[word]){
                count[word]++;
            }else{
                count[word] = 1;
            }
        });
        setOccurence(count);
    }

    return ( 
    <div>
        <input type="text" onChange={handleChange}/>
        <button onClick={handlClick}>Submit</button>
        {Object.keys(occurence).map((word:any, index) => (
            <div key={index}>
                <p>{word} : {occurence[word]}</p>
            </div>
        ))}
    </div> );
}

export default Occurence;

