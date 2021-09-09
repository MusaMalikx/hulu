import Image from "next/image";
import hulu from "../assets/hulu.svg";
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";

const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row justify-between m-5 h-auto mb-5 sm:mb-0'>
            <div className='flex flex-grow justify-evenly max-w-2xl mb-3 sm:mb-0'>
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>
            <Image
                className='object-contain'
                src={hulu}
                alt='logo'
                width={100}
                height={50}
            />
        </header>
    )
}

export default Header;
