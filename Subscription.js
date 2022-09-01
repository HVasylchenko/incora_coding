class Subscription {
    constructor(streamingService) {
       this.streamingService = streamingService
    }
    watch(showName) {
        // переглянути шоу
    }
    getRecommendationTrending() {
        // отримати випадкове шоу, яке вийшло цього
        // року. Викликає метод getMostViewedShowsOfYear() стримінгово сервісу та
        // рандомно вибирає елемент масиву, сортує по тривалості.
        getMostViewedShowsOfYear()
    }
    getRecommendationByGenre(genre) {
        // отримати випадкове шоу у певному
        // жанрі. Викликає метод getMostViewedShowsOfGenre() стримінгово сервісу,
        // працює так само, як і getRecommendationTrending().
        getMostViewedShowsOfGenre()

    }
}

export default Subscription;