import botao from '../../assets/img/notification-icon.svg';

import './styles.css';

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={botao} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;
