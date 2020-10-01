var friends = [ 'Bill', 'Ted', 'Todd', 'Mac Mittens', 'Crooze'];
var locations = ['bathroom', 'bedroom', 'kitchen', 'study', 'cage', 'basement', 'cellar', 'attic', 'shed', 'den'];
var objects = ['necromicon', 'shredder', 'blender', 'beret', 'kisses', 'these hands', 'mayonnaise', 'vaccuum', 'robe', 
'fire poker', 'mean stare', 'water attack', 'pop rocks', 'tandem bike',
'Xbox controller', 'weather radio', 'flash drive', 'talk attack', 'air bend', 'magazine'];



document.addEventListener('DOMContentLoaded', function () {
    for (var index = 1; index < 101; index++) {
        console.log(index);
        var h3 = document.createElement('h3')
       var h3Text = document.createTextNode ('Accusation ' + index) 
       h3.appendChild(h3Text);
       var varSet = {
         friends:  Math.floor(Math.random() * friends.length)
         locations: locations[Math.floor(Math.random * locations.length)]
          objects: objects[Math.floor(Math.random * objects.legth)] 
       }
    
    }
    document.body.appendChild(h3)
h3.addEventListener('click', varSet)



    function alert() {
        retutn alert()
alert(`I accuse ${this.friends} with the ${this.objects} in the ${this.locations}`)   
    }     
})