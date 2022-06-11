import React,{useState} from 'react'
import UpdateCandidateWrapper from "../styles/UpdateCandidateWrapper";
import toast, { Toaster } from "react-hot-toast";
const UpdateCandidate = ({singleCandidate,setUpdateCandidate,getCandidates}) => {
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
  const updateCandidate = async (e) => {
    e.preventDefault();
    if(getAge(dob) != age){
      return toast.error("Age or DOB is not correct", {
        position: "top-right",
        duration: 2000,
      });
    }
    const response = await fetch("http://localhost:1000/update-candidate/"+singleCandidate._id, {
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
        prevEmail:singleCandidate.email,
        prevData:singleCandidate
      }),
    });

    console.log(response, "response");
    if (response.status == 200) {
        toast.success("Candidate Updated", {
            position: "top-right",
            duration: 4000,
            icon: "👏",
          });
      getCandidates();
      setUpdateCandidate(false);
    } else {
      toast.error("Error in updating info", {
        position: "top-right",
        duration: 4000,
        icon: "👏",
      });
    }
  };
  
  return (
    <UpdateCandidateWrapper>
        <div className="container">
          <h2 style={{marginRight:"50px"}}>Upgrade Candidate</h2>
      <form className="candidate-form" onSubmit={updateCandidate}>
        <div className="wrap-div">
          <label htmlFor="">Name:</label>
          <input
            placeholder={singleCandidate.name}
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
          placeholder={singleCandidate.email}
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
          placeholder={singleCandidate.address}
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
          placeholder={singleCandidate.dob}
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
        placeholder={singleCandidate.state}
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
          placeholder={singleCandidate.age}
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
          placeholder={singleCandidate.result}
            type="text"
            name="result"
            value={result}
            onChange={(e) => setResult(e.target.value)}
            required
          />
        </div>
      
      <div className="btn-wrapper">
        <button className="btn-add" type="submit">Update Details</button>
        <button className="cancel-add" onClick={()=>setUpdateCandidate(false)}>Cancel</button>

      </div>
      </form>
      </div>
      
    </UpdateCandidateWrapper>
  )
}

export default UpdateCandidate