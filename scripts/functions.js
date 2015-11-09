/** Sort the events by region name ASC **/
sortFunction = function(a, b) {
    if (a.where > b.where)
        return 1;
    if (a.where < b.where)
        return -1;
    return 0;
};

/** Defines if the item should have a separator or not when listed **/
shouldBeHidden = function(index){
    console.log(index);
    if(this.items.length - 1 === index)
    { return true; }
    else
    { return false; }
};