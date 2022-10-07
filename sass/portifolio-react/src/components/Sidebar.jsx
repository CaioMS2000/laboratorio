import Avatar from '../img/profile.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Someone" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks></SocialNetworks>
            <InformationContainer/>
            <a href="" className="btn">Currículo</a>
        </aside>
    );
}

export default Sidebar
