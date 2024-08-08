import { Helmet } from "react-helmet-async";
import BreakingNews from "../Shared/BreakingNews";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard/NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Helmet>
                <title>Dragon-News | Home</title>
            </Helmet>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <NewsCard key={aNews._id}
                        news={aNews}
                        ></NewsCard>)
                    }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;