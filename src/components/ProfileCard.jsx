import profileImg from "../assets/man2.jpg";
import '../profileCard.css';

function ProfileCard(){
   return (
        <div className="container">
            <img className="profile-img" src={profileImg} alt="Ruchi" />

            <h2>Ruchi</h2>
            <h4>Frontend Developer</h4>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, architecto.
            </p>

            <button>Contact Me</button>
        </div>
    );
}

export default ProfileCard;