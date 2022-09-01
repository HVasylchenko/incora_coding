class StreamingService {
    constructor(name, shows, viewsByShowNames ) {
       this.name = name,
       this.shows = shows,
       this.viewsByShowNames = viewsByShowNames
    }
    addShow(show){
        // ...
    }
    getMostViewedShowsOfYear(year) {
        // ...
    }
    getMostViewedShowsOfGenre(genre) {
        //...
    }
}

export default StreamingService;