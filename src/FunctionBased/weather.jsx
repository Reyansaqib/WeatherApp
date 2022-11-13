import React, { useEffect, useState } from 'react'
import "./mystyl.css"
import pic1 from "../images/smoke.jpg" 
import pic2 from "../images/few.jpg"
import pic3 from "../images/mist.webp"
import pic4 from "../images/overcastclouds.jpg"
import pic5 from "../images/scatered.jpg"
import pic6 from "../images/brokenclouds.jpg"
import pic7 from "../images/clearsky.jpg"


export default function Weather() {
    const [name, setname] = useState("budgam")
    const [lat, setlat] = useState(0);
    const [lon, setlon] = useState(0);
    const [country, setcountry] = useState("");
    const [temp, settemp] = useState(0);
    const [loc,setloc]=useState("")
    const [clouds,setclouds]=useState(0)
    const [cloudtype,setcloudtype]=useState("")
    const [visibilty,setvisibility]=useState(0)
    const [sunset,setsunset]=useState(0)
    const [sunrise,setsunrise]=useState(0)
    const [humidity,sethumidity]=useState(0)
    const [icon,seticon]=useState("")

    const [windspeed, setwindspeed] = useState(0)




    function input(e) {
        setname(e.target.value)


    }

    async function getCordinates(e) {
        var rawdata = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=6&appid=5e25c96e7ffd735940bacbc18bc3e865`)
        var data = await rawdata.json()
        setlat(data[0].lat)
        setlon(data[0].lon)



    }
    useEffect(() => {
        getCordinates()
    }, [name])

    async function getWeather() {
        if (name == "" && name == "globe") {
            alert("please enter a valid city")
        }
        else {
    
            var rawdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5e25c96e7ffd735940bacbc18bc3e865`)
            var mydata = await rawdata.json()
            console.log(mydata);
            setloc(mydata.name)
            settemp(parseInt(mydata.main.temp - 273) + " Celcius")
            setclouds(mydata.clouds.all)
            sethumidity(mydata.main.humidity)
            setclouds(mydata.clouds.all)
            setvisibility(mydata.visibility)
            setcloudtype(mydata.weather['0'].description)
            setsunrise(mydata.sys.sunrise)
            setsunset(mydata.sys.sunset)
            seticon(mydata.weather['0'].icon)
            setwindspeed(mydata.wind.speed)
            console.log(cloudtype);
            console.log(humidity);
            console.log(clouds);
            console.log(visibilty);
          console.log(new Date(sunrise*1000).toLocaleString());
          console.log(new Date(sunset*1000).toLocaleString());
          console.log(mydata);
          console.log(icon);
          console.log(windspeed);
        }




    }
    function images(image){
        
        var index=[pic1,pic2,pic3,pic4,pic5,pic6,pic7]
        if(cloudtype=="clear sky"){
            image=index[6]
        }
        else if(cloudtype=="smoke"){
            image= index[0]
        }
        else if(cloudtype=="mist"){
            image= index[1]
        }
        else if(cloudtype=="scatered"){
            image= index[4]
        }
        else if(cloudtype=="overcast"){
            image= index[5]
        }
        else if(cloudtype=="broken clouds"){
            image= index[6]
        }
        console.log("called");

    }
    


    return (

        <>


            <div className="background">
                <div className="first">
                    <input type="text" name="name" placeholder='please enter a city' onChange={input} required />
                    
                    <button type='submit' onClick={getWeather} className="btn text-light mb-1">Get Weather</button>

                    

                </div>

                <div className="second">
                

                    <h1 style={{color:"white"}}>Weather Details</h1>
                    <h1 className='h1' style={{color:"yellow"}}>Location : {loc}</h1>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
                    <ul>
                        
                            <li>Temperature :  {temp}</li>
                            
                            <li>Humidity :{humidity}</li>
                            <li>Clouds : {clouds}%</li>
                            <li>Cloud Type : {cloudtype}</li>
                            <li>Visibility : {visibilty}m</li>
                            <li>Wind Speed : {windspeed}km/h</li>
                            <li> Sun Rise : {new Date(sunrise*1000).toLocaleString()}</li>
                            <li>Sun Set : {new Date(sunset*1000).toLocaleString()}</li>

                        
                        </ul>
                    
                    
                    
                  
                 

                </div>
            </div>


        </>

    )
}

