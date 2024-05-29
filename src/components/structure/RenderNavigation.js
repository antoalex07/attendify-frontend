import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper"
import nav from "./Navigation";

export const RenderRoutes = () => {
    
    const { user } = AuthData();

    return (
        <Routes>
            { nav.map((route, index) => {
                if(route.isPrivate && user.isAuthenticated) {
                    return <Route key={index} path={route.path} element={route.element}/>
                } else if(!route.isPrivate) {
                    return <Route key={index} path={route.path} element={route.element}/>
                } else {
                    return false;
                }
            })}
        </Routes>
    )
}

export const RenderMenu = () => {

    const { user, logout } = AuthData();

    const MenuItem = ({route}) => {
        return (
            <div className="menu-item">
                <Link to={route.path}>
                    {route.name}
                </Link>
            </div>
        )
    } 

    return (
        <div className="menu">
            { nav.map((route, index) => {
                if(!route.isPrivate && route.isMenu) {
                    return (<MenuItem key={index} route={route}/>)
                } else if(user.isAuthenticated && route.isMenu) {
                    return (<MenuItem key={index} route={route}/>)
                } else {
                    return false;
                }
            })}
            { user.isAuthenticated ? (
                <div className="menu-item">
                    <Link to={"/"} onClick={logout}>Log out</Link>
                </div>
            ) : (
                <div className="menu-item">
                    <Link to={"/login"}>Log in</Link>
                </div>
            )}
        </div>
    )
}