import classes from "./RequestForm.module.css";
import { useState } from "react";

const RequestForm = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameValidation, setFirstNameValidation] = useState(true);
  const [firstNameChecker, setFirstNameChecker] = useState("");
  const [firstNameClass, setFirstNameClass] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameValidation, setLastNameValidation] = useState(true);
  const [lastNameChecker, setLastNameChecker] = useState("");
  const [lastNameClass, setLastNameClass] = useState("");

  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);
  const [emailChecker, setEmailChecker] = useState("");
  const [emailClass, setEmailClass] = useState("");


  const [country, setCountry] = useState("");
  const [countryValidation, setCountryValidation] = useState(true);
  const [countryChecker, setCountryChecker] = useState("");


  const [help, setHelp] = useState("");
  const [helpValidation, setHelpValidation] = useState(true);
  const [helpChecker, setHelpChecker] = useState("");

  
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.trim() === "" 
      || !isNaN(+e.target.value) 
      || e.target.value.trim().length < 3
      || e.target.value.trim().length > 25 ) {
        setFirstNameClass(`${classes["invalid"]}`)
      } else {
        setFirstNameClass("");
      };
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    if (e.target.value.trim() === "" 
      || !isNaN(+e.target.value) 
      || e.target.value.trim().length < 3
      || e.target.value.trim().length > 25 ) {
      setLastNameClass(`${classes["invalid"]}`)
    } else {
      setLastNameClass("");
    };
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    if (e.target.value.trim() === "" 
      || !isNaN(+e.target.value) 
      || e.target.value.trim().length < 8
      || e.target.value.trim().length > 30
      || !e.target.value.trim().includes("@") ) {
      setEmailClass(`${classes["invalid"]}`)
    } else {
      setEmailClass("");
    };
  };


  const countryHandler = (e) => {
    setCountry(e.target.value);
  };

  const helpHandler = (e) => {
    setHelp(e.target.value);
  };

  const formSubmitionHandler = (e) => {
    e.preventDefault();
    if (firstName.trim() === "") {
      setFirstNameValidation(false);
      setFirstNameChecker("Firstname can't be EMPTY ''");
    } else if (firstName.trim().length < 3) {
      setFirstNameValidation(false);
      setFirstNameChecker("Firstname letters must be MORE THAN 3")
    } else if (firstName.trim().length > 25) {
      setFirstNameValidation(false);
      setFirstNameChecker("Firstname letters must be LESS THAN 25")
    } else if (!isNaN(+firstName.trim())) {
      setFirstNameValidation(false);
      setFirstNameChecker("Firstname can't be NUMBER")
    }else {
      setFirstNameValidation(true);
      setFirstNameChecker("accepted");
      setFirstName("");
    };



    if (lastName.trim() === "") {
      setLastNameValidation(false);
      setLastNameChecker("Lastname can't be EMPTY ''");
    } else if (lastName.trim().length < 3) {
      setLastNameValidation(false);
      setLastNameChecker("Lastname letters must be MORE THAN 3")
    } else if (lastName.trim().length > 25) {
      setLastNameValidation(false);
      setLastNameChecker("Lastname letters must be LESS THAN 25")
    } else if (!isNaN(+lastName.trim())) {
      setLastNameValidation(false);
      setLastNameChecker("Lastname can't be NUMBER")
    } else {
      setLastNameValidation(true);
      setLastNameChecker("accepted");
      setLastName("");
    };




    if (email.trim() === "") {
      setEmailValidation(false);
      setEmailChecker("Email can't be EMPTY ''");
    } else if (email.trim().length < 8) {
      setEmailValidation(false);
      setEmailChecker("Email letters must be MORE THAN 8")
    } else if (email.trim().length > 40) {
      setEmailValidation(false);
      setEmailChecker("Email letters must be LESS THAN 40")
    } else if (!isNaN(+email.trim())) {
      setEmailValidation(false);
      setEmailChecker("Email can't be NUMBER")
    } else if (!email.trim().includes("@")) {
      setEmailValidation(false);
      setEmailChecker("Email must include '@'");  
    } else if (email.trim().startsWith("@") || email.trim().endsWith("@")) {
      setEmailValidation(false);
      setEmailChecker("Email can't START or END by '@'");
    } else {
      setEmailValidation(true);
      setEmailChecker("accepted");
      setEmail("");
    };



    if (country === "") {
      setCountryValidation(false);
      setCountryChecker("Select Required");
    } else {
      setCountryValidation(true);
      setCountryChecker("accepted");
    };


    if (help === "") {
      setHelpValidation(false);
      setHelpChecker("Select Required");
    } else {
      setHelpValidation(true);
      setHelpChecker("accepted");
    };
  };



  return (
		<form onSubmit={formSubmitionHandler} className={classes["request-form"]}>
			<div className={`${classes["input"]} ${classes["first-name"]}`}>
				<label>First name*</label>
				<input className={firstNameClass} onChange={firstNameHandler} value={firstName} type="text" />
        {! firstNameValidation && <p className={classes.invalidP}>{firstNameChecker}</p>}
        {firstNameValidation && <p className={classes.validP}>{firstNameChecker}</p>}
			</div>
			<div className={`${classes["input"]} ${classes["last-name"]}`}>
				<label>Last name*</label>
				<input className={lastNameClass} onChange={lastNameHandler} value={lastName} type="text" />
        {! lastNameValidation && <p className={classes.invalidP}>{lastNameChecker}</p>}
        {lastNameValidation && <p className={classes.validP}>{lastNameChecker}</p>}
			</div>
			<div className={`${classes["input"]} ${classes["email"]}`}>
				<label>Email*</label>
				<input className={emailClass} onChange={emailHandler} value={email} />
        {! emailValidation && <p className={classes.invalidP}>{emailChecker}</p>}
        {emailValidation && <p className={classes.validP}>{emailChecker}</p>}
			</div>
			<div className={`${classes["input"]} ${classes["country"]}`}>
				<label>Country*</label>
				<select name="country" defaultValue="Please select" onChange={countryHandler}>
					<option value="">Please select</option>
					<option value="egypt">Egypt</option>
					<option value="usa">USA</option>
					<option value="syria">Syria</option>
				</select>
        {! countryValidation && <p className={classes.invalidP}>{countryChecker}</p>}
        {countryValidation && <p className={classes.validP}>{countryChecker}</p>}
			</div>
			<div className={`${classes["input"]} ${classes["how-help"]}`}>
				<label>How we can help?</label>
				<select name="help" defaultValue="Please select" onChange={helpHandler}>
					<option value="">Please select</option>
					<option value="first">I represent a corporation that would like to use Swvl's services</option>
					<option value="second">I represent an educational institution that would like to use Swvl's services</option>
					<option value="third">I represent a government entity that would like to use Swvl's services</option>
					<option value="forth">I would like to work for Swvl</option>
					<option value="fifth">I would like to partner with Swvl</option>
				</select>
        {! helpValidation && <p className={classes.invalidP}>{helpChecker}</p>}
        {helpValidation && <p className={classes.validP}>{helpChecker}</p>}
			</div>
			<button type="submit" className={classes["submit-button"]}>Submit</button>
		</form>
	);
};

export default RequestForm;