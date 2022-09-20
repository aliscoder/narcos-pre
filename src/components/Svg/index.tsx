import { SVGProps } from "react";

const Svg: React.FC<SVGProps<any>> = ({ children, ...props }) => {
  return <svg {...props}>{children}</svg>;
};

export default Svg;
