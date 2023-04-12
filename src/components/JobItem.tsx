import { data } from "../assets/data";

const JobItem = () => {
  return (
    <>
      {data.map((jobItem, i) => {
        return (
          <div key={jobItem.id} id="container">
            <img
              key={jobItem.logo}
              src={require("../assets/images/" +
                data[i].logo.slice(9, -4) +
                ".svg")}
              alt="text"
            />
            <div id="item-middle">
              <div id="first-line">
                <p key={jobItem.company} id="company">
                  {data[i].company}
                </p>
                {data[i].new && <p className="new">NEW!</p>}
                {data[i].featured && <p className="featured">FEATURED</p>}
              </div>
              <p key={jobItem.position} id="position">
                {data[i].position}
              </p>
              <div id="item-times">
                <p key={jobItem.postedAt}>{data[i].postedAt}</p>
                <p key={jobItem.contract}>{data[i].contract}</p>
                <p key={jobItem.location}>{data[i].location}</p>
              </div>
            </div>
            <div id="item-filters">
              <p key={jobItem.role}>{data[i].role}</p>
              <p key={jobItem.level}>{data[i].level}</p>
              {data[i].languages.map((languageItem, j) => {
                return (
                  <p key={jobItem.languages.toString()}>
                    {data[i].languages[j]}
                  </p>
                );
              })}
              {data[i].tools.map((toolsItem, k) => {
                return <p key={jobItem.tools.toString()}>{data[i].tools[k]}</p>;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default JobItem;
