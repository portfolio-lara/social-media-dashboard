import {AccountWidgetProps} from '../interfaces'

export default function AccountWidget(props: AccountWidgetProps) {
  return (
    <div className="flex items-center account-widget">
      <img src={`../../../public/images/icon-${props.platform}.svg`} alt={props.platform} />
      <p className="ps-1">{props.accountName}</p>
    </div>
  );
}
