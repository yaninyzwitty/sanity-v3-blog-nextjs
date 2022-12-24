import {previewData} from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../utils/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense"
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";


const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->,
  }
    | order(_createdAt desc)
`


 const HomePage = async () => {
   if(previewData()) {
      return (
      <PreviewSuspense fallback={
         <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
               Loading Preview Data...
            </p>
         </div>
         
      }>
         <PreviewBlogList query={query} />
          
         
      </PreviewSuspense>)

   } 

   const posts = await client.fetch(query);
   // console.log(posts);
   return (
      <div className="">
         {/* blogs */}
         <BlogList posts={posts} />

    
      </div>
   );
};

export default HomePage;