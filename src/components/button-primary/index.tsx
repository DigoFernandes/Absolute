import "./style.css";

interface PrimaryButtonProps {
    label:string,
    onClick: () => void
}

export function PrimaryButton({label, onClick} : PrimaryButtonProps){
    return (
      <button className="btn-primary" onClick={onClick}>
        {label}
      </button>
    );
}