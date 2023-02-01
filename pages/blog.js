import React, { useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link';
import Head from 'next/head';
import * as fs from 'fs';


const Blog = (props) => {

  const [blogs, setBlogs] = useState(props.allBlogs);


  return (
    <>
      <style jsx>
        {`
        h2{
          font-size: 40px;
          width: fit-content;
          margin: auto;
          margin-bottom: 20px; 
        }
        *{
          font-family: Poppins;
        }
        h3{
          font-size: 25px;
          margin-top: 10px;
        }
        `}
      </style>

      <Head>
        <title>Blogs | Mera Blog</title>
      </Head>

      <div className={styles.grid}>

        {blogs.map((blogitem) => {
          return <div key={blogitem.slug} className={styles.card}>
            <Link href={`/blogpost/${blogitem.slug}`}><h3>{blogitem.title}</h3></Link>
            <p>{blogitem.content.substring(0, 130)}...</p>
          </div>
        })}

      </div>
    </>
  )
}

// For Server Side Rendering

// export async function getServerSideProps(context) {

//   let response = await fetch('http://localhost:3000/api/blogs');
//   let allBlogs = await response.json();

//   return {
//     props: {allBlogs}, // will be passed to the page component as props
//   }
// }


// For Static Site Generation 

export async function getStaticProps(context) {

  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8');
    allBlogs.push(JSON.parse(myfile))
  }

  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default Blog;