
    const $days = document.getElementById('days'),
    $hours = document.getElementById('hours'),
    $minutes = document.getElementById('minutes'),
    $seconds = document.getElementById('seconds'),
    $finalMessage = document.querySelector('.final-sms');
    let boton = document.querySelector("#btn")

    boton.addEventListener("click", () => {

        Swal.fire({
          title: '<strong>VER LA UBICACION <u></u></strong>',
          icon: 'success',
          html:
            'INGRESA, ' +
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.632311427157!2d-58.581754499999995!3d-34.562863899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb98dc99f76cd%3A0x128b07649978c3c5!2sN%20%26%20A%20Celebraciones!5e0!3m2!1ses-419!2sar!4v1673815967877!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> ' +
            'and other HTML tags',
            
            
        })
      });


   
    //Fecha a futuro
const countdownDate = new Date('Mar 11 2023 18:43:30 GMT-0300').getTime();

let interval = setInterval(function(){
    //Obtener fecha actual y milisegundos
    const now = new Date().getTime();

    //Obtener las distancias entre ambas fechas
    let distance = countdownDate - now;

    //Calculos a dias-horas-minutos-segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

    //Escribimos resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    //Cuando llegue a 0
    if(distance < 0){
        clearInterval(interval);
        $finalMessage.style.transform = 'translateY(0)';
    }
}, 1000);