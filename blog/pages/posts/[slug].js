import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/posts-util";

const PostDetailPage = (props) => {
    return  <PostContent post={props.post}/>
};



export default PostDetailPage;

export const getStaticProps = async (ctx) => {
    const { params } = ctx;
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export const getStaticPaths = async (ctx) => {

    const postFilenames = getPostFiles();
    const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''));

    return {
        paths: slugs.map(slug => ({ params: {slug: slug}})),
        fallback: false
    }
}