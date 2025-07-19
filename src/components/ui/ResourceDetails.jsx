import { useParams, useLocation } from 'react-router-dom';
import { resourcesContext } from '../../Utils/Context';
import { React, useContext } from 'react'

const ResourceDetails = () => {
  const { resources, setResources } = useContext(resourcesContext);
  const { type } = useParams();   // you can obviously check what is in {type} through console.log(type) || const type = useParams() console.log(type), basically in AppRoutes.jsx i have give resourcesDetails/:type so here it is getting extracted in type.
  const location = useLocation(); // here also same thing you can obviously check what is in location through console.log(location) to understand it.
  const { item } = location.state || {};
  console.log(item)
  return (
    <div>ResourceDetails</div>
  )
}

export default ResourceDetails