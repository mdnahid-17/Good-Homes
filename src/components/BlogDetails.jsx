import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const blog = data.find((item) => item.id == id);

  const { estate_title, image, segment_name, description, price, status, area, location, facilities } = blog;

  return (
    <div className="flex flex-col mx-0 border lg:flex-row gap-5 px-10 my-32 py-10 lg:mx-20">
      <Helmet>
        <title>Details | {id}</title>
      </Helmet>
      <div className="w-full lg:w-2/3">
        <img className="lg:bg-slate-300 p-10 py-20" src={image} alt="" />
      </div>

      <div className="w-full lg:space-y-3 p-5">
        <h2 className="text-2xl font-bold border-b border-dashed pb-3">{estate_title}</h2>
        <h3 className="text-xl font-semibold py-2">{segment_name}</h3>
        <p>
          <span className="font-bold">Description</span> {description}
        </p>
        <ul className="flex justify-between p-2 border-b border-dashed pb-3">
          <li className="font-bold text-xl">Facilities:</li>
          {facilities.map((tag, idx) => (
            <li key={idx} className="text-red-600 font-semibold text-lg">
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex-col lg:flex justify-between py-5">
          <div>
            <p className="text-xl font-medium">Price: <span className="text-gray-400">{price}</span></p>
            <p className="text-xl font-medium">Status: <span className="text-gray-400">{status}</span></p>
          </div>
          <div>
            <p className="text-xl font-medium">Area: <span className="text-gray-400">{area}</span></p>
            <p className="text-xl font-medium">Location: <span className="text-gray-400">{location}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
