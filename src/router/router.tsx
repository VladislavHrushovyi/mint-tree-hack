import { createBrowserRouter } from "react-router-dom"
import { SearchPage } from "../pages/searchPage"
import { SteelingPage } from "../pages/steelingPage"
import { LeaderboardSteeling } from "../pages/leaderboardSteeling"
import { Root } from "../components/root"
import { ErrorPage } from "../pages/errorPage"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
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