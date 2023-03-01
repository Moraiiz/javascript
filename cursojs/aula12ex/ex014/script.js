function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#e4f4f3'
    }else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#fbb672'
    }else {
        //BOA NOITE
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#1a3440'
    }
}