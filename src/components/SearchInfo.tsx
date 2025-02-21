import { GameDataContext } from "@context/GamesDataContext"
import { useMutation } from "@tanstack/react-query"
import { useContext } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

interface Props{
    data: [],
    setDropdownVisible: React.Dispatch<React.SetStateAction<boolean>>,
    isLoading: boolean
}

const SearchInfo = ({data, setDropdownVisible, isLoading}: Props) => { 

    const {setId} = useContext(GameDataContext)

    const {mutate} = useMutation({
        mutationFn: (id: string) => setId(id),
        onSettled: () => {
            setDropdownVisible(false)
        }
    })

    return (
        <>
            <ul className="h-full max-h-full">
                {
                    isLoading ? 
                    <li className="flex items-center content-center"><AiOutlineLoading3Quarters className="animate-spin"/></li> :
                    (data.length == 0 ? <li>no data</li> : data.map((item: any) => (
                        <li key={item.slug} onClick={() => mutate(item.id)} className="p-2 h-[95px] flex border-b border-amber-50 cursor-pointer">
                            <img src={item.background_image} alt="" className="w-[80px] h-[80px] mr-3 rounded-[5px]"/>
                            <div className="flex flex-col">
                                <span>{item.name}</span>
                                <span>release date: {item.released}</span>
                            </div>
                        </li>
                    )))
                }
            </ul>
        </>
    )
}

export default SearchInfo