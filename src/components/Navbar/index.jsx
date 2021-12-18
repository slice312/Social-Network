import {NavLinkV5Style} from "../common/NavLinkV5Style";
import css from "./Navbar.module.css";



export const Navbar = () => {
    console.log("Navbar");
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLinkV5Style to="/profile/2" activeClassName={css.activeLink}>Profile</NavLinkV5Style>
            </div>
            <div className={css.item}>
                <NavLinkV5Style to="/dialogs" activeClassName={css.activeLink}>Messages</NavLinkV5Style>
            </div>
            <div className={css.item}>
                <NavLinkV5Style to="/users" activeClassName={css.activeLink}>Users</NavLinkV5Style>
            </div>
            <div className={css.item}>
                <NavLinkV5Style to="/news" activeClassName={css.activeLink}>News</NavLinkV5Style>
            </div>
            <div className={css.item}>
                <NavLinkV5Style to="/music" activeClassName={css.activeLink}>Music</NavLinkV5Style>
            </div>
            <div className={css.item}>
                <NavLinkV5Style to="/settings" activeClassName={css.activeLink}>Settings</NavLinkV5Style>
            </div>
        </nav>
    );
};