import {Routing} from "@/common/routing";
import {Header} from "@/common/components/Header";
import s from "./App.module.css";
import {ToastContainer} from "react-toastify";
import {useGlobalLoading} from "@/common/hooks";
import {LinearProgress} from "@/common/components/LinearProgress";


export const App = () => {

    const isGlobalLoading = useGlobalLoading()

    return (
        <>
            <Header/>
            {isGlobalLoading && <LinearProgress />}
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