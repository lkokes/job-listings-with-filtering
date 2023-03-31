import { data } from "../data";

type Props = {};

const Job = (props: Props) => {
  return (
    <div>
      {data.map((jobItem, i) => {
        return (
          <div
            style={{
              padding: "25px 50px",
            }}
            key={jobItem.id}
          >
            <p key={jobItem.company}>{data[i].company}</p>
            <p key={jobItem.logo}>
              <img src={data[i].logo} alt="text" />
            </p>
            <p key={jobItem.position}>{data[i].position}</p>
            <p key={jobItem.role}>{data[i].role}</p>
            <p key={jobItem.level}>{data[i].level}</p>
            <p key={jobItem.postedAt}>{data[i].postedAt}</p>
            <p key={jobItem.contract}>{data[i].contract}</p>
            <p key={jobItem.location}>{data[i].location}</p>
            {/* <p key={jobItem.languages}>{data[i].languages}</p>
            <p key={jobItem.tools}>{data[i].tools}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default Job;
