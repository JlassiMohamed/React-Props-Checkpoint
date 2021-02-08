import './App.css';
import profilePhoto from "./assets/profile_photo.jpg";
import Profile from "./profile/Profile";

function App() {
  const handleName = (fullName) =>{
    alert(`${fullName}`)
  }
  const styleImage = {
    width:"13%",
    border: "1px solid #ddd",
    borderRadius: "20px",
    padding: "5px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

  }
  return (
    <div style={{textAlign: "center",}}>
        <span style={{color: "rgba(128, 128, 128, 0.514)",
        fontSize: "smaller"}}>Welcome to my profile page using props</span>
        <Profile fullName="Mohamed Jlassi" 
        bio="After earning my Diploma in Industrial Computer from National School of Engeneers of Carthage, and after having tested more than one profession in different sectors, I chose to enter the web development world to explore my passion for code and testing." profession="Junior Software Developer" handleName={handleName}>
          <img src={profilePhoto} alt="profile photo"  style={styleImage}/>
        </Profile>
    </div>
  );
}

export default App;
