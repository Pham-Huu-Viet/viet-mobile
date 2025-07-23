import { useEffect, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { menuItems } from "../../config/admin/adminSidebar";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function AdminSidebar() {
  const navigate = useNavigate();
  const [itemOpens, setItemOpens] = useState([]);
  const [itemActive, setItemActive] = useState(menuItems[0]);
  const [subMenuContainer] = useAutoAnimate({
    duration: 150,
    easing: "ease-in-out",
    delay: 0,
  });

  useEffect(() => {
    if (itemActive?.page) {
      navigate(itemActive?.page);
    }
  }, [itemActive]);

  // Handle click title item
  function handleClickItem(item) {
    const titleItem = item?.title;
    const isOpened = itemOpens.includes(titleItem);

    if (item?.page) {
      setItemActive(item);
      setItemOpens([item.title]);
    }

    if (isOpened) {
      setItemOpens((prev) => prev.filter((itemOpen) => itemOpen != titleItem));
    } else {
      setItemOpens((prev) => [...prev, titleItem]);
    }
  }

  // handle click sub item
  function handleClickSubItem(item, subItem) {
    setItemActive(subItem);
    setItemOpens([item.title]);
  }

  return (
    <div collapsible="icon" className="card-static-col relative rounded-none">
      {/* Title  */}
      <div className="border-border-gray-20 w-full border-b pb-4">
        <div className="flex-center gap-3 rounded-2xl">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white shadow-lg">
            <div className="flex-center h-full w-full">V</div>
          </div>
          <div>
            <h2 className="text-lg font-bold">VietMobile</h2>
            <p className="flex-start text-sub-text gap-1 text-xs">
              <Sparkles className="h-3 w-3" />
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      {/* menu */}
      <div className="w-full py-2 text-sm">
        <div className="flex-col-start">
          {menuItems.map((item, index) => (
            // Item:
            <div key={index} className="w-full">
              {/* Item */}
              <div
                className="flex-between w-full cursor-pointer p-3"
                onClick={() => handleClickItem(item)}
              >
                <div className="flex-start gap-3">
                  <item.icon className="text-accent h-5 w-5 shrink-0 stroke-[1.5]" />
                  <span
                    className={`${item?.page == itemActive?.page ? "text-accent" : ""}`}
                  >
                    {item.title}
                  </span>
                </div>
                {item?.items && (
                  <ChevronDown className="text-sub-text-2 h-4 w-4" />
                )}
              </div>

              {/* Sub Item */}
              <div ref={subMenuContainer} className="ml-5.5">
                {itemOpens?.includes(item?.title) && (
                  <div className="transition-base flex-col-start border-border-gray-20 border-l pl-3.5">
                    {item?.items?.map((subItem, index) => (
                      <div
                        key={index}
                        onClick={() => handleClickSubItem(item, subItem)}
                        className={`transition-quick hover:text-accent cursor-pointer px-2 py-1.5 ${
                          itemActive?.page === subItem.page ? "text-accent" : ""
                        }`}
                      >
                        <span>{subItem.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div />
    </div>
  );
}
