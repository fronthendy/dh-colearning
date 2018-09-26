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

