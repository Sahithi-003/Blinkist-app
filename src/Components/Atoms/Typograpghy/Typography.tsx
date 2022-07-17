import React from "react"
import Typography  from '@mui/material/Typography'


interface Props{
    children : string | JSX.Element;
    variant: "header" | "title" | "subtitle" | "body1" | "caption"|"h3"|"h5"|"h2";
}

const getMappedVariant = (variant: string) => {
    switch (variant) {
      case "header":
        return "h4";
      case "h5":
        return "h5";
      case "h3":
        return "h3";
      case "h2":
        return "h2";
      case "title":
        return "subtitle1";
      case "subtitle":
        return "subtitle2";
      default:
        return "body1";
    }
  };

  const TypographyComponent= (props: Props) => (
    <Typography
      variant={getMappedVariant(props.variant)}
      sx={{ whiteSpace: "nowrap", padding: 0 }}
     
    >
      {props.children}
    </Typography>
  );

export default TypographyComponent;



// export const Heading = (props: Props) => {
//       return(
//         <div>
//             <Typography color="#03314B" sx={{ margin: "8% 0% 4%", padding:"0 12px" }} variant={props.variant}>
//             {props.children}
//             </Typography>
//         </div>
//       );

// };

// export const SubHeading = (props: Props) => {
//     return (
//      <div>
//         <Typography
//           color="#03314B"
//           sx={{ margin: "4% 0% 4%", padding: "0 12px" }}
//           variant={props.variant}
//         >
//           {props.children}
//         </Typography>
//       </div>
//     );
//   };

