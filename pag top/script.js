function carregar() {
    var msg = window.document.getElementById('msg') 
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    
    if(minuto < 10){
       minuto = '0' + minuto
    }
   
    if (hora >= 0 && hora < 12){
       // console.log('Bom dia!')
        img.innerHTML = '<img src="manha.jpeg">'
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora <= 18) {
      //  console.log('Boa tarde!')
      img.innerHTML = '<img src="tarde.jpeg">'

    } else {
       // console.log('Boa Noite')
       img.innerHTML = '<img src="noite.jpeg">'

    }

} 