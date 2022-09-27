import Avatar from '../img/profile.jpg'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Someone" />
            <p className="title">Desenvolvedor</p>
            <p>Redes sociais</p>
            <p>Informações de contato</p>
            <a href="" className="btn">Currículo</a>
        </aside>
    );
}

export default Sidebar
