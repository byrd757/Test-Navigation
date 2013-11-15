function objectState(args) { // `args` will be private variable
 
    // private properties/variables
    var pageNum = 1;
     
    // public properties
    this.version = 1.0;
 
    // getter
    this.getPageNum = function() {
        return pageNum;
    };
     
    // setter
    this.setPageNum = function(num) {
        pageNum = num;
    };
     
}