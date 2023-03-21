const showBtn = () => {
    const btn = document.querySelector(".btn__gotop");
    window.addEventListener("scroll", () =>{
        if(window.scrollY > 200)
            btn.hidden = false;
        if(window.scrollY < 200){
            btn.hidden = true;
        }
    });
};

const sendMessage = (nombre,email,asunto,mensaje) => {
    const cuerpoCorreo = 
    `Nombre: ${nombre}%0D%0ACorreo: ${email}%0D%0AMensaje: ${mensaje}%0D%0A`;
    const linkCorreo = `mailto:hypnoz@live.com?subject=${asunto}&body=${cuerpoCorreo}`;
    window.location.href = linkCorreo;
}

export const validaciones ={
    showBtn,
    sendMessage,
};