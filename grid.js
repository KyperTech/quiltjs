var cell = {
	width: 30,
	height: 20,
	className: 'cell',
	createCell: function(){
		var cellEl = document.createElement('div');
		cellEl.className = this.className;
		cellEl.style.width = this.width;
		cellEl.style.height = this.height;
		return cellEl
	}
};

var grid = {
	rows: 30,
	columns: 30,
	height: function(){
		return this.rows * cell.height
	},
	width: function(){
		return this.columns * cell.width
	},
	className: 'grid',
	gridEl: null,
	createGridDiv: function(){
		var gridEl = document.createElement('div');
		gridEl.className = this.className;
        gridEl.style.width = this.width();
        gridEl.style.height = this.height();
        this.gridEl = gridEl;
	},
	createRows: function(){

	},
	stackCells: function(){
		for(var i = 0; i < (this.rows * this.columns); i++){
			this.gridEl.appendChild(cell.createCell());
		}
	},
	addToDoc: function(){
		document.getElementById('container').appendChild(this.gridEl);
	}
};
grid.createGridDiv();
grid.stackCells();
grid.addToDoc();