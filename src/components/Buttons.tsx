import "./buttons.sass"

export function DangerButton() {
  return <button className="dangerbtn">Delete</button>
}

export function SuccessButton(props: any) {
  const { title, icon, onClick, disabled } = props
  return <button className="successbtn" onClick={onClick} disabled={disabled}>{icon} {title || "Success"}</button>
}

export function WarningButton() {
  return <button className="warningbtn">Warning</button>
}

export function PrimaryButton() {
  return <button className="primarybtn">Primary</button>
}
