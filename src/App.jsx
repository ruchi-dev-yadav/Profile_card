import MyProfileCard from "./components/ProfileCard";
import img from "./assets/man2.jpg";
function App(){
  return <>
  <div className="profileContainer">
<MyProfileCard
    name="John"
    role="Laravel Developer"
    btn="Contact Me"
    about="Experienced in building secure and scalable web applications using Laravel and PHP."
    profileImg={img}
/>

<MyProfileCard
    name="Doe"
    role="Frontend Developer"
    btn="Hire Me"
    about="Passionate about creating responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React."
    profileImg="man1.avif"
/>

<MyProfileCard
    name="ABC"
    role="Java Developer"
    btn="View Profile"
    about="Focused on developing reliable backend applications using Java, OOP principles, and database integration."
    profileImg={img}

/>

<MyProfileCard
    name="King"
    role="Chief Executive Officer"
    btn="Contact Me"
    about="Leads business strategy, drives innovation, and focuses on sustainable business growth."
    profileImg="man1.avif"

/>

<MyProfileCard
    name="Huge"
    role="Senior Software Developer"
    btn="View Portfolio"
    about="Experienced in software architecture, application development, debugging, and code optimization."
    profileImg={img}

/>

<MyProfileCard
    name="Mohan"
    role="Project Manager"
    btn="Get in Touch"
    about="Coordinates teams, manages project timelines, and ensures successful project delivery."
    profileImg={img}

/>

<MyProfileCard
    name="Rakesh"
    role="Software Developer"
    btn="Contact Me"
    about="Builds efficient software solutions and enjoys solving technical problems through clean code."
    profileImg="man1.avif"

/>

<MyProfileCard
    name="Ramya"
    role="Human Resources Manager"
    btn="Join Our Team"
    about="Focuses on talent acquisition, employee engagement, and creating a positive workplace culture."
    profileImg={img}

/>
  </div>

  </>;
}

export default App;