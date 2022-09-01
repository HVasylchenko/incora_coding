import Show from "./Show"

class Series extends Show {
    constructor(name, gendre, releaseDate, episodies) {
        super(name, gendre, releaseDate)
        this.episodies = episodies
     }
}

export default Series;