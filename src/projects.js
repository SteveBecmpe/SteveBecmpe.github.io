import Card from "./Card"
import ProjectImage1 from './images/WeatherAPP.JPG';
import ProjectImage2 from './images/SickTuneFinder.JPG';
import ProjectImage3 from './images/CS_WI_Button.JPG';

const Projects = () => {

    const Project1 = {
        title: "Weather App",
        body: 'ZipCode Driven Open API that saves search locally',
        image: ProjectImage1,
        link: 'https://stevebecmpe.github.io/ECMPE-Weather-App/'
    }
    const Project2 = {
        title: "Sick Tune Finder",
        body: 'Open API music search APP, with some lyrics. Desktop only',
        image: ProjectImage2,
        link: 'https://stevebecmpe.github.io/SICK-TUNE-FINDER/'
    }
    const Project3 = {
        title: "CS_WI_Button",
        body: 'Single file app, inline css & script, generate buttons given text content, height, and width. Auto loads at 300% for easy copy and paste',
        image: ProjectImage3,
        link: 'https://stevebecmpe.github.io/CS_WI_Buttons/'
    }

    return (
        <div className="home">
           <h1 className="mainHeader">Projects</h1>
           <Card CardContent={Project1} />
           <Card CardContent={Project2} />
           <Card CardContent={Project3} />

        </div>
    );
}

export default Projects;