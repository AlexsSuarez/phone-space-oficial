import React, { useState } from "react";
import "../Hojas-de-estilo/Header.css"
import Cards2 from "./Cards2";

let Header=(props)=>{

let [input , setinput]= useState("Barra0");
let barras = input;

let Spawn=()=>{
    if(input==="Barra0"){
        setinput("Barra");
        setinput1("None1");
        setinput2("None2");
        setinput3("None3");
        setinput4("None4");
        setinput5("None5");
        setinput6("None6");
        setinput7("None7");
    }
    else if(input==="Barra"){
      setinput("Barra0");
    }
};

let [input1 , setinput1] = useState("None1");
let SpanwIphone=()=>{
  if(input1==="None1"){
      setinput1("Done1");
      setinput("Barra0")
  }
  else if(input1==="Done1"){
    setinput1("None1");
  };
}


let [input2 , setinput2] = useState("None2");
let SpanwSamsung=()=>{
  if(input2==="None2"){
    setinput2("Done2");
    setinput("Barra0")
}
else if(input2==="Done2"){
  setinput2("None2");
};
}

let [input3 , setinput3] = useState("None3");
let SpanwTecno=()=>{
  if(input3==="None3"){
    setinput3("Done3");
    setinput("Barra0")
}
else if(input3==="Done3"){
  setinput3("None3");
};
}

let [input4 , setinput4] = useState("None4");
let SpanwXiaomi=()=>{
  if(input4==="None4"){
    setinput4("Done4");
    setinput("Barra0");
}
else if(input4==="Done4"){
  setinput4("None4");
};
}

let [input5 , setinput5] = useState("None5");
let SpanwInfinix=()=>{
  if(input5==="None5"){
    setinput5("Done5");
    setinput("Barra0");
}
else if(input5==="Done5"){
  setinput5("None5");
};
}


let [input6 , setinput6] = useState("None6");
let SpanwAlcatel=()=>{
  if(input6==="None6"){
    setinput6("Done6");
    setinput("Barra0");
}
else if(input6==="Done6"){
  setinput6("None6");
};
}

let [input7 , setinput7] = useState("None7");
let SpanwNokia=()=>{
  if(input7==="None7"){
    setinput7("Done7");
    setinput("Barra0");
}
else if(input7==="Done7"){
  setinput7("None7");
};
}

  return(
    <div className="header">
        <div className="logo">
            <img src={require('../imagenes/A3.png')} className="Logo"/>
            <img src={require('../imagenes/barras.png') } className="barras" onClick={Spawn} />
            <div className={barras}>
                <img className="input" src={require("../imagenes/befunky_2024-0-0_21-50-18.jpg")}/>
                <h2 className="input">¡Explora!</h2>
                <ul className="input">
                    <li onClick={SpanwIphone}>
                      iPhone
                    </li>
                </ul>

                <ul className="input" onClick={SpanwSamsung}>
                    <li>
                      Samsung
                    </li>
                </ul>

                <ul className="input">
                    <li onClick={SpanwTecno}>
                    Tecno
                    </li>
                </ul>

                <ul className="input" onClick={SpanwXiaomi}>
                    <li>
                      Xiaomi
                    </li>
                </ul>

                <ul className="input">
                    <li onClick={SpanwInfinix}>
                    Infinix
                    </li>
                </ul>

                <ul className="input" onClick={SpanwAlcatel}>
                    <li>
                      Alcatel
                    </li>
                </ul>

                <ul className="input" onClick={SpanwNokia}>
                    <li>
                      Nokia
                    </li>
                </ul>
            </div>
            

            <div className={input1}>
            <div className="equis" onClick={SpanwIphone}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </div>
              <Cards2 Nombre="iPhone 15 Pro Max" Imagen={require("../imagenes/iPhone/Iphone 15 Pro Max/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 15 Pro" Imagen={require("../imagenes/iPhone/iPhone 15 pro/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 15 Plus" Imagen={require("../imagenes/iPhone/Iphone 15 plus/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 15" Imagen={require("../imagenes/iPhone/Iphone 15/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 14 Pro Max" Imagen={require("../imagenes/iPhone/iPhone 14 Pro Max/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 14 Pro" Imagen={require("../imagenes/iPhone/iPhone 14 Pro/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 14 Plus" Imagen={require("../imagenes/iPhone/iPhone 14 Plus/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 14" Imagen={require("../imagenes/iPhone/iPhone 14/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 13 Pro Max" Imagen={require("../imagenes/iPhone/iPhone 13 Pro Max/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 13 Pro" Imagen={require("../imagenes/iPhone/iPhone 13 Pro/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 13 Mini" Imagen={require("../imagenes/iPhone/iPhone 13 Mini/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 13" Imagen={require("../imagenes/iPhone/iPhone 13/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 12 Pro Max" Imagen={require("../imagenes/iPhone/iPhone 12 Pro Max/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 12 Pro" Imagen={require("../imagenes/iPhone/iPhone 12 Pro/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 12 Mini" Imagen={require("../imagenes/iPhone/iPhone 12 mini/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 12" Imagen={require("../imagenes/iPhone/iPhone 12/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 11 Pro Max" Imagen={require("../imagenes/iPhone/iPhone 11 Pro Max/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 11 Pro" Imagen={require("../imagenes/iPhone/iPhone 11 Pro/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 11" Imagen={require("../imagenes/iPhone/iPhone 11/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone SE 3ra Gen" Imagen={require("../imagenes/iPhone/iPhone SE 3ra Gen/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone XS Max" Imagen={require("../imagenes/iPhone/iPhone XS Max/1.png")} Href="#" />
              <Cards2 Nombre="iPhone XS" Imagen={require("../imagenes/iPhone/iPhone XS/1.png")} Href="#" />
              <Cards2 Nombre="iPhone XR" Imagen={require("../imagenes/iPhone/iPhone XR/1.png")} Href="#" />
              <Cards2 Nombre="iPhone X" Imagen={require("../imagenes/iPhone/iPhone X/1.png")} Href="#" />
              <Cards2 Nombre="iPhone 8 Plus" Imagen={require("../imagenes/iPhone/iPhone 8 plus/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 8" Imagen={require("../imagenes/iPhone/iPhone 8/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone SE 2da Gen" Imagen={require("../imagenes/iPhone/iPhone SE 2da Gen/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 7 Plus" Imagen={require("../imagenes/iPhone/iPhone 7 plus/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone 7" Imagen={require("../imagenes/iPhone/iPhone 7/1.jpg")} Href="#" />
              <Cards2 Nombre="iPhone SE 1ra Gen" Imagen={require("../imagenes/iPhone/iPhone SE 1ra Gen/2.jpg")} Href="#" />
              
            </div>



            <div className={input2}>
            <div className="equis" onClick={SpanwSamsung}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </div>
              <Cards2 Nombre="Samsung Galaxy Z Fold5" Imagen={require("../imagenes/Samsung/13.jpg")} Href="#" />
              <Cards2 Nombre="Samsung Galaxy Z Flip5" Imagen={require("../imagenes/Samsung/14.jpg")} Href="#" />
              <Cards2 Nombre="Samsung Galaxy S24 Ultra" Imagen={require("../imagenes/Samsung/1.jpg")} Href="#" />
              <Cards2 Nombre="Samsung Galaxy S24" Imagen={require("../imagenes/Samsung/2.jpg")} Href="#" />
              <Cards2 Nombre="Samsung Galaxy S23 Ultra" Imagen={require("../imagenes/Samsung/3.jpg")} Href="#" />
              <Cards2 Nombre="Samsung Galaxy S23" Imagen={require("../imagenes/Samsung/4.jpg")} Href="#" />
              <Cards2 Nombre="Samsung Galaxy S22 Ultra" Imagen={require("../imagenes/Samsung/5.jpg")} Href="#" />
              <Cards2 Nombre="Samsung Galaxy S22" Imagen={require("../imagenes/Samsung/6.jpg")} Href="#" />
              <Cards2 Nombre="Samsung Galaxy S21 Ultra" Imagen={require("../imagenes/Samsung/7.jpg")} Href="#" />
              <Cards2 Nombre="Samsung Galaxy S21" Imagen={require("../imagenes/Samsung/8.jpg")} Href="#" />
              <Cards2 Nombre="Samsung Galaxy A54" Imagen={require("../imagenes/Samsung/9.jpg")} Href="#" />
              <Cards2 Nombre="Samsung Galaxy A52" Imagen={require("../imagenes/Samsung/10.jpg")} Href="#" />
              <Cards2 Nombre="Samsung Galaxy A32" Imagen={require("../imagenes/Samsung/11.jpg")} Href="#" />
              <Cards2 Nombre="Samsung Galaxy A12" Imagen={require("../imagenes/Samsung/12.jpg")} Href="#" />
            </div>
            


            <div className={input3}>
            <div className="equis" onClick={SpanwTecno}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </div>
              <Cards2 Nombre="Tecno Spark 20 Pro" Imagen={require("../imagenes/Tecno/1.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Spark 20" Imagen={require("../imagenes/Tecno/2.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Spark 20C" Imagen={require("../imagenes/Tecno/3.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Pop 8" Imagen={require("../imagenes/Tecno/4.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Phantom V Flip" Imagen={require("../imagenes/Tecno/5.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Pova 5 Pro" Imagen={require("../imagenes/Tecno/6.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Pova 5" Imagen={require("../imagenes/Tecno/7.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Camon 20 Pro" Imagen={require("../imagenes/Tecno/8.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Camon 20 Premier 5G" Imagen={require("../imagenes/Tecno/9.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Spark 10 5G" Imagen={require("../imagenes/Tecno/10.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Spark 10 Pro" Imagen={require("../imagenes/Tecno/11.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Spark 10C" Imagen={require("../imagenes/Tecno/12.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Spark 10" Imagen={require("../imagenes/Tecno/13.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Phamton V Fold 5G" Imagen={require("../imagenes/Tecno/14.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Pop 7 Pro" Imagen={require("../imagenes/Tecno/15.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Spark Go 2023" Imagen={require("../imagenes/Tecno/16.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Phantom X2 Pro" Imagen={require("../imagenes/Tecno/17.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Phantom X2" Imagen={require("../imagenes/Tecno/18.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Pova 4" Imagen={require("../imagenes/Tecno/19.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Pova 4 Pro" Imagen={require("../imagenes/Tecno/20.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Pova Neo 2" Imagen={require("../imagenes/Tecno/21.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Pop 6 Pro" Imagen={require("../imagenes/Tecno/22.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Camon 19 Neo" Imagen={require("../imagenes/Tecno/23.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Spark 9" Imagen={require("../imagenes/Tecno/24.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Spark 9T" Imagen={require("../imagenes/Tecno/25.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Camon 19" Imagen={require("../imagenes/Tecno/26.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Camon 19 Pro" Imagen={require("../imagenes/Tecno/27.png")} Href="#" />
              <Cards2 Nombre="Tecno Spark 9 Pro" Imagen={require("../imagenes/Tecno/28.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Pova 3" Imagen={require("../imagenes/Tecno/29.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Camon 17 Pro" Imagen={require("../imagenes/Tecno/30.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Pop 5S" Imagen={require("../imagenes/Tecno/31.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Pop 5X" Imagen={require("../imagenes/Tecno/32.png")} Href="#" />
              <Cards2 Nombre="Tecno Spark 8C" Imagen={require("../imagenes/Tecno/33.png")} Href="#" />
              <Cards2 Nombre="Tecno Pop 5 LTE" Imagen={require("../imagenes/Tecno/34.png")} Href="#" />
              <Cards2 Nombre="Tecno Pop 5 Pro" Imagen={require("../imagenes/Tecno/35.png")} Href="#" />
              <Cards2 Nombre="Tecno Spark 8 Pro" Imagen={require("../imagenes/Tecno/36.png")} Href="#" />
              <Cards2 Nombre="Tecno Spark Go 2022" Imagen={require("../imagenes/Tecno/37.png")} Href="#" />
              <Cards2 Nombre="Tecno Pova 5G" Imagen={require("../imagenes/Tecno/38.png")} Href="#" />
              <Cards2 Nombre="Tecno Pova Neo" Imagen={require("../imagenes/Tecno/39.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Spark 8T" Imagen={require("../imagenes/Tecno/40.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Camon 18T" Imagen={require("../imagenes/Tecno/41.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Pop 5C" Imagen={require("../imagenes/Tecno/42.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Camon 18i" Imagen={require("../imagenes/Tecno/43.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Spark 8P" Imagen={require("../imagenes/Tecno/44.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Camon 18 Premier" Imagen={require("../imagenes/Tecno/45.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Camon 18" Imagen={require("../imagenes/Tecno/46.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Camon 18P" Imagen={require("../imagenes/Tecno/47.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Spark 8" Imagen={require("../imagenes/Tecno/48.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Spark Go 2021" Imagen={require("../imagenes/Tecno/49.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Phantom X" Imagen={require("../imagenes/Tecno/50.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Pova 2" Imagen={require("../imagenes/Tecno/51.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Camon 17p" Imagen={require("../imagenes/Tecno/52.jpg")} Href="#" />
              <Cards2 Nombre="Tecno Spark 7" Imagen={require("../imagenes/Tecno/53.jpg")} Href="#" />
              </div>


              <div className={input4}>
            <div className="equis" onClick={SpanwXiaomi}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </div>
              <Cards2 Nombre="Poco F5 Pro" Imagen={require("../imagenes/Xiaomi/1.jpg")} Href="#" />
              <Cards2 Nombre="Poco F5" Imagen={require("../imagenes/Xiaomi/2.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi 13T Pro" Imagen={require("../imagenes/Xiaomi/3.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi 13 Lite" Imagen={require("../imagenes/Xiaomi/4.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi Redmi Note 12 Pro+ 5G" Imagen={require("../imagenes/Xiaomi/5.jpg")} Href="#" />
              <Cards2 Nombre="POCO X5 Pro 5G" Imagen={require("../imagenes/Xiaomi/6.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi Redmi Note 12 5G" Imagen={require("../imagenes/Xiaomi/7.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi Redmi 13C" Imagen={require("../imagenes/Xiaomi/8.jpg")} Href="#" />
              <Cards2 Nombre="Redmi Note 13" Imagen={require("../imagenes/Xiaomi/9.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi 13T Pro" Imagen={require("../imagenes/Xiaomi/10.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi 13T" Imagen={require("../imagenes/Xiaomi/11.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi Mi Mix4" Imagen={require("../imagenes/Xiaomi/12.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi 13 Pro" Imagen={require("../imagenes/Xiaomi/13.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi 13" Imagen={require("../imagenes/Xiaomi/14.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi 12S Ultra" Imagen={require("../imagenes/Xiaomi/15.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi 12T Pro" Imagen={require("../imagenes/Xiaomi/16.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi 12 Pro" Imagen={require("../imagenes/Xiaomi/17.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi 12T" Imagen={require("../imagenes/Xiaomi/18.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi 12" Imagen={require("../imagenes/Xiaomi/19.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi Mi 11" Imagen={require("../imagenes/Xiaomi/20.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi 11T Pro" Imagen={require("../imagenes/Xiaomi/21.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi Mi 11i" Imagen={require("../imagenes/Xiaomi/22.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi 12X" Imagen={require("../imagenes/Xiaomi/23.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi Poco F3" Imagen={require("../imagenes/Xiaomi/24.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi 11T" Imagen={require("../imagenes/Xiaomi/25.jpg")} Href="#" />
              <Cards2 Nombre="Redmi Note 12 Pro+" Imagen={require("../imagenes/Xiaomi/26.jpg")} Href="#" />
              <Cards2 Nombre="Redmi Note 12S" Imagen={require("../imagenes/Xiaomi/27.jpg")} Href="#" />
              <Cards2 Nombre="Redmi Note 12" Imagen={require("../imagenes/Xiaomi/28.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi Poco M5s" Imagen={require("../imagenes/Xiaomi/29.jpg")} Href="#" />
              <Cards2 Nombre="Xiaomi 11 Lite 5G NE" Imagen={require("../imagenes/Xiaomi/30.jpg")} Href="#" />
              <Cards2 Nombre="Redmi Note 11 Pro 5G" Imagen={require("../imagenes/Xiaomi/31.jpg")} Href="#" />
              <Cards2 Nombre="Redmi Note 11 Pro Plus 5G" Imagen={require("../imagenes/Xiaomi/32.jpg")} Href="#" />
              <Cards2 Nombre="Redmi Note 11 Pro Max" Imagen={require("../imagenes/Xiaomi/33.jpg")} Href="#" />
              <Cards2 Nombre="Poco X4 Pro 5G" Imagen={require("../imagenes/Xiaomi/34.jpg")} Href="#" />
              <Cards2 Nombre="Redmi Note 10 Pro" Imagen={require("../imagenes/Xiaomi/35.jpg")} Href="#" />
              <Cards2 Nombre="Poco X3 Pro" Imagen={require("../imagenes/Xiaomi/36.jpg")} Href="#" />
              <Cards2 Nombre="Poco X3 NFC" Imagen={require("../imagenes/Xiaomi/37.jpg")} Href="#" />
              <Cards2 Nombre="Redmi Note 11s" Imagen={require("../imagenes/Xiaomi/38.jpg")} Href="#" />
              <Cards2 Nombre="Redmi Note 10S" Imagen={require("../imagenes/Xiaomi/39.jpg")} Href="#" />
              <Cards2 Nombre="Poco M4 Pro 5G" Imagen={require("../imagenes/Xiaomi/40.jpg")} Href="#" />
              <Cards2 Nombre="Poco M3 Pro 5G" Imagen={require("../imagenes/Xiaomi/41.jpg")} Href="#" />
              <Cards2 Nombre="Redmi Note 11" Imagen={require("../imagenes/Xiaomi/42.jpg")} Href="#" />
              <Cards2 Nombre="Redmi Note 10" Imagen={require("../imagenes/Xiaomi/43.jpg")} Href="#" />
              <Cards2 Nombre="Redmi 10" Imagen={require("../imagenes/Xiaomi/44.jpg")} Href="#" />
              <Cards2 Nombre="Redmi 10C" Imagen={require("../imagenes/Xiaomi/45.jpg")} Href="#" />
              <Cards2 Nombre="Redmi 9T" Imagen={require("../imagenes/Xiaomi/46.jpg")} Href="#" />
              <Cards2 Nombre="Redmi 9C" Imagen={require("../imagenes/Xiaomi/47.jpg")} Href="#" />
              <Cards2 Nombre="Redmi 9" Imagen={require("../imagenes/Xiaomi/48.jpg")} Href="#" />
              <Cards2 Nombre="Redmi A1" Imagen={require("../imagenes/Xiaomi/49.jpg")} Href="#" />
              <Cards2 Nombre="Redmi 9A" Imagen={require("../imagenes/Xiaomi/50.jpg")} Href="#" />
            </div>



            <div className={input5}>
            <div className="equis" onClick={SpanwInfinix}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </div>
              <Cards2 Nombre="Infinix Smart 8 HD" Imagen={require("../imagenes/Infinix/1.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 40" Imagen={require("../imagenes/Infinix/2.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 40 Pro" Imagen={require("../imagenes/Infinix/3.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 40i" Imagen={require("../imagenes/Infinix/4.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Zero 30 4G" Imagen={require("../imagenes/Infinix/5.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Zero 30 5G" Imagen={require("../imagenes/Infinix/6.jpg")} Href="#" />
              <Cards2 Nombre="Infinix GT 10 Pro" Imagen={require("../imagenes/Infinix/7.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 30 5G" Imagen={require("../imagenes/Infinix/8.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 30 Vip" Imagen={require("../imagenes/Infinix/9.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 30" Imagen={require("../imagenes/Infinix/10.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 30 Pro" Imagen={require("../imagenes/Infinix/11.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 30 Play" Imagen={require("../imagenes/Infinix/12.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Smart 7 HD" Imagen={require("../imagenes/Infinix/13.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 30" Imagen={require("../imagenes/Infinix/14.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 30i" Imagen={require("../imagenes/Infinix/15.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Smart 7" Imagen={require("../imagenes/Infinix/16.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Zero 5G 2023" Imagen={require("../imagenes/Infinix/17.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 20S" Imagen={require("../imagenes/Infinix/18.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 20 Play" Imagen={require("../imagenes/Infinix/19.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 20" Imagen={require("../imagenes/Infinix/20.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 20 5G" Imagen={require("../imagenes/Infinix/21.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 12" Imagen={require("../imagenes/Infinix/22.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Zero 20" Imagen={require("../imagenes/Infinix/23.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Zero Ultra" Imagen={require("../imagenes/Infinix/24.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 12i 2022" Imagen={require("../imagenes/Infinix/25.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 20i" Imagen={require("../imagenes/Infinix/26.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Smart 6 Plus" Imagen={require("../imagenes/Infinix/27.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 12 Pro" Imagen={require("../imagenes/Infinix/28.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 12 Pro" Imagen={require("../imagenes/Infinix/29.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 12 5G" Imagen={require("../imagenes/Infinix/30.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 12 Pro 5G" Imagen={require("../imagenes/Infinix/31.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 12 Play" Imagen={require("../imagenes/Infinix/32.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 12i" Imagen={require("../imagenes/Infinix/33.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 12 Vip" Imagen={require("../imagenes/Infinix/34.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 12i" Imagen={require("../imagenes/Infinix/35.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 12" Imagen={require("../imagenes/Infinix/36.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Smart 6 HD" Imagen={require("../imagenes/Infinix/37.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 12" Imagen={require("../imagenes/Infinix/38.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 11 2022" Imagen={require("../imagenes/Infinix/39.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Zero 5G" Imagen={require("../imagenes/Infinix/40.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Smart 5 Pro" Imagen={require("../imagenes/Infinix/41.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 11i" Imagen={require("../imagenes/Infinix/42.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 11 Play" Imagen={require("../imagenes/Infinix/43.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 11s" Imagen={require("../imagenes/Infinix/44.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 11" Imagen={require("../imagenes/Infinix/45.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Smart 6" Imagen={require("../imagenes/Infinix/46.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 11 Pro" Imagen={require("../imagenes/Infinix/47.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 11S" Imagen={require("../imagenes/Infinix/48.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 11" Imagen={require("../imagenes/Infinix/49.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Zero X Pro" Imagen={require("../imagenes/Infinix/50.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Zero X" Imagen={require("../imagenes/Infinix/51.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Zero X Neo" Imagen={require("../imagenes/Infinix/52.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 10i" Imagen={require("../imagenes/Infinix/53.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 10" Imagen={require("../imagenes/Infinix/54.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Note 10 Pro" Imagen={require("../imagenes/Infinix/55.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 10T" Imagen={require("../imagenes/Infinix/56.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 10s" Imagen={require("../imagenes/Infinix/57.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Smart 5" Imagen={require("../imagenes/Infinix/58.jpg")} Href="#" />
              <Cards2 Nombre="Infinix Hot 10 Play" Imagen={require("../imagenes/Infinix/59.jpg")} Href="#" />
            </div>


            <div className={input6}>
            <div className="equis" onClick={SpanwAlcatel}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </div>
              <Cards2 Nombre="Alcatel 1B" Imagen={require("../imagenes/Alcatel/1.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 305" Imagen={require("../imagenes/Alcatel/2.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel 1" Imagen={require("../imagenes/Alcatel/3.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel 1L" Imagen={require("../imagenes/Alcatel/4.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel 1L Pro" Imagen={require("../imagenes/Alcatel/5.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel 1S" Imagen={require("../imagenes/Alcatel/6.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel 1SE Lite" Imagen={require("../imagenes/Alcatel/7.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel 1V" Imagen={require("../imagenes/Alcatel/8.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel 3L" Imagen={require("../imagenes/Alcatel/9.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel Go Flip 4" Imagen={require("../imagenes/Alcatel/10.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 20 Pro 5G" Imagen={require("../imagenes/Alcatel/11.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 20 R 5G" Imagen={require("../imagenes/Alcatel/12.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 20 SE" Imagen={require("../imagenes/Alcatel/13.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 205" Imagen={require("../imagenes/Alcatel/14.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 20B" Imagen={require("../imagenes/Alcatel/15.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 20E" Imagen={require("../imagenes/Alcatel/16.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 20L" Imagen={require("../imagenes/Alcatel/17.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 20L+" Imagen={require("../imagenes/Alcatel/18.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 20R 5G" Imagen={require("../imagenes/Alcatel/19.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 20Y" Imagen={require("../imagenes/Alcatel/20.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL L10 Pro" Imagen={require("../imagenes/Alcatel/21.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL L7" Imagen={require("../imagenes/Alcatel/22.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel 1B" Imagen={require("../imagenes/Alcatel/23.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel 1S" Imagen={require("../imagenes/Alcatel/24.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel 1SE" Imagen={require("../imagenes/Alcatel/25.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel 1V" Imagen={require("../imagenes/Alcatel/26.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel 3L" Imagen={require("../imagenes/Alcatel/27.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel 3X" Imagen={require("../imagenes/Alcatel/28.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 10 5G" Imagen={require("../imagenes/Alcatel/29.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 10 Plus" Imagen={require("../imagenes/Alcatel/30.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 10 Pro" Imagen={require("../imagenes/Alcatel/31.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 10 SE" Imagen={require("../imagenes/Alcatel/32.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 10L" Imagen={require("../imagenes/Alcatel/33.jpg")} Href="#" />
              <Cards2 Nombre="Alcatel TCL 20 5G" Imagen={require("../imagenes/Alcatel/34.jpg")} Href="#" />
            </div>


            <div className={input7}>
            <div className="equis" onClick={SpanwNokia}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </div>
              <Cards2 Nombre="Nokia G22" Imagen={require("../imagenes/Nokia/1.jpg")} Href="#" />
              <Cards2 Nombre="Nokia G42 5G" Imagen={require("../imagenes/Nokia/2.jpg")} Href="#" />
              <Cards2 Nombre="Nokia X30 5G" Imagen={require("../imagenes/Nokia/3.jpg")} Href="#" />
              <Cards2 Nombre="Nokia G60 5G" Imagen={require("../imagenes/Nokia/4.jpg")} Href="#" />
              <Cards2 Nombre="Nokia G50" Imagen={require("../imagenes/Nokia/5.jpg")} Href="#" />
              <Cards2 Nombre="Nokia G21" Imagen={require("../imagenes/Nokia/6.jpg")} Href="#" />
              <Cards2 Nombre="Nokia G11" Imagen={require("../imagenes/Nokia/7.jpg")} Href="#" />
              <Cards2 Nombre="Nokia G11 Plus" Imagen={require("../imagenes/Nokia/8.jpg")} Href="#" />
              <Cards2 Nombre="Nokia XR20" Imagen={require("../imagenes/Nokia/9.jpg")} Href="#" />
              <Cards2 Nombre="Nokia X20" Imagen={require("../imagenes/Nokia/10.jpg")} Href="#" />
              <Cards2 Nombre="Nokia X10" Imagen={require("../imagenes/Nokia/11.jpg")} Href="#" />
              <Cards2 Nombre="Nokia G20" Imagen={require("../imagenes/Nokia/12.jpg")} Href="#" />
              <Cards2 Nombre="Nokia C21 Plus" Imagen={require("../imagenes/Nokia/13.jpg")} Href="#" />
              <Cards2 Nombre="Nokia C32" Imagen={require("../imagenes/Nokia/14.jpg")} Href="#" />
              <Cards2 Nombre="Nokia C22" Imagen={require("../imagenes/Nokia/15.jpg")} Href="#" />
              <Cards2 Nombre="Nokia C12" Imagen={require("../imagenes/Nokia/16.jpg")} Href="#" />
              <Cards2 Nombre="Nokia C2 2E" Imagen={require("../imagenes/Nokia/1.jpg")} Href="#" />
            </div>

              
            <section className="imagen"></section>
        </div>
    </div>
  )
}

export default Header;
