function createDiv(type, className, id, width, height) {
	var el = document.createElement(type);
	el.className = className;
	el.id = id;
	el.style.width = width;
	el.style.height = height;
	return el;
};

var cell = {
	width: 30,
	height: 20,
	createCell: function(id){
		var cellEl = createDiv('div', 'cell', id, this.width, this.height);
		return cellEl;
	}
};

var row = {
	width: function(){
		return cell.width * grid.columns;
	},
	createRow: function(id){
		console.log(this.width());
		var rowEl = createDiv('div', 'row', id, this.width(), cell.height);
		for(var i = 0; i < grid.columns; i++){
			rowEl.appendChild(cell.createCell(i));
		}
		return rowEl;
	}
};

var grid = {
	rows: 30,
	columns: 15,
	height: function(){
		return this.rows * cell.height;
	},
	width: function(){
		return this.columns * cell.width;
	},
	createGridDiv: function(){
        var gridContainEl = createDiv('div', 'grid', null, this.width(), this.height());
        return gridContainEl;
	},
	addToDoc: function(){
		var gridEl = grid.createGridDiv();
		for(var i = 0; i < this.columns; i++){
			gridEl.appendChild(row.createRow(i));
		}
		document.getElementById('container').appendChild(gridEl);
	}
};

grid.addToDoc();