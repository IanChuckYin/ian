const MIN_WINDOW_SIZE = 760;

const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < MIN_WINDOW_SIZE;
}

export {
    isMobile
}