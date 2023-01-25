import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import App from "./components/App/App"
import { NotificationsPopup } from "./components/NotificationsPopup/NotificationsPopup"
import { store } from "./store"
import "./index.css"

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
)

root.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App />
            <NotificationsPopup />
        </Provider>
    </BrowserRouter>
)