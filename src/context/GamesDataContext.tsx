import { getGameData, getImages, getLinkDownload } from "@api/gamesApi"
import { useQuery } from "@tanstack/react-query"
import { createContext, useState } from "react"

const GameDataContext = createContext<any>(null)

const GameDataProvider = ({children}: {children: React.ReactNode}) => {
    const [id, setId] = useState<string>('')

    const {data: gameData} = useQuery({
        queryKey: ["gameData", id],
        queryFn: () => getGameData(id),
        enabled: !!id
    })

    const {data: linkDownload} = useQuery({
        queryKey: ["linkDown", id],
        queryFn: () => getLinkDownload(id),
        enabled: !!id
    })

    const {data: images} = useQuery({
        queryKey: ["images", id],
        queryFn: () => getImages(id),
        enabled: !!id
    })

    return(
        <GameDataContext.Provider value={{setId, gameData, linkDownload, images}}>
            {children}
        </GameDataContext.Provider>
    )
}

export {GameDataContext, GameDataProvider}