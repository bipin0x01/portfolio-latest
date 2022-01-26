const defaultProps = {
  position: "Freelancer",
  from: "2019",
  to: "2020",
  roles:
    "My role was to build a website for a local business. I was responsible for the frontend and backend development.",
};

export default function TimelineItem({ position, from, to, roles, company }) {
  return (
    <div className="timeline-item">
      <div className="content">
        <h2>
          {position} {company && <>, {company}</>}
        </h2>
        <h6 className="date">
          {from} — {to}
        </h6>
        <p>{roles}</p>
      </div>
    </div>
  );
}

TimelineItem.defaultProps = defaultProps;
