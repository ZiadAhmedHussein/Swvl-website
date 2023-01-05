import classes from "./ApplyForm.module.css";
import { useState } from "react";

const ApplyForm = () => {
  const [name, setName] = useState("");
  const [nameValidation, setNameValidation] = useState(true);
  const [nameChecker, setNameChecker] = useState("");
  const [nameClass, setNameClass] = useState("");

  const [number, setNumber] = useState("");
  const [numberValidation, setNumberValidation] = useState(true);
  const [numberChecker, setNumberChecker] = useState("");
  const [numberClass, setNumberClass] = useState("");

  const [city, setCity] = useState("");
  const [cityValidation, setCityValidation] = useState(true);
  const [cityChecker, setCityChecker] = useState("");
  const [cityClass, setCityClass] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
    if(
        e.target.value.trim() === "" || 
        !isNaN(+e.target.value) ||
        e.target.value.trim().length < 3 ||
        e.target.value.trim().length > 25 
      ) 
    {
      setNameClass(`${classes["invalid"]}`)
    } else {
      setNameClass("");
    };
  };




  const numberHandler = (e) => {
    setNumber(e.target.value);
    if(
        e.target.value.trim() === "" || 
        isNaN(+e.target.value) ||
        e.target.value.trim().length !== 11 
      ) 
    {
      setNumberClass(`${classes["invalid"]}`)
    } else {
      setNumberClass("");
    };
  };



  const cityHandler = (e) => {
    setCity(e.target.value);
    if(
        e.target.value.trim() === "" || 
        !isNaN(+e.target.value) ||
        e.target.value.trim().length < 3 ||
        e.target.value.trim().length > 20 
      ) 
    {
      setCityClass(`${classes["invalid"]}`)
    } else {
      setCityClass("");
    };
  };


  const formSubmitionHandler = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setNameValidation(false);
      setNameChecker("Name can't be EMPTY ''");
    } else if (name.trim().length < 3) {
      setNameValidation(false);
      setNameChecker("Name letters must be MORE THAN 3")
    } else if (name.trim().length > 25) {
      setNameValidation(false);
      setNameChecker("Name letters must be LESS THAN 25")
    } else if (!isNaN(+name.trim())) {
      setNameValidation(false);
      setNameChecker("Name can't be NUMBER")
    }else {
      setNameValidation(true);
      setNameChecker("accepted");
      setName("");
    };



    if (number.trim() === "") {
      setNumberValidation(false);
      setNumberChecker("Phone number can't be EMPTY ''");
    } else if (number.trim().length !== 11) {
      setNumberValidation(false);
      setNumberChecker("Phone number must be 11 characters")
    }  else if (isNaN(+number.trim())) {
      setNumberValidation(false);
      setNumberChecker("Phone number can't include letters")
    } else {
      setNumberValidation(true);
      setNumberChecker("accepted");
      setNumber("");
    };




    if (city.trim() === "") {
      setCityValidation(false);
      setCityChecker("City can't be EMPTY ''");
    } else if (city.trim().length < 3) {
      setCityValidation(false);
      setCityChecker("City letters must be MORE THAN 3")
    } else if (city.trim().length > 25) {
      setCityValidation(false);
      setCityChecker("City letters must be LESS THAN 25")
    } else if (!isNaN(+city.trim())) {
      setCityValidation(false);
      setCityChecker("City can't be NUMBER")
    } else {
      setCityValidation(true);
      setCityChecker("accepted");
      setCity("");
    };
  }
  return (
    <form onSubmit={formSubmitionHandler} className={classes["apply-form"]}>
      <input className={nameClass} onChange={nameHandler} value={name} type="text" placeholder="Name & Surname" />
      {! nameValidation && <p className={classes.invalidP}>{nameChecker}</p>}
      {nameValidation && <p className={classes.validP}>{nameChecker}</p>}


      <input className={numberClass} onChange={numberHandler} value={number} type="text" placeholder="Phone number #*"/>
      {! numberValidation && <p className={classes.invalidP}>{numberChecker}</p>}
      {numberValidation && <p className={classes.validP}>{numberChecker}</p>}


      <input className={cityClass} onChange={cityHandler} value={city} type="text" placeholder="City*" max="20" />
      {! cityValidation && <p className={classes.invalidP}>{cityChecker}</p>}
      {cityValidation && <p className={classes.validP}>{cityChecker}</p>}
      <button type="submit" className={classes["submit-button"]}>Apply</button>
    </form>
  );
};

export default ApplyForm;