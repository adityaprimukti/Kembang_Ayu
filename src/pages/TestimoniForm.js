import "../Styles/TestimoniForm.css";

const TestimoniForm = () => {
  return (
    <div className="testimoni-form">
      <div className="rectangle-parent9">
        <div className="group-child9" />
        <div className="group-child10" />
        <div className="rectangle-parent10">
          <div className="group-child11" />
          <input className="instance-child5" type="text" placeholder="Nama"/>

        </div>
        <input className="your-assessment" type="text" placeholder="Your assessment" />
        <div className="give-your-assessment-container">
          <b>{`Give `}</b>
          <b className="your1">{`Your `}</b>
          <b>Assessment</b>
        </div>
        <div className="vector-parent5">
          <img className="instance-child5" alt="" src="/rectangle-141.svg" />
          <b className="send7">Send</b>
        </div>
      </div>
    </div>
  );
};

export default TestimoniForm;
