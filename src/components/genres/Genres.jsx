/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./style.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Genres({ data }) {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((genre) => {
        if (!genres[genre]?.name) return;
        return (
          <div key={genre} className="genre">
            {genres[genre]?.name}
          </div>
        );
      })}
    </div>
  );
}

export default Genres;
