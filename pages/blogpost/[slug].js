import Head from 'next/head';
import React, { useState } from 'react'
import * as fs from 'fs';


const Slug = (props) => {
    // console.log(props);
    const [blog, setBlog] = useState(props.data);

    return (
        <>
            <style jsx>
                {`
                .container{
                    padding: 0 16rem;
                    text-align: center;
                    font-family: Poppins;
                }
                .container h1{
                    margin: 20px auto;
                }
                .container h4{
                    font-weight: 100;
                    margin-top: -15px;
                }
                .container hr{
                    font-weight: 100;
                    margin-top: 15px;
                }

                .container p{
                    margin: 20px auto;
                    text-align: justify;
                }
                
                @media (max-width: 1000px) {
                    .container{
                        padding: 0 8rem;
                    }
                }
                @media (max-width: 700px) {
                    .container{
                        padding: 0 2rem;
                    }


                `}
            </style>

            <Head>
                <title>{blog.title}</title>
            </Head>

            <div className='container'>
                <h1>{blog.title}</h1>
                <h4>By {blog.author}</h4>
                <hr />
                <p>{blog.content}</p>
            </div>
        </>
    )
}

// For Server Side Rendering

// export async function getServerSideProps(context) {

//     const { slug } = context.query;

//     let response = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//     let data = await response.json();

//     return {
//         props: { data }, // will be passed to the page component as props
//     }
// }


// For Static Site Generation

export async function getStaticPaths(){
    return {
        paths: [
            { params: { slug: 'how-to-learn-django' } },
            { params: { slug: 'how-to-learn-flask' } },
            { params: { slug: 'how-to-learn-javascript' } },
            { params: { slug: 'how-to-learn-nextjs' } }
        ], 
        fallback: false
    };
}

export async function getStaticProps(context) {

    const { slug } = context.params;

    let data = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8');
    

    return {
        props: { data: JSON.parse(data) }, // will be passed to the page component as props
    }
}

export default Slug;