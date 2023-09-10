import facebook from "../assets/icon/social/facebook.png"
import profile from "../assets/icon/social/profile.png"
import twitter from "../assets/icon/social/twitter.png"
const Navbar = () => {
    return (
        <div class='flex justify-between items-center'>
            <img src={profile} alt="Logo-profile" width={40} className="cursor-pointer" />
            <ul className="hidden md:flex">
                <li>
                    <a href="">
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://facebook.com" target="_blank">
                        <img src={facebook} alt="Logo-Facebook" width={40} />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://twitter.com/" target="_blank"><img src={twitter} alt="Logo-Twitter" width={40} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;