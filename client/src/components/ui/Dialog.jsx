export default function Dialog({
  children,
  labelCancel,
  labelSubmit,
  bgOverlay,
  bgDialog,
  onClose,
  onSubmit,
}) {
  return (
    // Overlay
    <div
      className={`flex-center fixed inset-0 ${bgOverlay ? `${bgOverlay}/40` : "bg-gray-10/40"} backdrop-blur-xs`}
      onClick={onClose}
    >
      {/* Dialog */}
      <div
        className={`card-static-col transition-base h-fit w-[500px] ${bgDialog ?? "bg-gray-10"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dialog content */}
        {children}

        {/* Button */}
        <div className="flex-end w-full gap-4">
          <div
            className="btn-in-card hover:text-cancel w-fit"
            onClick={onClose}
          >
            {labelCancel ?? "Cancel"}
          </div>
          <div className="btn-in-card text-accent w-fit" onClick={onSubmit}>
            {labelSubmit ?? "Submit"}
          </div>
        </div>
      </div>
    </div>
  );
}
