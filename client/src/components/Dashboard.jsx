import React, { useEffect ,useState} from 'react'
import { useNavigate  } from 'react-router-dom';
import DashboardWrapper from '../styles/DashboardWrapper';
import { MdOutlineEditNote,MdDeleteOutline,MdAdd } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import AddCandidate from './CreateCandidate';
import UpdateCandidate from './UpdateCandidate';
import LoadingSpinner from './Loader';
const Dashboard = () => {
  const [candidate,setCandidate] = useState([]);
  const [addCand,setAddCand] = useState(false);
  const [updateCandidate,setUpdateCandidate]=useState(false);
  const [singleCandidate,setSingleCandidate]=useState([]);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getCandidates();
    }else{
      navigate('/login');
    }
  },[]);

  const getCandidates = async () => {
    
    try {
      setLoading(true);
      const response = await fetch('http://localhost:1000/get-candidate', {
        method: 'GET',
        headers: {
          'x-access-token': localStorage.getItem('token')
        }
     })
     const data = await response.json();
     setCandidate(data.candidate);
    } catch (error) {
      toast.error("Cannot get candidate list", {
        position: "top-right",
        duration: 4000,
        icon: '👏',
      })
    }finally{
      setLoading(false);
    }
  
  }

  const handleEdit = (e,item) => {
    setUpdateCandidate(true);
    setSingleCandidate(item);
  }
  const handleDelete =async (e,item) => {
    console.log(item.email,'item');
    const response = await fetch('http://localhost:1000/delete-candidate', 
    {
      method: 'POST',
      headers: {
        'x-access-token': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:item.email
      })
    })
    if(response.status == 200){
      toast.success("Candidate deleted", {
        position: "top-right",
        duration: 4000,
        icon: '👏',
      })
      getCandidates();
    }else {
      toast.error("Failed to delete", {
        position: "top-right",
        duration: 4000,
        icon: '👏',
      })
    }

    console.log('item',response.json)
  }
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <DashboardWrapper>
      {loading ? <LoadingSpinner /> : 
      <>
      {updateCandidate ? <UpdateCandidate setUpdateCandidate={setUpdateCandidate} singleCandidate={singleCandidate} getCandidates={getCandidates}/> : addCand ? <AddCandidate setAddCand={setAddCand} getCandidates={getCandidates}/> :
      <div className='container'>
        <h2>Dashboard</h2>
      <div className="heading">
        <p>Candidate List :{candidate.length}</p>
      <button className='btn-logout' onClick={handleLogout}>Logout</button>
      </div>
        <ul>
          {candidate.map((item,index)=>{
            return(
              <div className="list" key={index}>
                <li style={{width:"30px"}} >{index+1}</li>
                <li >{item.name}</li>
                <li >{item.dob}</li>
                <li >{item.result}</li>
                <div className='edit-delete'>
                  <li onClick={(e)=>handleEdit(e,item)}  >{<MdOutlineEditNote />}</li>
                  <li onClick={(e)=>handleDelete(e,item)}  >{<MdDeleteOutline />}</li>
                </div>
              </div>
              
              )
              
            })}
        </ul>
        <div style={{width:"100%"}}>
        <p style={{float:"left",cursor:"pointer",color:"#43B0EF"}} onClick={()=> setAddCand(true)}><MdAdd />Add New Candidate</p>
        </div>
        
      </div>
      }
    
            </>
}
    </DashboardWrapper>
  )
}

export default Dashboard