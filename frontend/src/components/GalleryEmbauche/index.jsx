import SGallery from "./style";
import CardJobs from "@components/CardJobs";
import { useContext } from "react";
import statsContext from "@services/contexts";

export default function Gallery() {
  const { datajobs } = useContext(statsContext);
  return (
    <SGallery>
      {datajobs.map((d) => {
        return <CardJobs />;
      })}
    </SGallery>
  );
}
