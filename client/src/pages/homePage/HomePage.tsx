import React, {FC, useEffect, useState} from 'react'
import InfoLog from "../../components/infoLog/InfoLog";
import {LOGINFOEMAIL} from "../../configs/Messages";
import {useSelector} from "react-redux";
import {useAppSelector} from "../../store/StoreHooks";

const HomePage: FC = () => {

    const {userInfo} = useAppSelector(state => state.auth)
    const [showInfoLog, setShowInfoLog] = useState<boolean>(false)

    const closeShowLog = () => {
        setShowInfoLog(false)
    }

    useEffect(() => {
        console.log(userInfo?.role)
    }, [userInfo])


    useEffect(() => {
        if(!userInfo?.isActivated){
            setShowInfoLog(true)
        }else{
            setShowInfoLog(false)
        }
    }, [])

    return (
        <div>
            {showInfoLog ? <InfoLog setShowInfoLog={closeShowLog} text={LOGINFOEMAIL}/> : null}
            <div>Home page</div>
        </div>


    )
}

export default HomePage