
$(document).ready(function(){
  

  $.get('http://json-data.herokuapp.com/forms', function(data){
    var htmlStr = '';
    data.forEach(function(field){


      if (field.type === 'text') {
        // htmlStr += '<label for="' + field.id + '">' + field.label + '</label><input type="text" id="' + field.id + '" /><i class="fa ' + field.icon + '"></i>';
        htmlStr += `
          <label for="${field.id}">${field.label}</label>
          <input type="text" id="${field.id}" />
          <i class="fa ${field.icon}"></i>
        `;
      }
  
      if(field.type === 'email'){
      	htmlStr += `
      		<label for="${field.id}">${field.label}</label>
      		<input type="email" id="${field.id}" />
      		<i class="fa ${field.icon}"></i>

      	`;
      }

      if(field.type === 'select'){
      	htmlStr += `
      		<label for="${field.id}">${field.label}</label>
      		<select type="select" id="${field.id}" >
      			<option value="${field.value}">${field.options.label}</option>
      		</select> 
      		<i class="fa ${field.icon}"></i>

      	`
      }

      if(field.type === )


    });
    $("#content").html(htmlStr);
	});

});