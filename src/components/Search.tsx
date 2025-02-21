import { getGames } from "@api/gamesApi"
import { useQuery } from "@tanstack/react-query"
import React, { useState, useEffect, useRef } from "react"
import SearchInfo from "./SearchInfo"


const Search = () => {
    const [query, setQuery] = useState<string>('')
    const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false)
    const searchRef = useRef<any>(null)
    
    const handleChangeInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value
        setQuery(value)
        if(value.length == 0){
            setDropdownVisible(false)
        }else{
            setDropdownVisible(true)
        }
    }

    const { data, isLoading } = useQuery({
        queryKey: ['games', query],
        queryFn: () => getGames(query, true),
        enabled: !!query
    })

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target as Node)
            ) {
                setDropdownVisible(false);
            }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

    return (
        <div className="mb-10 mt-10 relative" ref={searchRef}>
            <input
                className="p-3 h-[50px] w-full border rounded-lg bg-sky-200 outline-none border-transparent" 
                type="search" 
                placeholder="nhập tên game..."
                onChange={handleChangeInput} 
            />
            {isDropdownVisible && 
                <div className="search-data p-3 w-full h-auto z-10 max-h-[500px] top-[60px] absolute rounded-lg bg-amber-200 overflow-y-scroll">
                    {<SearchInfo data={data} isLoading={isLoading} setDropdownVisible={setDropdownVisible}/>}
                </div>
            }
        </div>
    )
}

export default Search