import { useParams, useLocation } from 'react-router-dom';
import { resourcesContext } from '../../Utils/Context';
import { React, useContext, useRef } from 'react'
import gsap from 'gsap';

const ResourceDetails = () => {
  const { resources, setResources } = useContext(resourcesContext);
  const { type } = useParams();   // you can obviously check what is in {type} through console.log(type) || const type = useParams() console.log(type), basically in AppRoutes.jsx i have give resourcesDetails/:type so here it is getting extracted in type.
  const location = useLocation(); // here also same thing you can obviously check what is in location through console.log(location) to understand it.
  const { item } = location.state || {};
  console.log(item)

  return (
    <div>
      <div className="w-[50%] border-red-400 ml-[auto] mr-[auto] mt-[20px]">
        <h1 className="heading text-5xl text-center font-extrabold pt-[2vw]">{item.resourceTitle}</h1>
        <p className="subheading text-center text-lg mt-[1vw]">
          {item.resourceDescription}
        </p>
      </div>

      <div className="w-[90%] ml-[auto] mr-[auto] pt-[40px] h-[80%]">
        <h1 className="text-2xl mb-[5px] font-bold">Name</h1>

        {item.resourceLinks.map((resource, index) => {
          return <h1 className="hover:bg-black hover:text-white transition-all text-2xl mb-[5px] font-medium" key={index}>{resource.name}
          
          {resource.url} {resource.desc}</h1>
        })}


      </div>

    </div>
  )
}

export default ResourceDetails
