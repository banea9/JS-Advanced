function notify(message) {
    const SELECTORS = {
        notification: '#notification'
    }
    const DISPLAY_STYLES = {
        block: 'block',
        none: 'none'
    }
    const notificationDiv = document.querySelector(SELECTORS.notification);notificationDiv.textContent = message;
    notificationDiv.style.display = DISPLAY_STYLES.block;
    
    const hideNotification = () => {
        notificationDiv.style.display = DISPLAY_STYLES.none;
    }

    setTimeout(hideNotification, 2000)
}