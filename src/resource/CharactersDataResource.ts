import axios from "axios";
import { CharactersData, Status } from "../data/CharactersData";
import { CharacterDetailsData } from "../data/CharactersDataDetails";
import { EpisodeData } from "../data/EpisodeData";


export default function getCharactersData(page: number, onLoadcharactersData: (Status: number, charactersData?: CharactersData) => void) {

    axios.get(`/link/character?page=${page}`)
        .then((response) => {
            // console.log(response.data)
            onLoadcharactersData(response.status, response.data)
        })
        .catch((error) => {
            console.log(error.status)
        })
}

export function getCharactersDataById(id: string, onLoadcharactersDetailsData: (charactersDetailsData?: CharacterDetailsData | null) => void) {
    axios.get(`/link/character/${id}`)
        .then((response) => {
            // console.log(response.data);
            onLoadcharactersDetailsData(response.data)
        })
        .catch((error) => {
            console.log(error.status);
        })

}

export async function getAllCharactersData(listId: number[], onLoadAllcharactersListData: (status: number, allCharactersListData?: CharacterDetailsData[]) => void) {
    await axios.get(`/link/character/${listId}`)
        .then((response) => {
            onLoadAllcharactersListData(response.status, response.data);
        })
        .catch((error) => {
            console.log(error.status);
        })


}



export async function getAllEpisodeByApi(episodeApi: string[], onLoadEpisodeData: (EpisodeData?: EpisodeData[]) => void) {
    let temp2: EpisodeData[] = [];
    for (let i = 0; i < episodeApi.length; i++) {
        await axios.get(`${episodeApi[i]}`)
            .then((response) => {
                temp2.push(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error.status)
            })

    }
    // console.log(temp2)
    onLoadEpisodeData(temp2);
}