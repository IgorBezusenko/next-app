import {FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../../assets/images/logo.svg"

const Logo: FC = () => {
    return (
        <Link href="/">
            <a className="px-layout mb-10 blocks ">
                <Image src={logoImage} width={200} height={40} alt={"Crazy movie"} draggable={false} />
            </a>
        </Link>
    );
};

export default Logo;
