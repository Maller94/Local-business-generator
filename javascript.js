var all_schemes = [];

//live Name field edit
function real_time_change_name() {
     var field_1_input = document.getElementById('field_1_input').value;
     document.getElementById('field_1_output').innerText = field_1_input;
}

//live Street address edit
function real_time_change_streetaddress() {
     var field_2_input = document.getElementById('field_2_input').value;
     document.getElementById('field_2_output').innerText = field_2_input;
}

//Live address edit
function real_time_change_addresslocality() {
     var field_3_input = document.getElementById('field_3_input').value;
     document.getElementById('field_3_output').innerText = field_3_input;
}

//live postal edit
function real_time_change_postal() {
     var field_4_input = document.getElementById('field_4_input').value;
     document.getElementById('field_4_output').innerText = field_4_input;
}

//live image edit
function real_time_change_image() {
     var field_5_input = document.getElementById('field_5_input').value;
     document.getElementById('field_5_output').innerText = field_5_input;
}

//live email edit
function real_time_change_email() {
     var field_6_input = document.getElementById('field_6_input').value;
     document.getElementById('field_6_output').innerText = field_6_input;
}

//live phone edit
function real_time_change_tele() {
     var field_7_input = document.getElementById('field_7_input').value;
     document.getElementById('field_7_output').innerText = field_7_input;
}

//live url edit
function real_time_change_url() {
     var field_8_input = document.getElementById('field_8_input').value;
     document.getElementById('field_8_output').innerText = field_8_input;
}

//live time edit

//live geo edit
function real_time_change_geo () {
     var field_lattitute = document.getElementById('lattitude').value;
     var field_longtitude = document.getElementById('longtitude').value;

     document.getElementById('field_13_output').innerText = field_lattitute;
     document.getElementById('field_14_output').innerText = field_longtitude;
}

// live pricerange edit
function real_time_change_priceRange() {
     var field_priceRange = document.getElementById('priceRange').value;
     document.getElementById('field_15_output').innerText = field_priceRange;
}
document.addEventListener('onload',real_time_change_priceRange());

//Print final output

function add_schema_and_print () {
     var temp_schema = document.getElementById('visuel_schema').innerText;
     all_schemes.push(temp_schema)
     var html = '';
     for(var i = 0; i<all_schemes.length;i++) {
          html += all_schemes[i]
     }
     console.log(html)
     document.getElementById('final_schema').innerText = html;
}

//Save to clipboard

document.getElementById('copy').addEventListener('click',() => {
     window.navigator.clipboard.writeText(document.getElementById('final_schema').innerText)
})

/************************************************************************/

//outputs the weekdays

function show_weekdays() {
     var html_array = [];
     var html_array2 = [];
     var html_array3 = [];
     // Split the days into different sections
     for(var i = 0;i<document.querySelectorAll('.weekday').length;i++) {
          if(i<7) {
               if(document.querySelectorAll('.weekday')[i].checked == true) {
                    html_array.push('"'+document.querySelectorAll('.weekday')[i].value+'"');
               }
          }
          if(i > 6 && i < 14) {
               if(document.querySelectorAll('.weekday')[i].checked == true) {
                    html_array2.push('"'+document.querySelectorAll('.weekday')[i].value+'"');
               }
          }
          if(i > 13 && i < 21) {
               if(document.querySelectorAll('.weekday')[i].checked == true) {
                    html_array3.push('"'+document.querySelectorAll('.weekday')[i].value+'"');
               }
          }
     }
     //Code to output the shorten version of the days
     var array_shorten = html_array.concat(html_array2,html_array3);
     var array_shorten_set = new Set(array_shorten);
     var array_shorten_array = Array.from(array_shorten_set);
     var sortingArr = ['"Monday"','"Tuesday"','"Wednesday"','"Thursday"','"Friday"','"Saturday"','"Sunday"'];
     array_shorten_array_sorted = sortingArr.filter(v => array_shorten_array.includes(v));

     var array_output = [];
     for(var j = 0; j<array_shorten_array_sorted.length;j++) {
          array_output.push(array_shorten_array_sorted[j].slice(1,3)) ;
     }

     if(document.querySelectorAll('.schema_output').length > 0){
          document.querySelectorAll('.schema_output')[0].innerText = html_array2.join(',');
     }

     if(document.querySelectorAll('.schema_output').length > 1){
          document.querySelectorAll('.schema_output')[1].innerText = html_array3.join(',');
     }
     document.getElementById('weekday_output').innerText = html_array.join(',');
     document.getElementById('field_9_output').innerText = array_output;
}

// Output the time
function show_time() {
     var timestart = document.querySelectorAll('.time')[0].value;
     var timeend = document.querySelectorAll('.time')[1].value;
     document.querySelectorAll('span.dynamic.time')[0].innerText = timestart;
     document.querySelectorAll('span.dynamic.time')[1].innerText = timeend;
     document.getElementById('field_10_output').innerText = timestart+'-'+timeend;

     if(document.querySelectorAll('span.dynamic.time').length > 2) {
          var timestart2 = document.querySelectorAll('.time')[2].value
          var timeend2 = document.querySelectorAll('.time')[3].value
          document.querySelectorAll('span.dynamic.time')[2].innerText = timestart2;
          document.querySelectorAll('span.dynamic.time')[3].innerText = timeend2;   
     }

     if(document.querySelectorAll('span.dynamic.time').length > 4) {
          var timestart2 = document.querySelectorAll('.time')[4].value;
          var timeend2 = document.querySelectorAll('.time')[5].value;
          document.querySelectorAll('span.dynamic.time')[4].innerText = timestart2;
          document.querySelectorAll('span.dynamic.time')[5].innerText = timeend2;   
     }
}

var limit = 0;
// Add extra days
function add_extra() {
     limit++;
     console.log(limit);

     var html = String(document.getElementById('weekdays').outerHTML)

     var extra_dates = ',{"@type": "OpeningHoursSpecification",<br>"dayOfWeek":[<span class = "dynamic schema_output"></span>],<br>"opens": "<span class = "dynamic time"></span>",<br>"closes": "<span class = "dynamic time"></span>"<br>}'

     document.getElementById('insert_extra_days').innerHTML += html;
     document.querySelector('#show_extra_days').innerHTML += extra_dates;
     if(limit == 2) {
          document.querySelectorAll('.btn-success')[0].disabled = true;
          document.querySelectorAll('.btn-success')[0].style.display = 'none';
     }

}

function extra_day_reset () {
     document.getElementById('insert_extra_days').innerHTML = '';
     document.querySelector('#show_extra_days').innerHTML = '';
     document.querySelectorAll('.btn-success')[0].disabled = false;
     document.querySelectorAll('.btn-success')[0].style.display = 'initial';
     limit = 0;
}
