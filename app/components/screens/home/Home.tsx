import {FC} from "react";
import {IHome} from "./home.interface";
import Layout from "../../layout/Layout";

const Home: FC<IHome> = () => {
    return (
        <Layout>
            <h1>home page</h1>
        </Layout>
    );
};

export default Home;
