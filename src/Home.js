import LinkButton from './LinkButton';
import Resume from './images/Resume_Steve_Black_2021.pdf';

const Home = () => {
    const ButtonLink1 = {
        title: "Linkedin",
        link: 'https://www.linkedin.com/in/steve-black-a661814/'
    }
    const ButtonLink2 = {
        title: "Github",
        link: 'https://github.com/stevebecmpe'
    }
    const ButtonLink3 = {
        title: "Resume",
        link: Resume
    }
    const ButtonLink4 = {
        title: "Contact",
        link: 'mailto:steveblackecmpe@gmail.com?subject=Contact'
    }

    return (
        <div className="home">
           <h1 className="mainHeader">ABOUT ME</h1>
           <p>Finding meaning in a sea of data is what I truly enjoy and what has brought me back to coding. After years of working in separate systems of standalone formats, learning to program what was needed in the moment, leads to a desire to make it all work together in a better way. Solving these types of problems is the direction I want to go. Learning to code and joining the community was my first step. "Hello World". I am here for the new way to solve manufacturing platform data incompatibility.
           </p>
           <br></br>
            <LinkButton  LinkButtonContent={ButtonLink1}/>
            <LinkButton  LinkButtonContent={ButtonLink2}/>
            <LinkButton  LinkButtonContent={ButtonLink3}/>
            <LinkButton  LinkButtonContent={ButtonLink4}/>
            <br></br>
        </div>
    );
}

export default Home;