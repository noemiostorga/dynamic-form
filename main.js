
$(document).ready(function(){
  

  $.get('http://json-data.herokuapp.com/forms', function(data){
    var htmlStr = '';
    data.forEach(function(field){


      if (field.type === 'text') {
        // htmlStr += '<label for="' + field.id + '">' + field.label + '</label><input type="text" id="' + field.id + '" /><i class="fa ' + field.icon + '"></i>';
        htmlStr += `
          <label class="firstname" for="${field.id}">${field.label}</label>
          <input class="textinput" type="text" id="${field.id}" />
          <i class="fa ${field.icon}"></i>
        `;
      }
  
      if(field.type === 'email'){
      	htmlStr += `
      		<label class="email" for="${field.id}">${field.label}</label>
      		<input type="email" id="${field.id}" />
      		<i class="fa ${field.icon}"></i>

      	`;
      }

      if(field.type === 'select'){
      	htmlStr += `
      		<label for="${field.id}">${field.label}</label>
      		<select type="select" id="${field.id}" >
      			<option value="${field.options[0].label}">${field.options[0].label}</option>
            
      		</select> 
      		<i class="fa ${field.icon}"></i>

      	`
      }

      if(field.type === 'textarea'){
        htmlStr +=`
          <label for="${field.id}">${field.label}</label>
          <textarea id="${field.id}"></textarea>
          <i class="fa ${field.icon}"></i>
        `;
      }

       if(field.type === 'tel'){
         htmlStr += `
          <label for="${field.id}">${field.label}</label>
          <input  type="tel" id="${field.id}" />
          <i class="fa ${field.icon}"></i>
        `;
     }

    


    });
    $("#content").html(htmlStr);
	});

});