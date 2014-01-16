function Div(className, width, height, id){
	this.width = width;
	this.height = height;
	this.className = className;
	this.id = id;
};

Div.prototype.create = function(id){
	var el = document.createElement('div');
	el.className = this.className;
	el.id = this.id || (isNaN(id) ? null: id);
	el.style.width = this.width;
	el.style.height = this.height;
	if(isNaN(this.id)){this.id = (isNaN(id) ? null: id)};
	return el;
};

var cell = {
	width: 30,
	height: 20,
	el: function(){
		return new Div('cell', this.width, this.height)
	}
};

var row = {
	width: function(){
		return cell.width * grid.columns;
	},
	height: function(){
		return cell.height;
	},
	el: function(){
		return new Div('row', this.width(), this.height())
	}
};

var grid = {
	rows: 30,
	columns: 15,
	height: function(){
		return cell.height * this.rows;
	},
	width: function(){
		return cell.width * this.columns;
	},
	el: function(){
		return new Div(null, this.width(), this.height(), 'grid')
	},
	addToDoc: function(){
		var gridEl = this.el().create();
		for(var i = 1; i <= this.rows; i++){
			var rowEl = row.el().create(i);
		    for(var j = 1; j <= this.columns; j++){
		    	rowEl.appendChild(cell.el().create(j))
		    }
		    gridEl.appendChild(rowEl);
		}
		document.getElementById('container').appendChild(gridEl);
	}
};
function resize(e){
	var evt = window.event || e;
	var delta = evt.wheelDelta / 20;
	console.log(delta);
	cell.width += delta;
	cell.height += delta;
	var gridEl = document.getElementById('grid');
	gridEl.style.width = grid.width();
	gridEl.style.height = grid.height();
	var rows = document.getElementsByClassName('row');
	for(var i = 0; i < rows.length; i++){
		rows[i].style.width = row.width();
		rows[i].style.height = row.height();
	}
	var cells = document.getElementsByClassName('cell');
	for(var i = 0; i < cells.length; i++){
     	cells[i].style.width = cell.width;
     	cells[i].style.height = cell.height;
  	}
};
document.addEventListener("mousewheel", resize, false);
grid.addToDoc();