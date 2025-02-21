import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Search from "@components/Search"
import Info from "@components/Info"
import {GameDataProvider} from "@context/GamesDataContext"

const queryClient = new QueryClient()

const App = () => {
  return(
    <QueryClientProvider client={queryClient}>
      <GameDataProvider>
        <div className="w-screen h-screen place-content-center">
          <div className="p-2 lg:pl-52 lg:pr-52 flex flex-col w-auto h-full overflow-x-hidden">
            <Search />
            <div className="border-b mb-5 border-[#c9c3c3]"></div>
            <Info />
          </div>
        </div>
      </GameDataProvider>
    </QueryClientProvider>
  )
}

export default App