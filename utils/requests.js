const API_KEY = process.env.API_KEY;

export default {
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated:{
        title:'Top Rated',
        url:`/discover/movie?api_key=${API_KEY}&certification_country=US&certification=R&sort_by=vote_average.desc`,
    },
    fetchAction:{
        title:"Action",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchAdventure:{
        title:"Adventure",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=12`
    },
    fetchAnimation:{
        title:"Animation",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchComedy:{
        title:"Comedy",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchCrime:{
        title:"Crime",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=80`
    },
    fetchDocumentary:{
        title:"Documentary",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=99`
    },
    fetchDrama:{
        title:"Drama",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=99`
    },
    
}