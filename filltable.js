function fillTable(num) {
  //get the table header row object and a collection of its children
  const thead = document.getElementById("thead");
  const headChildren = thead.children;
  //convert collection to array
  const childArr = [];
  for (let i = 0; i < headChildren.length; i++) {
    childArr.push(headChildren[i].innerText);
  }
  //create fill the required number of rows with data
  for (let i = 0; i < num; i++) {
    //get the required string object
    const tr = document.getElementById(i);
    for (let x of childArr) {
      switch(x) {
        //fill cells "firstName" and "lastName"
        case "firstName":
        case "lastName": {
          const td = document.getElementById(x+i);
          const tddata = document.createTextNode(obj[count + i]["name"][x]);
          td.appendChild(tddata);
        }
        break;
        //cut "about" data and fill corresponding cell
        case "about": {
          const td = document.getElementById(x+i);
          const shortabout = obj[count + i][x].slice(0,110).concat("...");
          const tddata = document.createTextNode(shortabout);
          td.appendChild(tddata);
        }
        break;
        //colorize "eyeColor" cell with the appropriate color
        case "eyeColor": {
          const td = document.getElementById(x+i);
          td.style.backgroundColor = obj[count + i][x];
        }
        break;
        //fill cells by default
        default: {
          const td = document.getElementById(x+i);
          const tddata = document.createTextNode(obj[count + i][x]);
          td.appendChild(tddata);
        }
      }
    }
  }
}