// import profileImg from "../assets/man2.jpg";
import '../profileCard.css';

function ProfileCard(props){
   return (
        <div className="container">
            <img className="profile-img" src={props.profileImg} alt="Ruchi" />

            <h2>{props.name}</h2>
            <h4>{props.role}</h4>

            <p>
               {props.about}
            </p>

            <button>{props.btn}</button>
        </div>
    );
}

export default ProfileCard;