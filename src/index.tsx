import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { SkeletonTheme } from "react-loading-skeleton"
import App from "./components/App/App"
import { NotificationsPopup } from "./components/NotificationsPopup/NotificationsPopup"
import { store } from "./store"

import "./index.css"
import "react-loading-skeleton/dist/skeleton.css"

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
)

root.render(
    <BrowserRouter>
        <Provider store={ store }>
            <SkeletonTheme baseColor="#BCE9BE" highlightColor="#C3F2C5">
                <App />
                <NotificationsPopup />
            </SkeletonTheme>
        </Provider>
    </BrowserRouter>
)