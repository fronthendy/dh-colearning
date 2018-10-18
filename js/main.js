// Registering ServiceWorker
if ( 'serviceWorker' in navigator ) {
  navigator.serviceWorker.register('https://fronthendy.github.io/dh-colearning/sw.js').then(function(registration) {

    // Registration was successful
    console.log( 'ServiceWorker registration successful. Scope: ' + registration.scope )
  }).catch(function(err) {

    // Registration failed with error
    console.log( 'ServiceWorker registration failed. Error: ' + err);
  });
}

$(document).ready(function(){
  $('.collapsible').collapsible();
  $('.tabs').tabs();
  $('.fixed-action-btn').floatingActionButton();
  document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.fixed-action-btn');
      var instances = M.FloatingActionButton.init(elems, {
      direction: 'left'
    });
  }); 


  $.ajax({
    url: 'escala.json',
    success: function(data) {
      let dataAtual = new Date();
      let dia     = dataAtual.getDate();           // 1-31
      let dia_sem = dataAtual.getDay();            // 0-6 (zero=domingo)
      let mes     = dataAtual.getMonth();          // 0-11 (zero=janeiro)
      let ano2    = dataAtual.getYear();           // 2 dígitos
      let ano4    = dataAtual.getFullYear();       // 4 dígitos
      let hora    = dataAtual.getHours();          // 0-23
      let min     = dataAtual.getMinutes();        // 0-59
      let seg     = dataAtual.getSeconds();        // 0-59
      let mseg    = dataAtual.getMilliseconds();   // 0-999
      let tz      = dataAtual.getTimezoneOffset(); // em minutos

      switch (dia_sem) {
        case 1: 
        let segunda = data['segunda-feira']
        for(let num of segunda){
         let h = num['horario_entrada'].split(':')
         let b = num['horario_saida'].split(':')
          if(hora >= h[0] && hora < b[0]){
            $('#tes').append(`<div class="col s6"> <div class="card"><div class="card-image circle-i"><img id="img-prof" class="picture-prof" src="'+num['link_foto']+'"></div><div class="card-content"><span id="nome-prof" class="card-title">'+num['prof_nome']+'</span><p id="curso">'+num['prof_curso']+'</p><p id="hora">'+num['horario_entrada'] + "-" + num['horario_saida']+'</p></div></div></div>`)
          } else {
            $('#tes').append(`
              <div class="col s6">
                <p> Não existem professores </p>
              </div>
            `)
          }
        }
        break;
        case 2: 
        let terca = data['terça-feira']
        for(let num of terca){
          let h = num['horario_entrada'].split(':')
          let b = num['horario_saida'].split(':')
          if(hora >= h[0] && hora < b[0]){
            $('#tes').append('<div class="col s6"> <div class="card"><div class="card-image circle-i"><img id="img-prof" class="picture-prof" src="'+num['link_foto']+'"></div><div class="card-content"><span id="nome-prof" class="card-title">'+num['prof_nome']+'</span><p id="curso">'+num['prof_curso']+'</p><p id="hora">'+num['horario_entrada'] + "-" + num['horario_saida']+'</p></div><  /div></div>')
          } 
          else {
            $('#tes').append(`
              <div class="col s6">
                <p> Não existem professores </p>
              </div>
            `)
          }
        }
        break;
        case 3:
        let quarta = data['quarta-feira']
        for(let num of quarta){
          let h = num['horario_entrada'].split(':')
          let b = num['horario_saida'].split(':')
          if(hora >= h[0] && hora < b[0]){
            $('#tes').append('<div class="col s6"> <div class="card"><div class="card-image circle-i"><img id="img-prof" class="picture-prof" src="'+num['link_foto']+'"></div><div class="card-content"><span id="nome-prof" class="card-title">'+num['prof_nome']+'</span><p id="curso">'+num['prof_curso']+'</p><p id="hora">'+num['horario_entrada'] + "-" + num['horario_saida']+'</p></div></div></div>')
          } else {
            $('#tes').append(`
              <div class="col s6 center-align">
                <p> Não existem professores </p>
              </div>
            `)
            break
          }
        }
          break;
          case 4: 
         let quinta = data['quinta-feira']
         for(let num of quinta){
          let h = num['horario_entrada'].split(':')
          let b = num['horario_saida'].split(':')
           if(hora >= h[0] && hora < b[0]){
             $('#tes').append('<div class="col s6"> <div class="card"><div class="card-image circle-i"><img id="img-prof" class="picture-prof" src="'+num['link_foto']+'"></div><div class="card-content"><span id="nome-prof" class="card-title">'+num['prof_nome']+'</span><p id="curso">'+num['prof_curso']+'</p><p id="hora">'+num['horario_entrada'] + "-" + num['horario_saida']+'</p></div></div></div>')
           }else {
            $('#tes').append(`
              <div class="col s6 center-align">
                <p> Não existem professores </p>
              </div>
            `)
            break
          }
         }
          break;
          case 5: 
         let sexta = data['sexta-feira']
         for(let num of sexta){
          let h = num['horario_entrada'].split(':')
          let b = num['horario_saida'].split(':')
           if(hora >= h[0] && hora < b[0]){
             $('#tes').append('<div class="col s6"> <div class="card"><div class="card-image circle-i"><img id="img-prof" class="picture-prof" src="'+num['link_foto']+'"></div><div class="card-content"><span id="nome-prof" class="card-title">'+num['prof_nome']+'</span><p id="curso">'+num['prof_curso']+'</p><p id="hora">'+num['horario_entrada'] + "-" + num['horario_saida']+'</p></div></div></div>')
           }else {
            $('#tes').append(`
              <div class="col s6 center-align">
                <p> Não existem professores </p>
              </div>
            `)
            break
          }
         }
          break;
      
        default:
          break;
      }
    }
  });


  $.ajax({
    url: 'escala.json',
    success: function(data) {
      let i = 1;
      for(dia in data){

        let conteudo = `<li><div class="collapsible-header"><i class="large material-icons red-text text-darken-${i}">today</i>${dia}</div>
        <div class="collapsible-body"><table class="responsive-table escala"><thead><tr><th>Professor</th><th>Curso</th>
        <th>Horário</th></tr></thead><tbody></tbody></table></div></li>`; 

        $('#colearning ul').append(conteudo);

        for (prof in data[dia]) {

          let escala = `<tr>  
            <td>${data[dia][prof]['prof_nome']}</td>
            <td>${data[dia][prof]['prof_curso']}</td>
            <td>${data[dia][prof]['horario_entrada']}-${data[dia][prof]['horario_saida']}</td>
          </tr>`;

          $('li:last-child .escala tbody').append(escala);
          
        }
        i++;
      }

    }
  });

});



