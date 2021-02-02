import React from 'react';
import ModeHeader from "../modeHeader";
const PropertiesJson = require("../json/properties.json");
const DictJson = require("../json/dict.json");

function Storages() {
    const language = PropertiesJson.language;

    const localComplete = JSON.parse(localStorage.getItem("hgp-storages"));
    const prefComplete = PropertiesJson.storages;
    let complete = localComplete ? localComplete : prefComplete;
    
    const clickEvent = (e) => {
        const target = e.target.classList[0];
            const propTarget = target.split("-");
            let propCat = propTarget[0];
            let propIncr = propTarget[1];
        const maxMin = /fridgemin|fridgemax|freezermin|freezermax|pantrymin|pantrymax/;
        const capValue = /fridge|freezer|pantry/;
        if(target.match(/-plus|-minus/) && propCat.match(capValue) && !propCat.match(maxMin)) {
            const valueId = propCat + '-value';
            const value = document.getElementById(valueId);
            if (propIncr === "plus" ) {
                complete[propCat].capacity = complete[propCat].capacity + 5;
                value.innerText = complete[propCat].capacity
            }
            if (propIncr === "minus" && complete[propCat].capacity > 5) {
                complete[propCat].capacity = complete[propCat].capacity - 5;
                value.innerText = complete[propCat].capacity;
            }
        }
        if(propIncr.match(/plus|minus/) && propCat.match(maxMin)) {
            const valueId = propCat + '-value';
            const value = document.getElementById(valueId);
            let incr = "";
            let inIncr = true;
            let deIncr = true;

            switch(propCat) {
                case ("fridgemax"): 
                    propCat = "fridge";
                    incr = "tMax";
                    // deIncr = complete[propCat].tMin < complete[propCat].tMax;
                    break;
                case ("fridgemin"): 
                    propCat = "fridge";
                    incr = "tMin";
                    // inIncr = complete[propCat].tMin < complete[propCat].tMax;
                    break;
                case ("freezermax"): 
                    propCat = "freezer";
                    incr = "tMax";
                    // deIncr = complete[propCat].tMin < complete[propCat].tMax;
                    break;
                case ("freezermin"): 
                    propCat = "freezer";
                    incr = "tMin";
                    // inIncr = complete[propCat].tMin < complete[propCat].tMax;
                    break;
                case ("kitchen0max"): 
                    propCat = "kitchen0";
                    incr = "tMax";
                    // deIncr = complete[propCat].tMin < complete[propCat].tMax;
                    break;
                case ("kitchen0min"): 
                    propCat = "kitchen0";
                    incr = "tMin";
                    // inIncr = complete[propCat].tMin < complete[propCat].tMax;
                    break;
                case ("kitchen1max"): 
                    propCat = "kitchen1";
                    incr = "tMax";
                    // deIncr = complete[propCat].tMin < complete[propCat].tMax;
                    break;
                case ("kitchen1min"): 
                    propCat = "kitchen1";
                    incr = "tMin";
                    // inIncr = complete[propCat].tMin < complete[propCat].tMax;
                    break;
                case ("pantrymax"): 
                    propCat = "pantry";
                    incr = "tMax";
                    // deIncr = complete[propCat].tMin < complete[propCat].tMax;
                    break;
                case ("pantrymin"): 
                    propCat = "pantry";
                    incr = "tMin";
                    // inIncr = complete[propCat].tMin < complete[propCat].tMax;
                    break;
                case ("cellarmax"): 
                    propCat = "cellar";
                    incr = "tMax";
                    // deIncr = complete[propCat].tMin < complete[propCat].tMax;
                    break;
                case ("cellarmin"): 
                    propCat = "cellar";
                    incr = "tMin";
                    // inIncr = complete[propCat].tMin < complete[propCat].tMax;
                    break;
                default:
                console.log(propCat, incr)
                    break
            }   
            if (propIncr === "plus" && complete[propCat][incr] < 30 && deIncr) {
                complete[propCat][incr] = complete[propCat][incr] + 1;
                value.innerText = complete[propCat][incr]
            }
            if (propIncr === "minus" && complete[propCat][incr] > -30 && inIncr) {
                complete[propCat][incr] = complete[propCat][incr] - 1;
                value.innerText = complete[propCat][incr];
            }
        }

        localStorage.setItem("hgp-storages", JSON.stringify(complete));
    }

// "storages": {"names": ["fridge", "freezer", "kitchen0", "kitchen1", "kitchen2", "cellar0", "cellar1" ],
//     "fridge":{"tMax": 6, "tMin": 1, "capacity": 200}, 
//     "freezer":{"tMax": -5, "tMin": -25, "capacity": 160}, 
//     "kitchen0":{"tMax": 25, "tMin": 18, "capacity":  250}, 
//     "kitchen1":{"tMax": 25, "tMin": 18, "capacity": 200}, 
//     "pantry":{"tMax": 18, "tMin": 10, "capacity": 100}, 
//     "cellar":{"tMax": 15, "tMin": 5, "capacity": 500},
//     "storageDef":{"tMax": 25, "tMin": 15, "capacity": 50}},

    const fridgeBlock = () =>{
        return (
        <div className="fridge">
         <div className="fridge-icon"></div>
         <div className="fridge-header">{DictJson[language].fridge}</div> 
         <div className="fridge-subheader">{DictJson[language].capacity}</div> 
         <div className="fridge-switcher"> 
         <div onClick={clickEvent} className="fridge-minus material-icons">remove_circle</div> 
         <div id="fridge-value" className="fridge-value">{complete.fridge.capacity}</div>
         <div onClick={clickEvent} className="fridge-plus material-icons">add_circle</div>
        </div>
        <div className="fridgetemp-header">{DictJson[language].temp}</div> 
        <div className="fridgetemp-subheader">{DictJson[language].tMin + " - " +DictJson[language].tMax}</div> 
         <div className="fridgetemp-switcher"> 
        <div onClick={clickEvent} className="fridgemin-minus material-icons">remove_circle</div>
        <div id="fridgemin-value" className="fridgemin-value">{complete.fridge.tMin}</div>
        <div onClick={clickEvent} className="fridgemin-plus material-icons">add_circle</div>
        <div onClick={clickEvent} className="fridgemax-minus material-icons">remove_circle</div>
        <div id="fridgemax-value" className="fridgemax-value">{complete.fridge.tMax}</div>
        <div onClick={clickEvent} className="fridgemax-plus material-icons">add_circle</div>
        </div>
        </div>)
    } 

    const freezerBlock = () =>{
        return (
        <div className="freezer">
         <div className="freezer-icon"></div>
         <div className="freezer-header">{DictJson[language].freezer}</div> 
         <div className="freezer-subheader">{DictJson[language].capacity}</div> 
         <div className="freezer-switcher"> 
         <div onClick={clickEvent} className="freezer-minus material-icons">remove_circle</div> 
         <div id="freezer-value" className="freezer-value">{complete.freezer.capacity}</div>
         <div onClick={clickEvent} className="freezer-plus material-icons">add_circle</div>
        </div>
        <div className="freezertemp-header">{DictJson[language].temp}</div> 
        <div className="freezertemp-subheader">{DictJson[language].tMin + " - " +DictJson[language].tMax}</div> 
         <div className="freezertemp-switcher"> 
        <div onClick={clickEvent} className="freezermin-minus material-icons">remove_circle</div>
        <div id="freezermin-value" className="freezermin-value">{complete.freezer.tMin}</div>
        <div onClick={clickEvent} className="freezermin-plus material-icons">add_circle</div>
        <div onClick={clickEvent} className="freezermax-minus material-icons">remove_circle</div>
        <div id="freezermax-value" className="freezermax-value">{complete.freezer.tMax}</div>
        <div onClick={clickEvent} className="freezermax-plus material-icons">add_circle</div>
        </div>
        </div>)
    } 

    const pantryBlock = () =>{
        return (
        <div className="pantry">
         <div className="pantry-icon"></div>
         <div className="pantry-header">{DictJson[language].pantry}</div> 
         <div className="pantry-subheader">{DictJson[language].capacity}</div> 
         <div className="pantry-switcher"> 
         <div onClick={clickEvent} className="pantry-minus material-icons">remove_circle</div> 
         <div id="pantry-value" className="pantry-value">{complete.pantry.capacity}</div>
         <div onClick={clickEvent} className="pantry-plus material-icons">add_circle</div>
        </div>
        <div className="pantrytemp-header">{DictJson[language].temp}</div> 
        <div className="pantrytemp-subheader">{DictJson[language].tMin + " - " +DictJson[language].tMax}</div> 
         <div className="pantrytemp-switcher"> 
        <div onClick={clickEvent} className="pantrymin-minus material-icons">remove_circle</div>
        <div id="pantrymin-value" className="pantrymin-value">{complete.pantry.tMin}</div>
        <div onClick={clickEvent} className="pantrymin-plus material-icons">add_circle</div>
        <div onClick={clickEvent} className="pantrymax-minus material-icons">remove_circle</div>
        <div id="pantrymax-value" className="pantrymax-value">{complete.pantry.tMax}</div>
        <div onClick={clickEvent} className="pantrymax-plus material-icons">add_circle</div>
        </div>
        </div>)
    } 
    
 
    // let childrenBlock = (<div className="children">
    //     <div className="children-header">{childrenTitle}</div> 
    //     <div className="children-icon"></div> 
    //     <div className="children-switcher"> 
    //     <div onClick={clickEvent} className="children-minus material-icons">remove_circle</div>
    //     <div id="children-value" className="children-value">{complete.children}</div>
    //     <div onClick={clickEvent} className="children-plus material-icons">add_circle</div>
    //     </div>
    //     <div className="childrentemp-max-min-header">{childrentemp-max-minTitle}</div> 
    //     <div className="childrentemp-max-min-switcher"> 
    //     <div onClick={clickEvent} className="childrentemp-max-min-minus material-icons">remove_circle</div>
    //     <div id="childrentemp-max-min-value" className="childrentemp-max-min-value">{complete.childrentemp-max-min}</div>
    //     <div onClick={clickEvent} className="childrentemp-max-min-plus material-icons">add_circle</div>
    //     </div>
    //     </div>)

    // let pets = [];
    // complete.pets.forEach((pet, i) => {
    //     const minusClassName = pet + "-minus material-icons";
    //     const valueClassName = pet + "-value";
    //     const petClassName = pet + " pet";
    //     const block = ( <div id={pet} key={petClassName} className={ petClassName }>
    //     <div key={valueClassName} className="pets-switcher"> 
    //     <div key={valueClassName} className={valueClassName}>{pet}</div>
    //     <div onClick={clickEvent} key={minusClassName} className={minusClassName}>remove_circle</div>
    //     </div>
    //     </div>
    //     )
    //     pets.push(block)
    // })
    // let petsBlock = ( <div className="pets">
    //     <div className="pets-header">{petsTitle}
    //     <div onClick={clickEvent} className="pets-plus material-icons">add_circle</div>
    //     </div> 
    //     <div id="pets-icon" className="pets-icon"></div> 
    //     <div className="pets-list"> 
    //     {pets}
    //     </div>
    //     </div>)

  return (
        <div className = "storages">
    <ModeHeader mode={ 'storages' }/>            
    <div className='content'>
            {fridgeBlock()}
            {freezerBlock()}
            {pantryBlock()}
            {/* {childrenBlock} */}
            {/* {petsBlock} */}
    </div>
    </div>
  );
}

export default Storages;
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
