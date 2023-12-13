import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from 'axios';
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useNavigate } from "react-router-dom";
import { removeTokenTimestamp, shouldRefreshToken } from "../utils/utils";


export const CurrentUserContext = createContext();
export const setCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(setCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    const handleMount = async () => {
        try {
            const { data } = await axiosRes.get("dj-rest-auth/user/");
            console.log('Context data', data);
            setCurrentUser(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleMount();
    }, []);

    useMemo(() => {
        axiosReq.interceptors.request.use(
            async (config) => {
                if (shouldRefreshToken()) {
                    try {
                        await axios.post("/dj-rest-auth/token/refresh/");
                    } catch (error) {
                        setCurrentUser((prevCurrentUser) => {
                            if (prevCurrentUser) {
                                navigate('/login');
                            }
                            return null;
                        });
                        removeTokenTimestamp();
                        return config
                    }
                }
                return config
            },
            (error) => {
                Promise.reject(error);
            }
        );

        axiosRes.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response?.status === 401) {
                    try {
                        await axios.post("/dj-rest-auth/token/refresh/");
                    } catch (error) {
                        setCurrentUser(prevCurrentUser => {
                            if (prevCurrentUser) {
                                navigate('/login')
                            }
                            return null
                        });
                        removeTokenTimestamp();
                    }
                    return axiosRes(error.config)
                }
                return Promise.reject(error)
            });
    }, [navigate])

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <setCurrentUserContext.Provider value={setCurrentUser}>
                {children}
            </setCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    )
}