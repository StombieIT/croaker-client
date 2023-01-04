import ReactDOM from "react-dom/client"
import { App } from "./components/App/App"
import { Modal } from "./components/Modal/Modal"
import { store } from "./store"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App />
            <Modal />
        </Provider>
    </BrowserRouter>
)