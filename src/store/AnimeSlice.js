import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false, 
    allAnime:[],
    homePage:[],
    error:[],
    anime:[],
    search:[],
    searchPage:[]
}

//read allAnime
export const readAnime = createAsyncThunk('readAnime', async(page)=>{
    const response = await fetch(`https://api.jikan.moe/v4/anime?limit=20&page=${page}`)
    try {
        const result = await response.json();
        return result
    } catch (error) {
        return error;        
    }
})

//read Anime
export const animeDetails = createAsyncThunk('animeDetails', async(mal_id)=>{
    const response = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`)
    try {
        const result = await response.json();
        return result
    } catch (error) {
        return error
    }
})

//search Anime
export const searchAnime = createAsyncThunk('searchAnime', async({search,page})=>{
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&page=${page}`)
    try {
        const result = await response.json();
        return result
    } catch (error) {
        return error
    }
})

const AnimeSlice = createSlice({
    name:'AnimeSlice',
    initialState,
    reducers:{
        removeData:(state)=>{
            state.search=[]
        }
    },
    extraReducers:{
        [readAnime.pending]:(state)=>{
            state.loading=true
        },
        [readAnime.fulfilled]:(state,action)=>{
            state.loading=false, 
            state.anime=[],
            state.search=[],
            state.searchPage=[],
            state.homePage=action.payload
            state.allAnime = state.allAnime.concat(action.payload.data)
        },
        [readAnime.rejected]:(state,action)=>{
            state.loading=false,
            state.error=action.payload
        },
        [animeDetails.pending]:(state)=>{
            state.loading=true
        },
        [animeDetails.fulfilled]:(state,action)=>{
            state.loading=false, 
            state.anime=action.payload
        },
        [animeDetails.rejected]:(state,action)=>{
            state.loading=false,
            state.error=action.payload
        },
        [searchAnime.pending]:(state)=>{
            state.loading=true
            // state.search=[],
        },
        [searchAnime.fulfilled]:(state,action)=>{
            state.loading=false, 
            state.anime=[],
            // state.search=action.payload
            state.searchPage = action.payload,
            state.search = state.search.concat(action.payload.data)
        },
        [searchAnime.rejected]:(state,action)=>{
            state.loading=false,
            state.error=action.payload
        }
    }
})

export const {removeData} = AnimeSlice.actions;
export default AnimeSlice.reducer;