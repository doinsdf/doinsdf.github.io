function MixALot() {
    var text = document.getElementById("maininput").value;
    text = text.split("");
    for(i=0; i<10; i++) {
        var pos1 = Math.floor(Math.random() * text.length-1) + 1;
        var pos2 = Math.floor(Math.random() * text.length-1) + 1;
        if (pos1 > pos2) {
            [pos1, pos2] = [pos2, pos1];
        }
        var dist = pos2 - pos1;
        var newpos = Math.floor(Math.random() * text.length-1) + 1;
        var slicedarray = text.slice(pos1, pos2);
        slicedarray = slicedarray.join("");
        text.splice(pos1, dist);
        text.splice(newpos, 0, slicedarray);


    }
    text = text.join("");
    document.getElementById("maininput").value = text;
}
