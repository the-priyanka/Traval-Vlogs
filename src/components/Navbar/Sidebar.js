// import React from "react";
// import { useGlobalContext } from "../../context/context";
// import { FaTimes } from "react-icons/fa";
// import { links, social } from "./data";
// const Sidebar = () => {
//   const { isSidebarOpen, closeSidebar } = useGlobalContext();

//   return (
//     <aside className="show-sidebar">
//       <div className="btn">
//         <button className="sidebar-toggle" onClick={closeSidebar}>
//           <FaTimes />
//         </button>
//       </div>
//       <ul className="sidebar-links">
//         {links.map((link) => {
//           const { id, url, text, icon } = link;
//           return (
//             <li key={id}>
//               <a href={url}>
//                 {icon}
//                 {text}
//               </a>
//             </li>
//           );
//         })}
//       </ul>
//       <ul className="links social-icons">
//         {social.map((link) => {
//           const { id, url, icon } = link;
//           return (
//             <li key={id}>
//               <a href={url}>{icon}</a>
//             </li>
//           );
//         })}
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;
