const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const color = e.currentTarget.classList;
        let colorTheme = '#ff1756';
        switch (color[1]) {
            case 'btn1':
                colorTheme = '#3498db';
                break;
            case 'btn2':
                colorTheme = '#ff1756';
                break;
            case 'btn3':
                colorTheme = '#1cb65d';
                break;
            case 'btn4':
                colorTheme = '#8e44ad';
                break;
            case 'btn5':
                colorTheme = '#f4b932';
                break;
        
            default:
                break;
        }
        theme.style.setProperty('--theme-color', colorTheme);
    })
})