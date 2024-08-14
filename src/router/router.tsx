import { createBrowserRouter } from "react-router-dom"
import { SearchPage } from "../pages/searchPage"
import { SteelingPage } from "../pages/steelingPage"
import { LeaderboardSteeling } from "../pages/leaderboardSteeling"
import { Header } from "../components/header"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            {
                path: "/",
                element: <SearchPage />
            },
            {
                path: "search",
                element: <SearchPage />
            },
            {
                path: 'leaderboard-steeling',
                element: <LeaderboardSteeling />
            },
            {
                path: "steeling",
                element: <SteelingPage />
            }
        ]
    }
])