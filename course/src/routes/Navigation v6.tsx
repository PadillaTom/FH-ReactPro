// import React from "react";
// import {
// 	BrowserRouter,
// 	NavLink,
// 	Navigate,
// 	Route,
// 	Routes,
// } from "react-router-dom";

// import logo from "../logo.svg";

// import "../index.css";

// const Navigation = () => {
// 	return (
// 		<BrowserRouter>
// 			<div className="main-layout">
// 				<nav>
// 					<img src={logo} alt="logo" />
// 					<ul>
// 						<li>
// 							<NavLink
// 								to="/home"
// 								className={({ isActive }) => (isActive ? "nav-active" : "")}
// 							>
// 								Home
// 							</NavLink>
// 						</li>
// 						<li>
// 							<NavLink
// 								to="/about"
// 								className={({ isActive }) => (isActive ? "nav-active" : "")}
// 							>
// 								About
// 							</NavLink>
// 						</li>
// 						<li>
// 							<NavLink
// 								to="/users"
// 								className={({ isActive }) => (isActive ? "nav-active" : "")}
// 							>
// 								Users
// 							</NavLink>
// 						</li>
// 					</ul>
// 				</nav>
// 				<Routes>
// 					<Route path="home" element={<h1>Home</h1>}></Route>
// 					<Route path="about" element={<h1>About</h1>}></Route>
// 					<Route path="users" element={<h1>Users</h1>}></Route>
// 					<Route path="/*" element={<Navigate to="/home" replace />}></Route>
// 				</Routes>
// 			</div>
// 		</BrowserRouter>
// 	);
// };

// export default Navigation;

export {};
