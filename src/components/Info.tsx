import { GameDataContext } from "@context/GamesDataContext"
import { useContext } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel"


const Info = () => {
    const {gameData, linkDownload, images} = useContext(GameDataContext)

    return(
        <div className="p-[5px] mb-[100px]">
            {gameData && 
                <div>
                    <div className="flex h-[250px]">
                        {/* image */}
                        <img src={gameData.background_image} className="w-full h-full md:w-60 md:h-60 rounded-[5px]" loading="lazy" alt="" />

                        {/* name and desc */}
                        <div className="hidden md:flex flex-col ml-[5px] overflow-hidden mb-[5px] relative">
                            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">{gameData.name}</h1>
                            <span className="mt-[5px] xl:truncate xl:text-wrap overflow-y-scroll leading-5.5 desBox">{gameData.description_raw}</span>
                            {
                                gameData.website && 
                                <span className="static hidden 2xl:block 2xl:absolute bottom-0"> <label htmlFor="" className="font-bold">Website: </label>
                                    <a  href={gameData.website} target="_blank" className="text-sky-800 underline">
                                        {gameData.website}
                                    </a>
                                </span>
                            }
                        </div>
                    </div>

                    {/*mobile name va desc*/}

                    <div className="flex flex-col overflow-hidden relative md:hidden">
                        <h1 className="font-bold text-2xl lg:text-4xl">{gameData.name}</h1>
                        <span className="mt-[5px] overflow-y-scroll leading-5.5 desBox">{gameData.description_raw}</span>
                    </div>

                    <div className="flex flex-col overflow-hidden relative mt-3 2xl:hidden">
                        {
                            gameData.website && 
                            <span className="static bottom-0"> <label htmlFor="" className="font-bold">Website: </label>
                                <a  href={gameData.website} target="_blank" className="text-sky-800 underline">
                                    {gameData.website}
                                </a>
                            </span>
                        }
                    </div>
                    
                    {/* genres */}
                    <div className="mt-[10px] mb-[10px] block">
                        <div className="flex items-center">
                            <label className="font-bold" >Genres: </label>
                            {gameData.genres.map((genre: any) => (
                                <span key={genre.id} className="border text-[13px] text-center p-[2px] block w-auto rounded-[3px] border-transparent ml-2 mr-2 bg-[#190a81] text-red-50">{genre.name}</span>
                            ))}
                        </div>
                    </div>

                    {/* dev */}
                    <div className="flex items-center mb-[10px]">
                        <label className="font-bold">Developers: </label>
                        {gameData.developers.map((developer: any) => (
                            <span key={developer.id} className="border text-[13px] text-center p-[2px] block w-auto rounded-[3px] border-transparent ml-2 mr-2 bg-[#190a81] text-red-50">{developer.name}</span>
                        ))}
                    </div>
                    
                    {/* platform */}
                    <div className="flex items-center mb-[10px]">
                        <label className="font-bold">Platform: </label>
                        {gameData.parent_platforms.map((platform: any) => (
                            <span key={platform.platform.id} className="border text-[13px] text-center p-[2px] block w-auto rounded-[3px] border-transparent ml-2 mr-2 bg-[#190a81] text-red-50">{platform.platform.name}</span>
                        ))}
                    </div>
                    
                    {/* image */}
                    <div className="w-full">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {images.results.map((image: any) => (
                                <CarouselItem key={image.id}>
                                    <div className="p-1">
                                        <img src={image.image} alt="" key={image.id} className="w-[auto] rounded-[5px]" loading="lazy" />
                                    </div>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>

                    {/* Download link */}
                    {linkDownload && 
                        <div className="flex flex-col mt-[10px]">
                            <span>Download:</span>
                            {
                                linkDownload.results.map((link: any) => (
                                    <a href={link.url} className="text-sky-800 underline" target="_blank" key={link.id}>{link.url}</a>
                                ))   
                            }
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Info