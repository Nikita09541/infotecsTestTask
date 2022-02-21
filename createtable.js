function createTable(data) {
  //create and set id for table header row
  const thead = document.createElement("TR");
  thead.setAttribute("id", "thead");
  tableNode.appendChild(thead);
  //create and fill header cells
  for (let x of data) {
    switch(x) {
      //create cells for both properties of the "name" object
      case "name":
      for (let y in obj[0][x]) {
        const th = document.createElement("TH");
        th.setAttribute("id", "th" + y);
        const thdata = document.createTextNode(y);
        th.appendChild(thdata);
        thead.appendChild(th);					
      }
      break;
      //default option to create cells for all other objects
      default:
        const th = document.createElement("TH");
        th.setAttribute("id", "th" + x);
        const thdata = document.createTextNode(x);
        th.appendChild(thdata);
        thead.appendChild(th);
    }
  }	
  for (let i = 0; i < 10; i++) {
    //create and set id for 10 empty rows	
    const tr = document.createElement("TR");
    tableNode.appendChild(tr);
    tr.setAttribute("id", i);
    //create cells with id for each row		
    for (let j = 0; j < thead.childElementCount; j++) {
      const td = document.createElement("TD");
      td.setAttribute("id", thead.children[j].innerText + i);
      tr.appendChild(td);
    }
  }
  //create checkbox to contol columns
  for (let x in obj[0]) {
    switch(x) {
      //create two checkboxes for "name" parameter
      case "name":
        for (let y in obj[0][x]) {
          //create checkbox element and set id
          const input = document.createElement("INPUT");
          input.setAttribute("type", "checkbox");
          input.setAttribute("id", "input" + y);
		  //define onchange event			
          input.onchange = function() {columnCountMod()};
          controlCols.appendChild(input);
          //create label for checkbox
          const label = document.createElement("LABEL");
          label.setAttribute("for", input.id);
          const labelData = document.createTextNode(y);
          label.appendChild(labelData);
          controlCols.appendChild(label);
        }
        break;
      //default option to create checkboxes for other parameters
      default:
        const input = document.createElement("INPUT");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", "input" + x);
        input.onchange = function() {columnCountMod()};
        controlCols.appendChild(input);
        const label = document.createElement("LABEL");
        label.setAttribute("for", input.id);
        const labelData = document.createTextNode(x);
        label.appendChild(labelData);
        controlCols.appendChild(label);
    }
  }
  //set checked property for displayed columns
  for (let i = 0; i < thead.children.length; i++) {
    document.getElementById("input" + thead.children[i].innerText).checked = true;
  }
}