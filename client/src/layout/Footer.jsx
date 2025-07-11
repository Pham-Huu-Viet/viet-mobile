import { Link } from "react-router-dom";
import Contact from "../components/footer/Contact";
import { dataFooter } from "../mock/data";

export default function Footer() {
  return (
    <div className="section-container bg-gray-30 transition-base mt-auto">
      <div className="section-content flex-col-center">
        <div className="grid grid-cols-4 gap-8">
          <Contact />

          {dataFooter?.map((item, index) => (
            <div key={index} className="flex-col-start justify-start gap-4">
              <h4 className="font-semibold">{item?.title}</h4>

              <div className="flex-col-start text-sub-text">
                {item?.items.map((items, index) => (
                  <Link key={index}>{items.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-sub-text flex-center border-border-gray-30 mt-12 w-full border-t pt-6">
          © 2025 VietMobile. All rights reserved.
        </div>
      </div>
    </div>
  );
}
