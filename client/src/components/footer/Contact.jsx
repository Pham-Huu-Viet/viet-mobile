import FacebookButton from "./FacebookButton";
import InstagramButton from "./InstagramButton";
import TiktokButton from "./TiktokButton";

export default function Contact() {
  return (
    <div className="flex-col-start gap-4">
      <h4 className="font-semibold">VietMobile</h4>
      <p className="text-sub-text">
        Genuine electronics store with a variety of technology products.
      </p>

      <div className="flex-start gap-4">
        <FacebookButton />
        <InstagramButton />
        <TiktokButton />
      </div>
    </div>
  );
}
