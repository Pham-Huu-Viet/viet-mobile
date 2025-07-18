export default function PaymentMethod({ icon, label }) {
  return (
    <div className="btn-in-card flex h-14 w-14 cursor-pointer flex-col items-center justify-between p-2 text-base">
      {icon}
      <span className="italic">{label}</span>
    </div>
  );
}
