import React,{useState,useEffect,useMemo} from 'react';


function Weather()
{

    const [city,setCity] = useState('');
    const [temperature,setTemperature] = useState('');
    const [report,setReport] = useState('');


    useEffect(()=>{
        let reportData = 'The city temprature in the '+city+' is '+ temperature

        setReport(reportData);
    },[city])

        const getTemperature = () => {
            const selectElement = document.querySelector('select');
            if (selectElement) {
                const city1 = selectElement.value;
                const temperature1 = selectElement.selectedOptions[0].text;
                setCity(city1);
                setTemperature(temperature1);
            }
        };

    const data = [
    {'city':'Chennai','temperature':'36'},
    {'city':'Bangalore','temperature':'38'},
    {'city':'Kerala','temperature':'35'}
    ]
    
    return(
        <div>
            <h1>Weather Forcasting</h1>
            <select value={city} onChange={()=>getTemperature()}>
                {data.map((item:any,key:any)=>{
                    return(
                        <option key={key}>{item.city}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Weather;