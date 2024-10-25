import { jsx as _jsx } from "react/jsx-runtime";
import CustomCarousel from "./CustomCarousel";
const RightColumn = () => {
    const images = [
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1729469836/Slide_iit8nu.jpg?text=Slide+1",
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1729469837/Slide_1_t0aptw.jpg?text=Slide+2",
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1729469836/Slide_2_t14vjm.jpg?text=Slide+3",
    ];
    return (_jsx("div", { className: "max-w-[350px] lg:max-w-[640px]  mx-auto py-3 text-white rounded", children: _jsx(CustomCarousel, { images: images }) }));
};
export default RightColumn;