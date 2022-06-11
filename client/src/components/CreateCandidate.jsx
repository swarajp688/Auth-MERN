import styled from "styled-components";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import AddCandidateWrapper from "../styles/AddCandidate";
const AddCandidate = ({ setAddCand, getCandidates }) => {
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidateAddress, setCandidateAddress] = useState("");
  const [dob, setDob] = useState();
  const [state, setState] = useState("");
  const [age, setAge] = useState(0);
  const [result, setResult] = useState("");

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

  const addCandidate = async (e) => {
    e.preventDefault();
    if(getAge(dob) != age){
      return toast.error("Age or DOB is not correct", {
        position: "top-right",
        duration: 2000,
      });
    }
    const response = await fetch("http://localhost:1000/add-candidate", {
      method: "POST",
      headers: {
        "x-access-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: candidateName,
        adress: candidateAddress,
        email: candidateEmail,
        dob,
        state,
        age,
        result,
      }),
    });
    console.log(response.status, "response");
    if (response.status == 200) {
      setAddCand(false);
      getCandidates();
    } else {
      toast.error("Cannot Add Candidate", {
        position: "top-right",
        duration: 4000,
        icon: "👏",
      });
    }
  };
  return (
    <AddCandidateWrapper>
        <div className="container">
          <h2 style={{marginRight:"50px"}}>Create Candidate</h2>
      <form className="candidate-form" onSubmit={addCandidate}>
        <div className="wrap-div">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="candidateName"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            required
          />
        </div>

        <div className="wrap-div">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="candidateEmail"
            value={candidateEmail}
            onChange={(e) => setCandidateEmail(e.target.value)}
            required
          />

        </div>

        <div className="wrap-div">
          <label htmlFor="">Address:</label>
          <input
            type="text"
            name="candidateAddress"
            value={candidateAddress}
            onChange={(e) => setCandidateAddress(e.target.value)}
            required
          />
        </div>
        <div className="wrap-div">
          <label htmlFor="">Dob:</label>
          <input
            type="date"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          </div>
        <div className="wrap-div">
        <label >State</label>
        <input
          type="text"
          name="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        </div>
        <div className="wrap-div">
          <label htmlFor="">Age:</label>
          <input
          className="age"
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="wrap-div">
          <label htmlFor="">Result:</label>
          <input
            type="text"
            name="result"
            value={result}
            onChange={(e) => setResult(e.target.value)}
            required
          />
        </div>
      
      <div className="btn-wrapper">
        <button className="btn-add" type="submit">Add Candidate</button>
        <button className="cancel-add" onClick={()=>setAddCand(false)}>Cancel</button>

      </div>
      </form>
      </div>
      
    </AddCandidateWrapper>
  );
};

export default AddCandidate;
