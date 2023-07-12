type TrendProps = {
  change: number;
};

export default function Trend(props: TrendProps) {
  return (
    <>
      {props.change > 0 && (
        <p className="change change-up">
        <img src='../../images/icon-up.svg' alt="Upwards trend"/>
          <span>&nbsp;{props.change}&nbsp;</span>
          <span className="today-span">Today</span>
          <span className="percent-span">&nbsp;%&nbsp;</span>
        </p>
      )}

      {props.change < 0 && (
        <p className="change change-down">
          <img src="../../images/icon-down.svg" alt="Downwards trend" />
          <span>&nbsp;{props.change * -1}&nbsp;</span>
          <span className="today-span">Today</span>
          <span className="percent-span">&nbsp;%&nbsp;</span>
        </p>
      )}

      {props.change == 0 && (
        <p className="change">
          <span>{props.change}</span>No change{" "}
          <span className="today">today</span>
          <span className="percent"> %</span>
        </p>
      )}
    </>
  );
}
