import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { 
	HomeIcon, 
	ImageIcon, 
	HamburgerMenuIcon,
	Cross1Icon,
	EnvelopeClosedIcon
} from "@radix-ui/react-icons";

const AppRouter = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const location = useLocation();

	const navItems = [
		{ to: "/", label: "Bộ sưu tập ảnh", icon: ImageIcon },
		{ to: "/profile", label: "Tổng Quan", icon: HomeIcon },
		{ to: "/tamthu", label: "Tâm Thư", icon: EnvelopeClosedIcon },
	];

	const isActive = (path) => location.pathname === path;

	return (
		<div className="relative w-full">
			{/* Desktop Navigation */}
			<div className="hidden md:flex justify-center w-full pt-8 pb-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600">
				<NavigationMenu.Root className="NavigationMenuRoot">
					<NavigationMenu.List className="flex gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl px-6 py-3">
						{navItems.map((item) => {
							const Icon = item.icon;
							const active = isActive(item.to);
							return (
								<NavigationMenu.Item key={item.to}>
									<NavigationMenu.Link asChild>
										<Link
											to={item.to}
											className={`
												flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105
												${active 
													? 'bg-white text-purple-600 shadow-lg' 
													: 'text-white hover:bg-white/20 hover:backdrop-blur-sm'
												}
											`}
										>
											<Icon className="w-5 h-5" />
											<span className="font-medium">{item.label}</span>
										</Link>
									</NavigationMenu.Link>
								</NavigationMenu.Item>
							);
						})}
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</div>

			{/* Mobile Navigation */}
			<div className="md:hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600">
				<div className="flex justify-between items-center px-4 py-4">
					<div className="text-white font-bold text-xl">Moon</div>
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="text-white p-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all"
					>
						{mobileMenuOpen ? (
							<Cross1Icon className="w-6 h-6" />
						) : (
							<HamburgerMenuIcon className="w-6 h-6" />
						)}
					</button>
				</div>

				{/* Mobile Menu Dropdown */}
				<div className={`
					overflow-hidden transition-all duration-300 ease-in-out
					${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
				`}>
					<div className="px-4 pb-4 space-y-2">
						{navItems.map((item) => {
							const Icon = item.icon;
							const active = isActive(item.to);
							return (
								<Link
									key={item.to}
									to={item.to}
									onClick={() => setMobileMenuOpen(false)}
									className={`
										flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200
										${active 
											? 'bg-white text-purple-600 shadow-lg' 
											: 'text-white bg-white/10 hover:bg-white/20'
										}
									`}
								>
									<Icon className="w-5 h-5" />
									<span>{item.label}</span>
								</Link>
							);
						})}
					</div>
				</div>
			</div>

			{/* Decorative Elements */}
			<div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
			<div className="absolute top-0 right-1/4 w-24 h-24 bg-pink-300/20 rounded-full blur-2xl"></div>
		</div>
	);
};

export default AppRouter;
