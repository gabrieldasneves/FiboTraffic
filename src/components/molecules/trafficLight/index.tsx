export function TrafficLight() {
  return (
    <>
      <div className="container">
        <div className="fire">
          <label className="label red">
            <input type="radio" name="radio" className="input" />
          </label>
          <label className="label orange">
            <input type="radio" name="radio" className="input" />
          </label>
          <label className="label green">
            <input type="radio" name="radio" className="input" />
            <span className="light-number">3</span>
          </label>
          <span className="selection"></span>
        </div>
      </div>
    </>
  );
}
