var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText)

            var items = response.items;

            document.getElementById("view").style.display = "none";

            document.getElementById("items").innerHTML = `<thead>
        <tr>
          <th scope="col">Sl.No</th>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Unit</th>
          <th scope="col">Department</th>
          <th scope="col">Notes</th>
          <th scope="col">Mark as Bought</th>
        </tr>
      </thead>
      <tbody id="tableBody">
      <tr id="my_span0" >
      <td>${items[0].SerialNumber}</td>
      <td>${items[0].Name}</td>
      <td>${items[0].Quantity}</td>
      <td>${items[0].Unit}</td>
      <td>${items[0].Department}</td>
      <td>${items[0].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(0)" id="checkbox0"></td>
      </tr>
      <tr id="my_span1" >
      <td>${items[1].SerialNumber}</td>
      <td>${items[1].Name}</td>
      <td>${items[1].Quantity}</td>
      <td>${items[1].Unit}</td>
      <td>${items[1].Department}</td>
      <td>${items[1].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(1)" id="checkbox1"></td>
      </tr>
      <tr id="my_span2" >
      <td>${items[2].SerialNumber}</td>
      <td>${items[2].Name}</td>
      <td>${items[2].Quantity}</td>
      <td>${items[2].Unit}</td>
      <td>${items[2].Department}</td>
      <td>${items[2].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(2)" id="checkbox2"></td>
      </tr>
      <tr id="my_span3" >
      <td>${items[3].SerialNumber}</td>
      <td>${items[3].Name}</td>
      <td>${items[3].Quantity}</td>
      <td>${items[3].Unit}</td>
      <td>${items[3].Department}</td>
      <td>${items[3].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(3)" id="checkbox3"></td>
      </tr>
      <tr id="my_span4" >
      <td>${items[4].SerialNumber}</td>
      <td>${items[4].Name}</td>
      <td>${items[4].Quantity}</td>
      <td>${items[4].Unit}</td>
      <td>${items[4].Department}</td>
      <td>${items[4].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(4)" id="checkbox4"></td>
      </tr>
      
      <tr id="my_span5" >
      <td>${items[5].SerialNumber}</td>
      <td>${items[5].Name}</td>
      <td>${items[5].Quantity}</td>
      <td>${items[5].Unit}</td>
      <td>${items[5].Department}</td>
      <td>${items[5].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(5)" id="checkbox5"></td>
      </tr>
      <tr id="my_span6" >
      <td>${items[6].SerialNumber}</td>
      <td>${items[6].Name}</td>
      <td>${items[6].Quantity}</td>
      <td>${items[6].Unit}</td>
      <td>${items[6].Department}</td>
      <td>${items[6].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(6)" id="checkbox6"></td>
      </tr>
      <tr id="my_span7" >
      <td>${items[7].SerialNumber}</td>
      <td>${items[7].Name}</td>
      <td>${items[7].Quantity}</td>
      <td>${items[7].Unit}</td>
      <td>${items[7].Department}</td>
      <td>${items[7].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(7)" id="checkbox7"></td>
      </tr>
      
      <tr id="my_span8" >
      <td>${items[8].SerialNumber}</td>
      <td>${items[8].Name}</td>
      <td>${items[8].Quantity}</td>
      <td>${items[8].Unit}</td>
      <td>${items[8].Department}</td>
      <td>${items[8].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(8)" id="checkbox8"></td>
      </tr>
      <tr id="my_span9" >
      <td>${items[9].SerialNumber}</td>
      <td>${items[9].Name}</td>
      <td>${items[9].Quantity}</td>
      <td>${items[9].Unit}</td>
      <td>${items[9].Department}</td>
      <td>${items[9].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(9)" id="checkbox9"></td>
      </tr>
      
      </tbody>`;

        }
    }
    xhttp.open("GET", "items.json", true)
    xhttp.send();


function my_fun(j) {


    var chkbox = "ckb" + j;

    var my_span = "my_span" + j;



    if (document.getElementById(chkbox).checked) {

        document.getElementById(my_span).style.textDecoration = 'line-through';
        document.getElementById(my_span).style.color = 'green';


    } else {

        document.getElementById(my_span).style.textDecoration = 'none';
        document.getElementById(my_span).style.color = '#ff0000';

    }

}