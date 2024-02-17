import axios from 'axios'
import MotherBoardCity from './home/MotherBoardCity'

export default function Page() {
  const cacheServerUrl = process.env.NEXT_APP_CACHE_VALIDATOR_SERVER_URL
  axios.get(cacheServerUrl + "/hit/all")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      {/* <Home /> */}
      <MotherBoardCity />

    </main>
  )
}
