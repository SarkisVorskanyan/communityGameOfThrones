import React, {FC, useEffect, useState} from 'react'
import InfoLog from "../../components/infoLog/InfoLog";
import {LOGINFOEMAIL} from "../../configs/Messages";
import {useAppDispatch, useAppSelector} from "../../store/StoreHooks";

const HomePage: FC = () => {

    const {userInfo, isAuth} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const [showInfoLog, setShowInfoLog] = useState<boolean>(false)

    const closeShowLog = () => {
        setShowInfoLog(false)
    }



    useEffect(() => {
        if(isAuth && !userInfo?.isActivated){
            setShowInfoLog(true)
        }else{
            setShowInfoLog(false)
        }
    }, [isAuth])

    return (
        <div>
            {showInfoLog ? <InfoLog setShowInfoLog={closeShowLog} text={LOGINFOEMAIL}/> : null}
            <div>Home page</div>
        </div>


    )
}

export default HomePage