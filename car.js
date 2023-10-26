const car = {
    myCar: {
        name: 'kamri',
        color: 'black',
    },
    petrol: 40,
    speed: 200,
    tire: 100,
    emotions: 10,

    gasStation: function () {
    if(this.petrol === 0){
       return 'надо заправится'
    }
    }, 
    

    driveFast: function () {
        if(this.speed === 200){
            return 'мотор: мне плохо ('
        } 
    },

    technicalStation: function () {
        if(this.tire === 0){
            return 'надо менять шину'
        }
    },

    relax: function () {
        if(this.speed == 200 && this.emotions == 10){
            return 'мне хорошо'
        }
    }
}