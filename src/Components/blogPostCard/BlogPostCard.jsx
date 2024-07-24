import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../Context/data/MyContext';

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl ">

          {/* Main Content  */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {/* Card 1  */}
            <div className="p-4 md:w-1/3" >
              <div
                style={{
                  background: mode === 'dark'
                    ? 'rgb(30, 41, 59)'
                    : 'white',
                  borderBottom: mode === 'dark'
                    ?
                    ' 4px solid rgb(226, 232, 240)'
                    : ' 4px solid rgb(30, 41, 59)'
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === 'dark'
                   ? 'shadow-gray-700'
                   : 'shadow-xl'
                   } 
               rounded-xl overflow-hidden`} 
              >
                {/* Blog Thumbnail  */}
                <img className=" w-full" src={'https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'} alt="blog" />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'24 June 2024'}
                  </h2>

                  {/* Blog Title  */}
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'React Introduction'}
                  </h1>

                  {/* Blog Description  */}
                  <p className="leading-relaxed mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                   React is a popular JavaScript library developed by Facebook for building user interfaces, particularly single-page applications. It allows developers to create large web applications that can update and render efficiently in response to data changes. React is component-based, meaning the UI is divided into reusable components, each managing its own state and rendering logic.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2  */}
            <div className="p-4 md:w-1/3" >
              <div
                style={{
                  background: mode === 'dark'
                    ? 'rgb(30, 41, 59)'
                    : 'white',
                  borderBottom: mode === 'dark'
                    ?
                    ' 4px solid rgb(226, 232, 240)'
                    : ' 4px solid rgb(30, 41, 59)'
                }}
               className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === 'dark'
                   ? 'shadow-gray-700'
                   : 'shadow-xl'
                   } 
               rounded-xl overflow-hidden`} 
              >
                {/* Blog Thumbnail  */}
                <img className=" w-full" src={'https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1.png'} alt="blog" />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'29 June 2024'}
                  </h2>

                  {/* Blog Title  */}
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'React Introduction'}
                  </h1>

                  {/* Blog Description  */}
                  <p className="leading-relaxed mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                   Angular is a powerful and popular framework for building dynamic, single-page web applications. Developed and maintained by Google, Angular offers a robust set of tools and features for creating highly interactive and performant user interfaces. It uses TypeScript, a superset of JavaScript, which enhances code quality and maintainability. 
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 md:w-1/3" >
              <div
                style={{
                  background: mode === 'dark'
                    ? 'rgb(30, 41, 59)'
                    : 'white',
                  borderBottom: mode === 'dark'
                    ?
                    ' 4px solid rgb(226, 232, 240)'
                    : ' 4px solid rgb(30, 41, 59)'
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === 'dark'
                   ? 'shadow-gray-700'
                   : 'shadow-xl'
                   } 
               rounded-xl overflow-hidden`} 
              >
                {/* Blog Thumbnail  */}
                <img className=" w-full" src={'https://stridefuture.com/wp-content/uploads/Recent-Trends-on-UI-UX.jpg'} alt="blog" />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'17 July 2024'}
                  </h2>

                  {/* Blog Title  */}
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                    {'React Introduction'}
                  </h1>

                  {/* Blog Description  */}
                  <p className="leading-relaxed mb-3" style={{
                    color: mode === 'dark'
                      ? 'rgb(226, 232, 240)'
                      : ' rgb(30, 41, 59)'
                  }}>
                   User Interface (UI) and User Experience (UX) are critical components in designing digital products. UI refers to the visual elements users interact with, such as buttons, icons, and layouts, while UX focuses on the overall feel and ease of use of the product. Together, they aim to create intuitive and seamless interactions that enhance user satisfaction and engagement.
                  </p>
                </div>
              </div>
            </div>

          

           
          </div>

          {/* See More Button  */}
          <div className="flex justify-center my-5">
            <Button
              style={{
                background: mode === 'dark'
                  ? 'rgb(226, 232, 240)'
                  : 'rgb(30, 41, 59)',
                color: mode === 'dark'
                  ?
                  'rgb(30, 41, 59)'
                  : 'rgb(226, 232, 240)'
              }}>
              See More
            </Button>
          </div>
        </div>
      </section >
    </div >
  )
}

export default BlogPostCard