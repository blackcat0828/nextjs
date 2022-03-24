import fs from 'fs/promises';
import path from 'path';

const ProductDetailPage = (props) => {
    const { loadedProduct } = props;

    if(!loadedProduct){
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </>
    )
};

export const getStaticProps = async (ctx) => {
    const { params } = ctx;
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    const productId = params.pid;

    const product = data.products.find(product => product.id === productId);


    return {
        props: {
            loadedProduct: product,
        }
    }
}

export const getStaticPaths = async (ctx) => {

    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    const ids = data.products.map(product => product.id);
    const params = ids.map(id => ({params: {pid: id}}))


    return {
        paths: params,
        fallback: false,
    }
}

export default ProductDetailPage;