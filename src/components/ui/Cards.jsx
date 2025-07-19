import { React, useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Link, Links } from "react-router-dom";
import { resourcesContext } from "../../Utils/Context";
import ResourceDetails from "./ResourceDetails";

const Cards = () => {
  const resourcesDetails = useContext(resourcesContext);
  // console.log(resourcesDetails);

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-[50%] mb-5">
        <h1 className="heading text-5xl text-center font-extrabold pt-[2vw]">
          Useful Resources
        </h1>
        <h1 className="subheading text-center text-xl mt-[1vw]">
          Explore a curated collection of valuable resources designed to help
          you learn, practice, and grow in your coding journey.
        </h1>
      </div>

      <div className="flex w-full flex-wrap gap-5 items-center justify-center">
        {resourcesDetails.resources.map((item, index) => (
          // here i have passed the data or state of the current card or current element clicked such that if the user click on the yt card then it should pass the data of yt tutorials to the next component that is ResourcesDetails.jsx 
          <Link key={index} to={item.reference} state={{item}}>
            <Card
              className="bg-zinc-800 text-slate-200 h-[27vh] w-[30vw] p-[1.5vw] shadow-2xl"
            >
              <CardTitle className="text-xl">{item.resourceTitle} </CardTitle>
              <CardDescription className="mt-2 text-slate-300 text-lg">
                {item.resourceDescription}
              </CardDescription>
            </Card>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
