import DarkRocket from "../../assets/dark-mode/rocket-32x32-dark.svg";
import NeutralRocket from "../../assets/neutral/rocket-32x32-neutral.svg";

const Header:React.FC<{isDark:boolean}> = ({isDark}) => {
    const rocket = isDark ? DarkRocket : NeutralRocket;

    return (
        <div className="flex flex-row justify-center w-full">
            <img src={rocket} className="h-[80px]" alt="Rocket" />
        </div>
    )
}

export default Header;