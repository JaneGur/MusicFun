import {Routing} from "@/common/routing";
import {Header} from "@/common/components/Header";
import s from "./App.module.css";
import {ToastContainer} from "react-toastify";


export const App = () => {
    return (
        <>
            <Header/>
            <div className={s.layout}>
                <Routing />
            </div>
            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}