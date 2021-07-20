import Head from "next/head";

const Meta = ({ title, keywords, description, author }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta name="author" content={author} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    );
};

Meta.defaultProps = {
    title: "My Todo - For my daily work schedule",
    keywords: "todo, todo list, todo app, my todos",
    description: "The todo app for my daily work schedule",
    author: "SSahil",
};
export default Meta;
